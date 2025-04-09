import type { Metadata } from "next";
import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Farmacia Paraná",
  description: "Farmacia Paraná - Servicios farmacéuticos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
