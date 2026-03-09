import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/cursor";
import { GlobalNoise } from "@/components/ui/noise";
import { Preloader } from "@/components/ui/preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Chapeau Collective | Architecting Modern Growth",
  description: "We operate at the intersection of Marketing, Sales, and Artificial Intelligence to build unstoppable revenue engines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <GlobalNoise />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
