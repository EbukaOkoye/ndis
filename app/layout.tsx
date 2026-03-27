import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Australian NDIS",
  description:
    "Australian NDIS Services is a fast growing community that values people of all ages, abilities and cultures.",
  icons: {
    icon: [
      {
        url: "/ndis_logo-removebg.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ndis_logo-removebg.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/ndis_logo-removebg.png",
        type: "image/png+xml",
      },
    ],
    apple: "/ndis_logo-removebg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
