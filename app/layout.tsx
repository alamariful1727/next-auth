import type { Metadata } from "next";
import { Header } from "@/components";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/providers/SessionProvider";

export const metadata: Metadata = {
  title: "Alert Ready - Manager",
  description: "Alert Ready - Create and manage national alerts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  
  return (
    <html lang="en">
      <body className="min-h-full antialiased">
        <SessionProvider session={session}>
          <Header />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
