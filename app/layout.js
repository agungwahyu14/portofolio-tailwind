// app/layout.js
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import { Montserrat } from "next/font/google";
import { DarkModeProvider } from "../components/darkmode/DarkModeProvider";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Agung Wahyu - Portfolio",
  description:
    "Welcome to my personal portfolio. I am a web developer specializing in modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DarkModeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
