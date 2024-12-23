import { account, databases, ID } from '../services/appwrite/client.js';
import { Query } from 'appwrite';
// will use it later if needed
// import bcrypt from 'bcryptjs'; 

export const getCurrentUserId = () => {
  try {
    const currentUser = account.get()
    return currentUser.$id
  } catch (error) {
    console.error('Error fetching current user:', error)
    throw error
  }
}

export const getCurrentUser = () => {
  try {
    const currentUser = account.get()
    return currentUser
  } catch (error) {
    console.error('Error fetching current user:', error)
    throw error
  }
}

// Sign Up Function
export const signUp = async (email, password) => {
  try {
    const response = await account.create(ID.unique(), email, password);
    console.log('User created successfully:', response);
    return response;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Sign In Function
export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    const user = await account.get();

    const userDocument = await databases.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      user.$id
    );

    if (!userDocument) {
      throw new Error('User not found');
    }

    const userData = {
      userEmail: userDocument.email,
      role: userDocument.role,
      userId: user.$id,
      name: user.name
    };

    localStorage.setItem('session', JSON.stringify({ userData }));
    console.log('User signed in successfully:', userData);

    return { userData };
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};



// Sign Out Function
export const signOut = async () => {
  try {
    await account.deleteSession('current');
    console.log('User signed out successfully');

    // Remove session data from localStorage
    localStorage.removeItem('session');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const createUser = async (email, password, name, role, phone, address, gender) => {
  try {
    const userId = ID.unique();
    const userResponse = await account.create(userId, email, password, name);
    console.log('User created successfully:', userResponse);

    // const hashedPassword = await bcrypt.hash(password, 10);

    const userDocument = {
      userId,
      email,
      role,
      password,
      name,
      phone,
      address,
      gender
    };
    const dbResponse = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID, 
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID, 
      userId, // Use the same ID as the user account
      userDocument 
    );

    console.log('User saved in database successfully:', dbResponse);
    console.log(userResponse, dbResponse)
    return { userResponse, dbResponse };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const createUserForTeamLead = async (email, password, name, role,teamLeadId)=> {
  try {
    const userId = ID.unique();
    const userResponse = await account.create(userId, email, password, name);
    console.log('User created successfully:', userResponse);

    // const hashedPassword = await bcrypt.hash(password, 10);

    const userDocument = {
      userId,
      email,
      role,
      password,
      name
    };
    const dbResponse = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID, 
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID, 
      userId, // Use the same ID as the user account
      userDocument 
    );
    console.log("TeamLead document ID:", teamLeadId);
    console.log("Generated userId:", userId);

     // Fetch the current salesMen of the team lead (so we don't overwrite it)
     const teamLead = await databases.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      teamLeadId
    );

    // Ensure salesMen is an array (in case it's empty or undefined)
    const salesMen = Array.isArray(teamLead.salesMen) ? teamLead.salesMen : [];
    const updatedSalesMen = [...salesMen, userId];

    const updateTeamLead = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      teamLeadId, // the id of the teamLead in this case
      {
        salesMen: updatedSalesMen
      }
    );

    const updateUser = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      userId,
      {
        teamLead: [teamLeadId]
        }
      );
  
      console.log('User saved in database successfully:', dbResponse)
      console.log(userResponse, dbResponse)
      return { userResponse, dbResponse,updateUser,updateTeamLead };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// export const getUsers = async (limit = 10, offset = 0) => {
//   try {
//     const response = await account.listLogs()




//     console.log(response);
//     return { response };
//   } catch (error) {
//     console.error('Error getting users:', error);
//     throw error;
//   }
// };

export const getUsers = async (limit = 10, offset = 0) => {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      [
        // Query.limit(limit),
        // Query.offset(offset),
        Query.orderDesc('$createdAt')
      ]
    );

    const totalResponse = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      // [
      //   Query.limit(1),
      //   Query.offset(0)
      // ]
    );

    const totalUsers = totalResponse.total;

    const users = response.documents.map(({ collectionId, databaseId, password: undefined , ...rest }) => rest);

    console.log(users);
    return { users, totalUsers };
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
};

export const searchUsers = async (searchTerm) => {                                                                       
  try {
    console.log('Searching for users with term:', searchTerm);
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      [
        Query.or([
          Query.contains('name', searchTerm),
          Query.contains('email', searchTerm),

        ])
      ]
    );

    const users = response.documents.map(({ collectionId, databaseId, ...rest }) => rest);
    console.log('Processed users:', users);
    return users;
  } catch (error) {
    console.error('Error searching for users:', error);
    throw error;
  }
};

export const getCurrentUserRole = () => {
  const session = JSON.parse(localStorage.getItem('session'));
  return session ? session.userRole : null;
};

export const getSession = () => {
  const session = localStorage.getItem('session');
  return session ? JSON.parse(session) : null;
};


export const getUser = async (id) => {
  if (!id) return
  try {
    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID, 
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID, 
      id 
    );
    response.password = undefined;
    return response;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};


export const updateUser = async (id, updatedData) => {
  try {
    console.log(id)
    const response = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID, 
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID, 
      id, 
      updatedData 
    );
    console.log('User updated successfully:', response);
    return response;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};



export const deleteUser = async (id) => {
  try {
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
      id
    );
    const res = await account.deleteIdentity(id);
    console.log('User deleted successfully from Auth and DB');
    return res;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};


// propertiesAction.js

