import type { Metadata } from "next";
import Navbar from "@/app/ui/main/Navbar";
import Footer from "@/app/ui/main/Footer";
import { GoogleTagManager } from '@next/third-parties/google';

import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ProSocial",
    default: "Bienvenido a ProSocial",
  },
  description: "Fotogafía y video profesional para eventos sociales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>

        <meta charSet="utf-8" />
        <link rel="icon" href="https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/logos/isotipo_gris.svg"
          type="image/svg+xml"
        />

        <Script
          id="fontawesome"
          src="https://kit.fontawesome.com/74d1405387.js">
        </Script>

      </head>

      <body
        className={'antialiased'}
      >
        <Navbar />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-WCG8X7J" />
      </body>
    </html>
  );
}
