import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { UIProvider } from "@jamsr-ui/react";
import "./globals.css";

import { UIProvider } from "@jamsr-ui/react";
import Navbar from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Info |Preline Por",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UIProvider>
          <Navbar />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
