
'use client'
import React, { useState } from 'react';
import { Box, FormControl, Grid, Typography, Link, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import "./login.css"
import { IoSettingsSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import Image from 'next/image';
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import Setting from "../../src/components/setting-drawer/page"
export default function Login() {
    const router = useRouter()
    let [close, setClose] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Box className="login" >
            <Setting close={close} setClose={setClose} />
            <Button className='setting' sx={{ zIndex: "10" }} onClick={() => {

                setClose(false)

            }}>
                <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium rtl-10dohqv icon"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    style={{ transform: "rotate(77.49deg)" }}
                >
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083"
                        clipRule="evenodd"
                        opacity="0.5"
                    />
                    <path
                        fill="currentColor"
                        d="M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3"
                    />
                </svg>
                <FaCircle className='circle' />
            </Button>
            <Grid container className='container'>
                <Grid item xs={12} lg={8} >
                    <Grid container className='inside-container'>
                        <Grid item xs={10} lg={5.5} className='left'>
                            <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.8rem", lg: "2rem" } }}>
                                Account Login

                            </Typography>
                            {/* <p className='p-1'>
                                <p>Do you have an account ? </p>
                                {' '}
                                <Link href="/start">start</Link>
                            </p> */}
                            <div className="register">
                                <h1> Do you not have an account ? <Link href="/start" className="text-blue-500"> start </Link> </h1>
                            </div>
                            <form >
                                <Box className="row">
                                    <label htmlFor="email">
                                        Email                                    
                                        </label>
                                    <input
                                        required
                                        id="email"
                                        type='email'
                                        placeholder="example@mail.com"
                                    />
                                </Box>

                                
                                    <div className="relative">
                                    <label htmlFor="password">password</label>
                                    <input
                                        required
                                        id="password"
                                        placeholder='Enter Your Password'
                                        type={showPassword? "text":"password"}
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 flex justify-center items-center" onClick={()=>setShowPassword(!showPassword)}>
                                    {showPassword ? 
                                    <AiFillEye className="text-xl cursor-pointer" />
                                     :
                                     <AiFillEyeInvisible className="text-xl cursor-pointer" />
 
                                     }
                                    </span>
                                    </div>
                                    <div className="forget-password w-full text-right mb-2">
                                <Link href="/">Forgot your password ?</Link>
                                </div>

                               
                                <Button type='submit' onClick={() => {

                                    router.push("/dashboard")
                                }} className='btn'>Login</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={3.7} className='right' sx={{ display: { xs: "none", lg: "flex" }, padding: "20px" }}>
                    <h1>
                        Global Marketing
                    </h1>
                    <p >
                        Provides the optimal solution for workflow with the highest levels of technology and analysis


                    </p>
                    <Image
                        src="/assets/images/image.png"  // Path to the image (in the "public" folder)
                        alt="My beautiful image"
                        width={400}                 // Desired width
                        height={300}                  // Desired height
                        priority                       // This enables preloading if needed
                    />
                </Grid>

            </Grid>
        </Box>
    );
}
