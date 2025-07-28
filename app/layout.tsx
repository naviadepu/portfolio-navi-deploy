import type { Metadata } from "next";
import { Azeret_Mono, Delicious_Handrawn } from "next/font/google";
import "./globals.css";

const Azeret__Mono = Azeret_Mono({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const  deliciousHandrawnFont = Delicious_Handrawn({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio: Vaishnavi Adepu",
  description: "WELCOME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Azeret__Mono.className} ${deliciousHandrawnFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
