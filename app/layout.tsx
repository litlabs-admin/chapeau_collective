import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/aeonik/AeonikPro-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/aeonik/AeonikPro-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/aeonik/AeonikPro-Bold.woff2",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-aeonik",
  display: "swap",
  fallback: ["Inter", "Arial", "sans-serif"]
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
        className={`${aeonik.variable} bg-canvas font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
