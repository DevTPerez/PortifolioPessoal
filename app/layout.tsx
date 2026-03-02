import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isPT = lang === "pt";

  return {
    metadataBase: new URL("https://tiagocosta.tech"),

    

    title: {
      default: isPT
        ? "Tiago Costa - Desenvolvedor Full-Stack em Portugal | SaaS, Apps e Sistemas Sob Medida"
        : "Tiago Costa - Full-Stack Developer in Portugal | SaaS, Apps & Custom Systems",
      template: "%s | Tiago Costa",
    },

    description: isPT
      ? "Desenvolvimento de sistemas web, aplicativos Android, SaaS e soluções digitais sob medida. Integração com hardware, dashboards e plataformas escaláveis para empresas."
      : "Custom web systems, Android apps, SaaS platforms and scalable digital solutions for companies.",

    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-PT": "/pt",
        en: "/en",
      },
    },

    icons: {
      icon: '/favicon.png'
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
      "bespoke digital solutions",
    ],

    openGraph: {
      title: isPT
        ? "Desenvolvedor Full-Stack | SaaS, Apps e Sistemas Sob Medida"
        : "Full-Stack Developer | SaaS, Apps & Custom Systems",
      description: isPT
        ? "Transformo ideias em plataformas digitais reais: SaaS, apps Android, dashboards e integrações hardware."
        : "I build real digital platforms: SaaS, Android apps, dashboards and hardware integrations.",
      url: `https://tiagocosta.tech/${lang}`,
      siteName: "Tiago Costa",
      locale: isPT ? "pt_PT" : "en_US",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const htmlLang = lang === "pt" ? "pt-PT" : "en";

  return (
    <html lang={htmlLang}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}