import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./header";

const ubuntu = Ubuntu({
  weight: '400'
});

export const metadata: Metadata = {
  title: "Harald Otto - Versicherungsmakler",
  description: "Ihre Sicherheit in guten Händen mit Otto & Co KG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased`}
      >
        <Header />

        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
