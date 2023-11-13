import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export const metadata = {
  title: "DevsKonnekt",
  description: "Generated by create next app",
};

const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background max-w-full w-full mx-auto`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
