"use client";
<<<<<<< HEAD
import React, { useContext, useEffect, useState, useCallback } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import FormComponent from "@/app/components/FormComponent/FormComponent";

function Page() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const message = searchParams.get("msg");
=======
import React, { useState, useCallback } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import FormComponent from "@/app/components/FormComponent/FormComponent";
import Image from "next/image";

function Page() {
  const router = useRouter();
>>>>>>> aee03c118f7949eea3560d62351b461e661c0d8e
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prevShow) => !prevShow);
  }, []);

  const handleChange = useCallback((e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <div className="login">
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="grid lg:grid-cols-[1fr_2fr] max-sm:grid-cols-1 w-full">
          <div className="bg-[#eee] min-h-screen w-full hidden lg:block"></div>
          <div className="bg-[#fff] min-h-screen flex justify-center items-center">
              <div className="description w-full flex justify-center items-center">
              <FormComponent
          style={style}
          page="login"
          user={formData}
          // msg={message}
          show={showPassword}
          changeType={togglePasswordVisibility}
          handleChange={handleChange}
          //   handleSubmit={handleSubmit}
          disable={isSubmitting}
        />
            </div>
          </div>
        </div>
        
=======
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
        <div className="grid lg:grid-cols-[1fr_2fr] max-sm:grid-cols-1 w-full">
          <div className="bg-[#eee] dark:text-anti-flash_white dark:bg-dark min-h-screen w-full hidden lg:flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-evenly items-center h-[50vh]">
              <div className="title">
                <h1 className="text-2xl font-bold">Vision Integration</h1>
              </div>
              <div className="text">
                <h3>
                  تقدم الحل الأمثل لسير العمل بأعلى مستويات التقانة والتحليل
                </h3>
              </div>
              <div className="img relative w-full h-[300px]">
                <Image
                  src="/assets/home-images/form-image.png"
                  alt="vision"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#fff] dark:bg-gray-900 min-h-screen flex justify-center items-center">
            <div className="description w-full flex justify-center items-center">
              <FormComponent
                style={style}
                page="login"
                user={formData}
                show={showPassword}
                changeType={togglePasswordVisibility}
                handleChange={handleChange}
                handleSubmit={() => router.push("/dashboard")}
                disable={isSubmitting}
              />
            </div>
          </div>
        </div>
>>>>>>> aee03c118f7949eea3560d62351b461e661c0d8e
      </div>
    </div>
  );
}

export default Page;
