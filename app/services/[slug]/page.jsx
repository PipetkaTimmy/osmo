import Hero from "@/components/Hero/Hero";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Offers from "@/components/Offers/Offers";
import ServiceFaq from "@/components/ServicePage/ServiceFaq";
import ServiceIntro from "@/components/ServicePage/ServiceIntro";
import ServiceSolutions from "@/components/ServicePage/ServiceSolutions";
import { defaultServices, getServiceBySlug } from "@/data/services";

const fallbackService = defaultServices[0];

const resolveValue = (value, fallback) => (value ? value : fallback);

const resolveService = (service) => ({
  hero: resolveValue(service?.hero, fallbackService.hero),
  intro: resolveValue(service?.intro, fallbackService.intro),
  solutions: resolveValue(service?.solutions, fallbackService.solutions),
  faq: resolveValue(service?.faq, fallbackService.faq),
});

const normalizeSlug = (slug) => {
  if (Array.isArray(slug)) {
    return slug[0];
  }
  return slug;
};

export const generateMetadata = async ({ params }) => {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  const service =
    getServiceBySlug(slug) || getServiceBySlug(String(slug).toLowerCase()) || fallbackService;
  const title = service?.hero?.title || "Услуга";
  const description = service?.hero?.subtitle || "Услуги OSMO";
  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: service?.ogImage || service?.backgroundImage || "/og-default.jpg",
          alt: title,
        },
      ],
    },
  };
};

export const generateStaticParams = () => {
  return defaultServices.map((service) => ({
    slug: service.slug,
  }));
};

export default async function ServicePage({ params }) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  const service = resolveService(
    getServiceBySlug(slug) || getServiceBySlug(String(slug).toLowerCase())
  );
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.hero?.title || "Услуга",
        item: `${siteUrl}/services/${slug}`,
      },
    ],
  };

  return (
    <main>
      <Navbar
        sections={[
          { id: "hero", label: "Главная" },
          { id: "intro", label: "О процессе" },
          { id: "solutions", label: "Решения" },
          { id: "offers", label: "Преимущества" },
          { id: "faq", label: "FAQ" },
          { id: "contacts", label: "Контакты" },
        ]}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section id="hero" className="sectionAnchor">
        <Hero
          title={service.hero?.title}
          subtitle={service.hero?.subtitle}
          videoSrc={service.hero?.videoSrc}
        />
      </section>
      {service.intro && (
        <section id="intro" className="sectionAnchor">
          <ServiceIntro
            title={service.intro.title}
            body={service.intro.body}
            footerTitle={service.intro.footerTitle}
            footerBody={service.intro.footerBody}
          />
        </section>
      )}
      {service.solutions && (
        <section id="solutions" className="sectionAnchor">
          <ServiceSolutions title={service.solutions.title} items={service.solutions.items} />
        </section>
      )}
      <section id="offers" className="sectionFull">
        <Offers />
      </section>
      {service.faq && (
        <section id="faq" className="sectionAnchor">
          <ServiceFaq title={service.faq.title} items={service.faq.items} />
        </section>
      )}
      <section id="contacts" className="sectionAnchor">
        <Contacts />
      </section>
      <section className="sectionAnchor">
        <Footer />
      </section>
    </main>
  );
}
