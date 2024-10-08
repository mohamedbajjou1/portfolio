import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bajjou .",
  description: "My Portfolio Site/Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#1c1c22] ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <div className="max-w-7xl mx-auto">
          <Nav />
          <header />
          {children}
        </div>
      </body>
    </html>
  );
}
