import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo FIR — Tecnologia, Montagem e Logística para o Retalho",
    template: "%s | Grupo FIR",
  },

  icons: {
    icon: "/favicon.svg",
  },
  description:
    "O Grupo FIR atua em todas as frentes do retalho, oferecendo soluções em tecnologia, montagem, logística e produção de mobiliário comercial.",
  metadataBase: new URL("https://grupofir.pt"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grupo FIR — Tecnologia, Montagem e Logística para o Retalho",
    description:
      "Soluções completas para o retalho: tecnologia, montagem, logística e mobiliário comercial.",
    url: "https://grupofir.pt",
    siteName: "Grupo FIR",
    locale: "pt_PT",
    type: "website",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
