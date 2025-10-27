import type { Metadata } from "next";
import { Radley, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const outfit = Outfit();
export const radley = Radley({ weight: '400' });

export const metadata: Metadata = {
  title: "OH GmbH - Versicherungsmakler & Vermögensberater",
  description: "Ihre Sicherheit in guten Händen mit der Otto Holzmann GmbH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased relative`}
      >
        <Header />

        <div>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
