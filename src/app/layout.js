import { Geist, Geist_Mono } from "next/font/google";
import './global.css';
import Footer from "./components/footer/page";
import Head from "./head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PURPURA - Tienda de Productos de Belleza",
  description: "Generado por create next app",
};

export default function RootLayout({ children }) {
  return (
    /*<!DOCTYPE html>*/
    <html lang="es">
      <head>
        <Head  />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
