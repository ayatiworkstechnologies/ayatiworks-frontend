import dynamic from "next/dynamic";
import DeferredHomeSections from "./components/Home/DeferredHomeSections";
import HeroSection from "./components/Home/HeroSectionServer";

const Box = ({ h = "h-[360px]" }) => (
  <div className={`${h} w-full rounded-3xl bg-neutral-100 animate-pulse`} />
);

const PromoHero = dynamic(() => import("./components/Home/PromoHero"), {
  ssr: true,
  loading: () => <Box />,
});

const AyatiAboutSection = dynamic(
  () => import("./components/Home/AyatiAboutSection"),
  {
    ssr: true,
    loading: () => <Box />,
  }
);

export default function HomePage() {
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Digital Marketing Agency",
    image: "https://www.ayatiworks.com/ayatiworks_logo.svg",
    description:
      "Are you looking for the best digital marketing agency in Chennai? Ayati Works is a Chennai-based leading digital marketing company offering SEO, PPC, content marketing, branding, and multilingual advertising services.",
    brand: "Ayati Works",
    sku: "",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "25",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.ayatiworks.com/#organization",
    name: "Ayati Works",
    legalName: "Ayatiworks Technologies LLP",
    url: "https://www.ayatiworks.com/",
    logo: "https://www.ayatiworks.com/ayatiworks_logo.svg",
    description:
      "Ayati Works is a digital marketing agency offering SEO, PPC, content marketing, branding and multilingual advertising services in Chennai.",
    email: ["upendran@ayatiworks.com", "info@ayatiworks.com"],
    telephone: ["044-35031874", "044-35031878"],
    sameAs: [
      "https://www.facebook.com/ayatiworks",
      "https://www.instagram.com/ayatiworks",
      "https://www.linkedin.com/company/ayatiworks",
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ayatiworks.com/#localbusiness",
    name: "Ayati Works",
    parentOrganization: {
      "@id": "https://www.ayatiworks.com/#organization",
    },
    url: "https://www.ayatiworks.com/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18/24, TTK Road, 1st Cross St, Alwarpet",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600018",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "044-35031874",
        contactType: "customer service",
      },
      {
        "@type": "ContactPoint",
        telephone: "044-35031878",
        contactType: "customer service",
      },
      {
        "@type": "ContactPoint",
        email: "info@ayatiworks.com",
        contactType: "sales",
      },
      {
        "@type": "ContactPoint",
        email: "upendran@ayatiworks.com",
        contactType: "management",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <main className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <HeroSection />
      <PromoHero />
      <AyatiAboutSection />
      <DeferredHomeSections />
    </main>
  );
}
