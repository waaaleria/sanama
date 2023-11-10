"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>SANAMA</title>
      </head>
      <body
        className={`${inter.className} flex  transition-all ease-linear duration-300`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="min-h-screen box-border w-full border-[40px] border-slate-300 bg-slate-200">
          <NextBreadcrumb
            homeElement={"Home"}
            separator={<span> | </span>}
            activeClasses="text-gray-900 font-bold"
            containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
            listClasses="text-blue-500 hover:text-blue-700"
            capitalizeLinks
          />
          {children}
        </main>
      </body>
    </html>
  );
}
