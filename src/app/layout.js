import { Hanken_Grotesk } from "next/font/google";
const grotesk = Hanken_Grotesk({ subsets: ['latin']})
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${grotesk.className} bg-[#FAF6FF]`} style={{ backgroundImage: `url(/background.svg)` }}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
