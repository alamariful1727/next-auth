import type { Metadata } from "next";
import { Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alert Ready - Manager",
  description: "Alert Ready - Create and manage national alerts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-full antialiased"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
