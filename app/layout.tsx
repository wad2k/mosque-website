import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Sheerwater Mosque",
  description: "A welcoming community mosque website",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen bg-white ${cairo.className}`}>

        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
