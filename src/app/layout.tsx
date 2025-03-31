"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/../LanguageContext"; // <== Importación del LanguageProvider
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
