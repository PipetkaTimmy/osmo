import { defaultServices } from "../data/services";

const getSiteUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }
  return "http://localhost:3000";
};

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const serviceEntries = (defaultServices || []).map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
  ];
}
