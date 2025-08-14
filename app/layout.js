import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "OMNIDEV - Portfolio website",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className=''>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
