import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
})

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
        className={`${poppins.className} antialiased`}
      >
        {children}
        <Toaster position="top-right" />

      </body>
    </html>
  );
}
