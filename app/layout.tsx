import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',       
})

export const metadata: Metadata = {
  title: {
    default: "Tiago Costa - Desenvolvedor Full-Stack em Portugal | SaaS, Apps e Sistemas Sob Medida",
    template: "%s | Tiago Costa",
  },

  description:
    "Desenvolvimento de sistemas web, aplicativos Android, SaaS e soluções digitais sob medida. Integração com hardware, dashboards e plataformas escaláveis para empresas.",

  metadataBase: new URL("https://tiagocosta.tech"),

  alternates: {
    canonical: "/",
  },

  keywords: [
    "desenvolvedor full stack portugal",
    "criar sistema sob medida",
    "desenvolvimento SaaS",
    "app android empresarial",
    "software personalizado empresas",
    "digital signage software",
    "custom software development",
    "enterprise SaaS",
    "android business app",
    "bespoke digital solutions"
  ],

  openGraph: {
    title: "Desenvolvedor Full-Stack | SaaS, Apps e Sistemas Sob Medida",
    description:
      "Transformo ideias em plataformas digitais reais: SaaS, apps Android, dashboards e integrações hardware.",
    url: "https://tiagocosta.tech",
    siteName: "Tiago Costa",
    locale: "pt_PT",
    type: "website",
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
