import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Haroon Ur Rasheed | Senior Software Engineer",
  description: "Award-winning software engineering portfolio of M Haroon Ur Rasheed. Showcasing enterprise backend architecture, Java Spring Boot expertise, and premium full-stack development.",
  keywords: ["Software Engineer", "Java Developer", "Spring Boot", "Microservices", "Backend Developer", "Portfolio", "M Haroon Ur Rasheed"],
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
