import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rythm",
  description: "Enjoy The Rythm Of Music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
