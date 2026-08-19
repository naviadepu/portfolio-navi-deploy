import type { Metadata } from "next";
import { Pixelify_Sans, Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navi Adepu",
  description: "Co-founder building Clutch. GSU CS junior. Atlanta, GA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelify.variable} ${inter.variable} font-sans bg-bg text-ink`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
