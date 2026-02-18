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
  description: "Orçamentos grátis só me chamar aqui pelo whatsapp",
  openGraph: {
    type: "website",
    title: "Verisure Especialista Leandro Soares",
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
