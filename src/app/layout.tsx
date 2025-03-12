import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TulDev | Frontend Developer & DevOps Engineer",
  description: "Portfolio personal de TulDev, Frontend Developer y DevOps Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
