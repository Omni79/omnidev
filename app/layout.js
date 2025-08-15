import { Inter } from "next/font/google";
import "./globals.css";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { icons } from "lucide-react";

const inter = Inter({
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
