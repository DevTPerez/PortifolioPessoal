import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiagocosta.tech"),

  title: {
    default:
      "Tiago Costa - Full-Stack Developer in Portugal | SaaS, Apps & Custom Systems",
    template: "%s | Tiago Costa",
  },

  description:
    "Custom web systems, Android apps, SaaS platforms and scalable digital solutions for companies.",

  alternates: {
    canonical: "/en",
    languages: {
      "pt-PT": "/pt",
      en: "/en",
    },
  },

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Full-Stack Developer | SaaS & Custom Systems",
    description:
      "I build real digital platforms: SaaS, Android apps and dashboards.",
    url: "https://tiagocosta.tech/en",
    siteName: "Tiago Costa",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}