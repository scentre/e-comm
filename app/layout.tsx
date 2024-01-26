import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <Header />
          </div>
          {children}
        </div>
        <div className="bg-[#B8E0EF] text-black text-center py-4 mt-5">
          <Footer />
        </div>
      </body>
    </html>
  );
}
