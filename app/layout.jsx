import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OSMO — сайты и продвижение в Казахстане",
    template: "%s | OSMO",
  },
  description:
    "Бюро полного цикла: разработка сайтов и интернет-магазинов, SEO, SMM, контекстная и таргетированная реклама в Казахстане.",
  keywords: [
    "разработка сайтов",
    "создание сайтов",
    "интернет-магазин",
    "SEO",
    "SMM",
    "контекстная реклама",
    "таргет",
    "Казахстан",
    "Алматы",
    "Астана",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OSMO — сайты и продвижение в Казахстане",
    description:
      "Полный цикл: сайты, интернет-магазины, SEO, SMM и реклама. Работаем по всему Казахстану.",
    url: "/",
    siteName: "OSMO",
    locale: "ru_KZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSMO — сайты и продвижение в Казахстане",
    description:
      "Полный цикл: сайты, интернет-магазины, SEO, SMM и реклама. Работаем по всему Казахстану.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OSMO",
  url: siteUrl,
  areaServed: [
    "Kazakhstan",
    "Almaty",
    "Astana",
    "Shymkent",
    "Karaganda",
    "Aktobe",
    "Pavlodar",
    "Ust-Kamenogorsk",
    "Taraz",
    "Kostanay",
    "Kyzylorda",
    "Atyrau",
    "Uralsk",
    "Aktau",
    "Semey",
    "Turkestan",
  ],
  serviceType: [
    "Web design",
    "Website development",
    "E-commerce development",
    "SEO",
    "SMM",
    "Contextual advertising",
    "Targeted advertising",
    "Mobile app development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={manrope.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
