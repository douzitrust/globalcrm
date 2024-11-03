"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/app/context/TranslationContext";
import { useTheme } from "next-themes";
import { IoMdClose } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SettingsIcon } from "../../../../public/assets/icons";
import ControlCard from "../control-card/ControlCard";

function Drawer() {
  const { setTheme } = useTheme();
  const [showDrawer, setShowDrawer] = useState(false);
  const { t, changeLanguage } = useTranslation();
  const [lang, setLang] = useState("en");
  const [mode, setMode] = useState("light");
  const drawerRef = useRef(null);

  const toggleDrawer = () => setShowDrawer((prev) => !prev);
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    changeLanguage(newLang);
  };
  const changeTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    setTheme(newMode);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setShowDrawer(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="drawer">
      <div className="container mx-auto relative">
        <button onClick={toggleDrawer}>
          <SettingsIcon className="animate-spin text-xl duration-3000" />
        </button>

        <div
          dir="rtl"
          ref={drawerRef}
          className={`fixed top-0 left-0 z-40 h-screen p-4 bg-white dark:bg-gray-800 shadow-xl w-80 transition-transform duration-500 ${
            showDrawer ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-labelledby="drawer-label"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">{t("settings")}</h1>
            <button onClick={toggleDrawer}>
              <IoMdClose />
            </button>
          </div>

          <div className="flex gap-4 mb-4">
            <ControlCard
              icon={<MdLanguage className="text-xl" />}
              label={lang === "en" ? "English" : "العربية"}
              isChecked={lang === "ar"}
              onToggle={toggleLanguage}
            />
            <ControlCard
              icon={<TiWeatherPartlySunny className="text-xl" />}
              label={t("mode")}
              isChecked={mode === "dark"}
              onToggle={changeTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
