import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export const metadata: Metadata = {
  title: "Challenge DevelopsToday",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-zinc-300 flex flex-1`}
      >
        <Sidebar />
        <div className="w-full mr-10 ml-60 my-10">
          {children}
        </div>
      </body>
    </html>
  );
}
