import React, { useState, useEffect } from "react";
import { IconButton, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import "./Style.css"

import UnitsInformation from "./unitsInformation";
import CustomInformation from "./CustomInformation";
import SalesInformation from "./SalesInformation";
import UnitsDetails from "./UnitsDetails";
import PricingInformation from "./PricingInformation";
import UnitImageInformation from "./UnitImageInformation";
import CollapsibleComponent from "../CollapsibleComponent";
import { getAllSettings } from "@/actions/filterSettings";

const DetailsPageUnits = ({ 
    page,
    handleChange,
    handleSubmit,
    title,
    unit,
    handleImageChange,
    handleDeleteImage,
    images,
    handleVideoUpload,
    videos,
    handleDeleteVideo,
    handleWhatsApp,
    handleCall,
    handleEmail,
    handlePDF
}) => {
    const [options, setOptions] = useState("")
  useEffect(()=>{
    const fetchOptions = async ()=>{
      const res = await getAllSettings()
      setOptions(JSON.parse(res[0].unitSettings))
      console.log(JSON.parse(res[0].unitSettings))
    }
    fetchOptions()
  }, [])
    const items = [
        {
            key: "1",
            label: "Unit Informations",
            children: <UnitsInformation
                options={options}
                page={page}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                title={title}
                unit={unit}
                handleWhatsApp={handleWhatsApp}
                handleCall={handleCall}
                handleEmail={handleEmail}
                handlePDF={handlePDF}
            />,
        },
        {
            key: "2",
            label: "Custom Information",
            children: <CustomInformation page={page} handleChange={handleChange} unit={unit} options={options}/>,
        },
        {
            key: "3",
            label: "Sales Information",
            children: <SalesInformation page={page} handleChange={handleChange} unit={unit} options={options}/>,
        },
        // {
        //     key: "4",
        //     label: "Unit Details",
        //     children: <UnitsDetails page={page} handleChange={handleChange} unit={unit} options={options}/>,
        // },
        // {
        //     key: "5",
        //     label: "Notes",
        //     children: <PricingInformation page={page} handleChange={handleChange} unit={unit} />,
        // },
        {
            key: "6",
            label: "Unit Image Information",
            children: <UnitImageInformation page={page} handleDeleteVideo={handleDeleteVideo} handleChange={handleChange} unit={unit} handleImageChange={handleImageChange} images={images} handleVideoUpload={handleVideoUpload} videos={videos} handleDeleteImage={handleDeleteImage} />,
        },
    ];

    return (
      <div>
        <CollapsibleComponent items={items} />
      </div>
    );
};

export default DetailsPageUnits;
