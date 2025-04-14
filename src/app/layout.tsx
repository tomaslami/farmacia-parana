import type { Metadata } from "next";
import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

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
        <main className="max-w-[1680px] mx-auto">{children}</main>
        <Footer/>
        <FloatingButton phoneNumber="541131629344" />
      </body>
    </html>
  );
}
