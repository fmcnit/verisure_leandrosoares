import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Especialista Verisure",
  description: "Especialista Rodrigo Hart da Verisure, em que posso ajudar?",
  openGraph: {
    type: "website",
    title: "Verisure Especialista Rodrigo",
    description: "Bem-vindo a Verisure - Especialista Rodrigo",
    images: [{ url: "https://share.google/CRXn4X25rn9CXJzzi" }],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
