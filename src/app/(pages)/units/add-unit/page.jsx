"use client";
import { useTranslation } from "@/app/context/TranslationContext";
import React, { useContext, useState } from 'react';
import { Box, Grid, Tab, Tabs } from "@mui/material";
import DetailsPageUnits from "@/app/components/units/DetailsPageUnits";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addProperty, deletePropertyImage, deletePropertyVideo, uploadPropertyImages, uploadPropertyVideo } from "@/actions/propertiesAction";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context/UserContext";

function Page() {
  const { locale, t } = useTranslation();
  const [state] = useContext(UserContext)
  const [selectedTab, setSelectedTab] = useState(0);
  const { toast } = useToast();
  const [images, setImages] = useState([]);
  const [imagesFile, setImagesFile] = useState([]);
const router = useRouter();
  const [unit, setUnit] = useState({
    building: "",
    unitFor: "",
    propertyNumber: "",
    theFloors: "",
    area: "",
    finished: "",
    rooms: 0,
    unitFeatures: "",
    phase: "",
    note: "",
    totalPrice: 0,
    inOrOutSideCompound: "",
    description: "",
    lastFollowIn: "",
    status: "",
    activity: "",
    propertyOfferedBy: state?.userData?.userId ? "" : "Agent",
    mobileNo: 0,
    name: "",
    tel: 0,
    unitNo: "",
    callUpdate: "",
    forUpdate: "",
    handler: state?.userData?.name || "",
    sales: "",
    category: "",
    landArea: "",
    currency: "",
    rentFrom: "",
    rentTo: "",
    compoundName: "",
    propertyImage: [],
    videos: [],
    project: ""
  });
  const [videos, setVideos] = useState([]);

  const handleVideoUpload = async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newImages = [];
      const newFiles = [];
  
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setVideos((prevImages) => [...prevImages, e.target.result]);
        };
        reader.readAsDataURL(file);
  
        newFiles.push(file);
        try {
          const response = await uploadPropertyVideo(file);
          setUnit((prevLead) => ({
            ...prevLead,
            videos: [...prevLead.videos, {id: response.$id, fileUrl: response.fileUrl}],
          }));
          console.log("Image uploaded successfully:", response);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
  
      setImagesFile((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  const handleChange = (_, field, value) => {
    console.log(state)
    setUnit((prevLead) => ({
      ...prevLead,
      [field]: field === "number" ? parseInt(value, 10) : value,
    }));
  };

  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      const newFiles = [];
  
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImages((prevImages) => [...prevImages, e.target.result]);
        };
        reader.readAsDataURL(file);
  
        newFiles.push(file);
        try {
          const response = await uploadPropertyImages(file);
          setUnit((prevLead) => ({
            ...prevLead,
            propertyImage: [...prevLead.propertyImage,  {id: response.id, fileUrl: response.fileUrl}],
          }));
          console.log("Image uploaded successfully:", response);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
  
      setImagesFile((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  

  const handleDeleteImage = async ( id) => {
    try {
      await deletePropertyImage(id);
      setUnit((prevUnit) => ({
        ...prevUnit,
        propertyImage: prevUnit.propertyImage.filter((image) => image.id !== id),
      }));
      
      console.log("image deleted successfully");
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };


  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };
  const handleDeleteVideo = async (id) => {
    try {
      await deletePropertyVideo(id);
      setUnit((prevUnit) => ({
        ...prevUnit,
        videos: prevUnit.videos.filter((video) => video.id !== id),
      }));
      
      console.log("Video deleted successfully");
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const handleError = (error) => {
    // Default error description
    let description = error.message;
    console.log(error.message)

    // Check for specific error message
    if (error.message.includes("Document with the requested ID already exists. Try again with a different ID or use ID.unique() to generate a unique ID")) {
      description = "The telephone number or mobile number already exists.";
    }

    // Trigger the toast with dynamic description
    toast({
      variant: "destructive",
      title: "Error Creating Unit",
      description: description,
      status: "error",
      action: (
        <ToastAction altText="ok" onClick={() => router.push(`/units`)}>
          Try Again
        </ToastAction>
      ),
    });
  };

  const handleSubmit = async () => {
    
    if (
      !unit.unitFor || 
      !unit.propertyOfferedBy || 
      !unit.name || 
      !unit.area || 
      !unit.compoundName
    ) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields.",
      });
      return;
    }
    

    const currentDateTime = new Date().toLocaleString();
    const modifiedUnit = { ...unit };
  
    modifiedUnit.mobileNo = modifiedUnit.mobileNo || `default-mobile-${Date.now()}`;
    modifiedUnit.tel = modifiedUnit.tel || `default-tel-${Date.now()}`;
  
    modifiedUnit.rooms = parseInt(modifiedUnit.rooms, 10) || null;
    modifiedUnit.totalPrice = parseInt(modifiedUnit.totalPrice, 10) || null;
    modifiedUnit.PricePerMeter = parseInt(modifiedUnit.PricePerMeter, 10) || null;
  
    modifiedUnit.videos = JSON.stringify(modifiedUnit.videos);
    modifiedUnit.propertyImage = JSON.stringify(modifiedUnit.propertyImage);
  
    try {
      const response = await addProperty(modifiedUnit);
      console.log("Unit created successfully:", response);
  
      setUnit({
        building: "",
        unitFor: "",
        propertyNumber: "",
        theFloors: "",
        area: "",
        finished: "",
        rooms: 0,
        unitFeatures: "",
        phase: "",
        note: "",
        totalPrice: 0,
        inOrOutSideCompound: "",
        description: "",
        lastFollowIn: "",
        status: "",
        activity: "",
        propertyOfferedBy: "",
        mobileNo: 0,
        name: "",
        tel: 0,
        unitNo: "",
        callUpdate: "",
        forUpdate: "",
        handler: "",
        sales: "",
        category: "",
        landArea: "",
        currency: "",
        rentFrom: "",
        rentTo: "",
        compoundName: "",
        propertyImage: [],
        videos: []
      });
  
      toast({
        variant: "success",
        title: "Unit Created",
        description: `Unit created successfully on ${currentDateTime}`,
        action: (
          <ToastAction
            altText="ok"
            onClick={() => router.push(`/units/${response.$id}`)}
          >
            Show Details
          </ToastAction>
        ),
      });
    } catch (error) {
      handleError(error);
    }
  };
  
  

  return (
    <Box className="add-unit min-h-screen flex justify-center items-center bg-Lightbg dark:bg-gray-900" dir="ltr">
      <Grid container direction="row" wrap="nowrap" className="gap-6 max-sm:gap-1 py-6 px-4">
        <Grid item xs={3} md={2} className="bg-Lightbg dark:bg-cardbgDark my-2 rounded-md max-sm:hidden">
          <Tabs
            orientation="vertical"
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="Vertical tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#4CAF50",
              },
            }}
            style={{ height: '100%', paddingTop: 16 }}
          >
            <Tab
              label={t("unit_details")}
              sx={{
                "&.Mui-selected": {
                  color: "#5be49b",
                },
              }}
            />
          </Tabs>
        </Grid>

        <Grid item xs={12} sm={10} className="bg-Lightbg dark:bg-transparent rounded-md px-2">
          {selectedTab === 0 && (
            <DetailsPageUnits
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              videos={videos}
              handleVideoUpload={handleVideoUpload}
              handleDeleteVideo={handleDeleteVideo}
              unit={unit}
              page="add"
              title={t("Unit_Informations")}
              description="Add Unit"
              images={images}
              handleImageChange={handleImageChange}
              handleDeleteImage={handleDeleteImage}
            />
          )}
        </Grid>

      </Grid>
    </Box>
  );
}

export default Page;

