import type { Metadata } from "next";
import { Faculty_Glyphic } from "next/font/google";
import "./globals.css";

const faculty = Faculty_Glyphic({
  variable: "--font-faculty-sans",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "INNOHEZA",
  description: "INNOHEZA Reimagining PPH Care ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${faculty.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
