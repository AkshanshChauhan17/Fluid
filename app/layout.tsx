import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/global/footer";
import Navbar from "@/Components/global/navbar";
import GoogleProvider from "@/Components/global/GoogleProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fluid Financial | Merchant Services Powered by CardConnect & Fiserv",
  description:
    "Fluid Financial delivers secure payment processing, merchant services, healthcare payments, and integrated commerce solutions as a proud CardConnect partner, powered by Fiserv, a Fortune 500 company.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
  openGraph: {
    title:
      "Fluid Financial | Merchant Services Powered by CardConnect & Fiserv",
    description:
      "Fluid Financial delivers secure payment processing, merchant services, healthcare payments, and integrated commerce solutions as a proud CardConnect partner, powered by Fiserv, a Fortune 500 company.",
    images: [
      {
        url: "/share_image.jpeg",
        width: 1200,
        height: 630,
        alt: "Fluid Financial | Merchant Services Powered by CardConnect & Fiserv",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Fluid Financial | Merchant Services Powered by CardConnect & Fiserv",
    description:
      "Fluid Financial delivers secure payment processing, merchant services, healthcare payments, and integrated commerce solutions as a proud CardConnect partner, powered by Fiserv, a Fortune 500 company.",
    images: ["/share_image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col font-sans">
        <GoogleProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </GoogleProvider>
      </body>
    </html>
  );
}
