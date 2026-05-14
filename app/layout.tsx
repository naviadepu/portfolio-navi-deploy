import type { Metadata } from "next";
import { Fraunces, Inter, VT323 } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navi Adepu — Frontend Engineer",
  description:
    "Frontend engineer + founder. Building Clutch. GSU CS junior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${vt323.variable} font-sans bg-bg text-ink`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
