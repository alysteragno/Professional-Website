import type { Metadata } from "next";
import { Inter, NTR } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Skills from './components/skills'
  
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ntr = NTR({
  variable: "--font-ntr",
  subsets: ["latin"],
  weight: "400", // NTR has only one weight
  display: "swap",
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
        className={`${inter.variable} ${ntr.variable} antialiased`}>
        <div className="min-h-screen flex flex-col"> 
          <Header/>
            <main className="flex-grow">
              {children}
              <Skills/>
            </main>
      <Footer/>
        </div>
      </body>
    </html>
  );
}
