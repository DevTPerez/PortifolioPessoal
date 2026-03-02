import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiagocosta.tech"),

  title: {
    default:
      "Tiago Costa - Desenvolvedor Full-Stack em Portugal | SaaS, Apps e Sistemas Sob Medida",
    template: "%s | Tiago Costa",
  },

  description:
    "Desenvolvimento de sistemas web, aplicativos Android, SaaS e soluções digitais sob medida. Integração com hardware, dashboards e plataformas escaláveis para empresas.",

  alternates: {
    canonical: "/pt",
    languages: {
      "pt-PT": "/pt",
      en: "/en",
    },
  },

  icons: {
    icon: "/favicon.png",
  },

  keywords: [
    "desenvolvedor full stack portugal",
    "criar sistema sob medida",
    "desenvolvimento SaaS",
    "app android empresarial",
    "software personalizado empresas",
  ],

  openGraph: {
    title:
      "Desenvolvedor Full-Stack | SaaS, Apps e Sistemas Sob Medida",
    description:
      "Transformo ideias em plataformas digitais reais: SaaS, apps Android e dashboards.",
    url: "https://tiagocosta.tech/pt",
    siteName: "Tiago Costa",
    locale: "pt_PT",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}