// app/page.jsx
"use client";

import dynamic from "next/dynamic";
import HomeFAQSection from "./components/Home/FAQsection";

/* ---------- ultra-light skeletons (no CLS) ---------- */
const Box = ({ h = "h-[360px]" }) => (
  <div className={`${h} w-full rounded-3xl bg-neutral-100 animate-pulse`} />
);

/* ---------- critical (above the fold) ---------- */
const HeroSection = dynamic(() => import("./components/Home/HeroSection"), {
  ssr: false,
  // quick shimmer so first paint is instant
  loading: () => <Box h="h-[420px]" />,
});

/* ---------- below-the-fold (lazy) ---------- */
const PromoHero = dynamic(() => import("./components/Home/PromoHero"), {
  ssr: false,
  loading: () => <Box />,
});

const AyatiAboutSection = dynamic(
  () => import("./components/Home/AyatiAboutSection"),
  {
    ssr: false,
    loading: () => <Box />,
  }
);

const CaasEdgeSection = dynamic(
  () => import("./components/Home/CaasEdgeSection"),
  {
    ssr: false,
    loading: () => <Box />,
  }
);

const WhatAyati = dynamic(() => import("./components/Home/WhatAyati"), {
  ssr: false,
  loading: () => <Box />,
});

const PartnersInClimb = dynamic(
  () => import("./components/Home/PartnersInClimb"),
  {
    ssr: false,
    loading: () => <Box />,
  }
);

const PixelsPerfected = dynamic(
  () => import("./components/Home/PixelsPerfected"),
  {
    ssr: false,
    loading: () => <Box />,
  }
);

const DottedWorldMap = dynamic(() => import("./components/Home/MapLocation"), {
  ssr: false,
  loading: () => <Box />,
});

const Connection = dynamic(() => import("./components/Home/Connection"), {
  ssr: false,
  loading: () => <Box h="h-[300px]" />,
});

export default function HomePage() {
  // Product
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Digital Marketing Agency",
    image: "https://ayatiworks.com/ayatiworks_logo.svg",
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

  // Organization
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ayatiworks.com/#organization",
    name: "Ayati Works",
    legalName: "Ayatiworks Technologies LLP",
    url: "https://ayatiworks.com/",
    logo: "https://ayatiworks.com/ayatiworks_logo.svg",
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

  // LocalBusiness
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ayatiworks.com/#localbusiness",
    name: "Ayati Works",
    parentOrganization: {
      "@id": "https://ayatiworks.com/#organization",
    },
    url: "https://ayatiworks.com/",
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

 

  // BreadcrumbList
  // const breadcrumbJsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "BreadcrumbList",
  //   itemListElement: [
  //     {
  //       "@type": "ListItem",
  //       position: 1,
  //       name: "Home",
  //       item: "https://ayatiworks.com/",
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 2,
  //       name: "Services",
  //       item: "https://ayatiworks.com/digital-marketing-services/",
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 3,
  //       name: "Services",
  //       item: "https://ayatiworks.com/content-as-a-service/", 
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 4,
  //       name: "Service",
  //       item: "https://ayatiworks.com/digital-pr/",
  //     },
  //     {
  //       "@type": "ListItem",
  //       position: 5,
  //       name: "Service",
  //       item: "https://ayatiworks.com/web-ecommerce/",
  //     },
  //   ],
  // };

  return (
    <main className="space-y-8">
      {/* JSON-LD for SEO */}
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
      
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      /> */}

      {/* above the fold: render ASAP */}
      <HeroSection />

      {/* below the fold: hydrate lazily without blocking */}
      <PromoHero />
      <AyatiAboutSection />
      <CaasEdgeSection />
      <WhatAyati />
      <PartnersInClimb />
      <PixelsPerfected />
      <HomeFAQSection />
      <DottedWorldMap />
      <Connection />
    </main>
  );
}
