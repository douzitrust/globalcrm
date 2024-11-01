import Drawer from "./components/Drawer/Drawer";
import { TranslationProvider } from "./context/TranslationContext";
import "./globals.css";
import { Cairo } from "next/font/google";
import Link from "next/link"
const cairo = Cairo({
  subsets: ["arabic"],
  preload: true,
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className} antialiased min-h-screen`}>
        <TranslationProvider>
          <div className="bg-gray-100 relative h-14">
            <Link href="/login" className="mx-6">Login</Link>
            <Link href="/register">Register</Link>
            <Drawer />
          </div>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
