import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noma Homes — Monthly furnished rentals",
  description: "Premium furnished homes for flexible monthly stays.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
