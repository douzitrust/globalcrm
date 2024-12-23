import { ThemeProvider } from "@/app/context/theme-provider";
import { TranslationProvider } from "@/app/context/TranslationContext";
import "./globals.css";
import { Cairo } from "next/font/google";
import UserRouter from "@/app/context/UserRouter";
import NavBar from "./components/nav-bar/NavBar";
import { UserProvider } from "./context/UserContext";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  subsets: ["arabic"],
  preload: true,
});

export const metadata = {
  title: "Global Marketing Real Estates",
  description: "Real Estates Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className} antialiased min-h-screen bg-[#fff] dark:bg-[#141a21]`}>
        <UserProvider>
        <UserRouter>
          <TranslationProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="z-10 fixed top-0 left-0 right-0">
                <NavBar />
              </div>
              <main className="relative">{children}</main>
              <Toaster />
            </ThemeProvider>
          </TranslationProvider>
        </UserRouter>
        </UserProvider>
      </body>
    </html>
  );
}
