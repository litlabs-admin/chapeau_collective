import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { homePageContent } from "@/content/site";
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
  title: homePageContent.meta.title,
  description: homePageContent.meta.description,
  icons: {
    icon: "/chapeau-collective-favicon.svg"
  },
  openGraph: {
    title: homePageContent.meta.title,
    description: homePageContent.meta.description,
    images: [{ url: "/meta-image.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: homePageContent.meta.title,
    description: homePageContent.meta.description,
    images: ["/meta-image.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${aeonik.variable} bg-canvas font-body text-ink antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var h=document.documentElement;var i=location.pathname==="/";var a=window.scrollY<=window.innerHeight-100;if(i&&a)h.setAttribute("data-hero-visible","");}catch(e){}})();'
          }}
        />
        {children}
      </body>
    </html>
  );
}
