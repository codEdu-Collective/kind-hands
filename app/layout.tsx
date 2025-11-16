import { JSX, type ReactNode } from "react";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Shippori_Mincho,
  Sue_Ellen_Francisco,
  Work_Sans,
} from "next/font/google";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Footer, Header } from "@/components/layout";
// import AxeTest from "@/utils/AxeTest";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sueEllenFrancisco = Sue_Ellen_Francisco({
  variable: "--font-sue-ellen-francisco",
  subsets: ["latin"],
  weight: "400",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kind Hands",
  description: "Connects donors and volunteers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}  ${sueEllenFrancisco.variable} ${shipporiMincho.variable} ${workSans.variable} antialiased w-full max-w-480 bg-background`}
        >
          {/* <AxeTest /> */}
          {/* for accessibility testing */}
          <Header />

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
