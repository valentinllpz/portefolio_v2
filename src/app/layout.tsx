import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { baseUrl } from "./sitemap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PointerHighlight from "./components/PointerHighlight";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Valentin Lugand Lopez | Full-Stack Developer Portfolio",
    template: "%s | Valentin Lugand Lopez Portfolio",
  },
  description:
    "I'm a full-stack developer with experience in modern web technologies. This portfolio highlights my projects, skills, and achievements.",
  openGraph: {
    title: "Valentin Lugand Lopez | Full-Stack Developer Portfolio",
    description:
      "Explore my full-stack development portfolio featuring my top projects and accomplishments in web technologies.",
    url: baseUrl,
    siteName: "Valentin Lugand Lopez Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/preview.png`,
        width: 1000,
        height: 484,
        alt: "Valentin Lugand Lopez Portfolio Cover Image",
      },
    ],
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
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${integralCF.variable} font-geist antialiased text-light scroll-smooth bg-dark`}
      >
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <PointerHighlight />
        <div className="bg-[url('/images/bg1.webp')]">
          <div className="bg-dark/80 backdrop-blur-3xl">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
