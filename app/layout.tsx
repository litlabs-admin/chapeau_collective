import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const instrumentSans = localFont({
  src: "../public/mirror/fonts.gstatic.com/s/instrumentsans/v4/pxiTypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr0SZe1Q.woff2",
  variable: "--font-instrument",
  display: "swap"
});

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const interDisplay = localFont({
  src: [
    {
      path: "../public/mirror/framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/mirror/framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
      weight: "600",
      style: "normal"
    }
  ],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Chapeau Collective",
  description:
    "Chapeau Collective"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSans.variable} ${interBody.variable} ${interDisplay.variable} bg-canvas font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
