import type { Metadata } from "next";
import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Script from "next/script";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5T2X2KLL');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5T2X2KLL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <main className="max-w-[1680px] mx-auto">{children}</main>
        <Footer/>
        <FloatingButton phoneNumber="541131629344" />
      </body>
    </html>
  );
}
