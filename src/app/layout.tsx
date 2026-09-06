import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fashion-edit.vercel.app"),

  title: {
    default: "Fashion Edit — Discover Your Style",
    template: "%s | Fashion Edit",
  },

  description:
    "Discover curated fashion for men and women. Explore trending styles, everyday essentials, footwear, bags and more with Fashion Edit.",

  keywords: [
    "Fashion Edit",
    "fashion",
    "men's fashion",
    "women's fashion",
    "fashion trends",
    "outfit ideas",
    "fashion shopping",
    "style inspiration",
  ],

  authors: [{ name: "Fashion Edit" }],
  creator: "Fashion Edit",
  publisher: "Fashion Edit",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Fashion Edit",
    title: "Fashion Edit — Discover Your Style",
    description:
      "Discover curated fashion for men and women. Explore trending styles, everyday essentials and more.",
    url: "https://fashion-edit.vercel.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fashion Edit — Discover Your Style",
    description:
      "Discover curated fashion for men and women. Explore trending styles and everyday essentials.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}