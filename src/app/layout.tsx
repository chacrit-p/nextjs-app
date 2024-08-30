import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hind.className}>
        <Navbar />
        <div className="bg-base-100 antialiased">{children}</div>
      </body>
    </html>
  );
}
