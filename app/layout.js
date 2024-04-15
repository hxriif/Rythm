import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2 from "./MusicView/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rythm",
  description: "Enjoy The Rythm Of Music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
