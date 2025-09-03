import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { icons } from "lucide-react";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "OMNIDEV - Portfolio website",
  description: "",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className=''>
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
