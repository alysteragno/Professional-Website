import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
  
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alyster A.",
  description: "Portfolio of Alyster A., a creative developer and designer specializing in modern web experiences, user interfaces, and frontend architecture.",
  keywords: ["alyster", "aly","alyster agno", "alyster marasigan"],
  authors: [{ name: "Alyster Agno" }],
};

export default function RootLayout({children,}: 
  Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>HELLO</h1>
        {children}
      </body>
    </html>
  );
}
