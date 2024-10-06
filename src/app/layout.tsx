import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { baseUrl } from "./sitemap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PointerHighlight from "./components/PointerHighlight";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const integralCF = localFont({
  src: "./fonts/integralcf-bold.otf",
  variable: "--font-integral-cf",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${integralCF.variable} font-geist antialiased bg-dark text-light scroll-smooth bg-[url('/images/bg1.jpg')]`}
      >
        <Navbar />
        <PointerHighlight />
        <div className="bg-dark/80 backdrop-blur-3xl">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
