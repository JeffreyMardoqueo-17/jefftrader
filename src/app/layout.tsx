import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JeffTrade",
  description: "Explicacion sobre el Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-bagroundDark`}
      >
        <Header />
        <main className="w-full h-screen bg-white dark:bg-bagroundDark mt-16">
          <div className="container mx-auto pt-5 px-1">
            {children}
          </div>
        </main>
      </body>
    </html>

  );
}
