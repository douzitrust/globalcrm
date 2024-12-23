"use client";
import Footer from "@/app/components/Footer/Footer";
import SideBar from "@/app/components/side-bar/SideBar";
import { useTranslation } from "@/app/context/TranslationContext";

export default function RootLayout({ children }) {
  const { locale } = useTranslation();
  return (
    <main
      className={`flex w-full bg-white  dark:bg-gray-900 ${locale === "en" ? "flex-row-reverse" : "flex-row"
        }`}
    >
      <div className="nav">
        <SideBar />
      </div>
      <div className="dashboard w-full pt-20">
        <div className="main min-h-screen">{children}</div>
        <div className="footer relative">
          <Footer />
        </div>
      </div>
    </main>
  );
}
