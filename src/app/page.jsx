// app/page.jsx
"use client";

import dynamic from "next/dynamic";
import HomeFAQSection from "./components/FAQSection";

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

  // FAQPage
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Ayati Works offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ayati Works provides a full suite of digital marketing services, including SEO, social media marketing, email marketing, video marketing, affiliate marketing, and programmatic advertising. They also offer Content-as-a-Service (CaaS) — strategic content ideation, creation, and execution — as well as digital PR (influencer outreach, media placement, reputation management). Additionally, Ayati Works provides web & e-commerce solutions, including UX/UI design, web development, and tailored e-commerce strategy.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries does Ayati Works specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ayati Works works across a wide range of industries such as healthcare, SaaS / tech, e-commerce, finance, and enterprise. Their content and branding expertise is also proven in large-scale branded partnerships (for example, with Volvo) and consumer-facing businesses.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ayati Works approach digital marketing strategy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ayati Works uses a methodology called CAAS (Content as a Service) to align content with business objectives. They begin with a discovery call to understand goals, audience, and competition; then define KPIs, create campaigns (SEO, performance, content), and execute them with continuous measurement. Their strategies are data-driven, combining creativity, content, and analytics to deliver real ROI.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ayati Works help with SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ayati Works offers comprehensive SEO services: technical SEO audits, on-page optimization, off-page link building, keyword research, and international SEO. They emphasize revenue-driven SEO — not just ranking, but growth and conversions. They also serve clients from Chennai to global markets, helping brands scale beyond their local digital presence.",
        },
      },
      {
        "@type": "Question",
        name: "Can Ayati Works manage social media campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Ayati Works provides full social media marketing services. Their team builds data-driven campaigns tailored to Facebook, Instagram, LinkedIn, and more. They focus on creating engaging content, running ads, optimizing for conversions, and building long-term community and brand loyalty. They also run influencer campaigns, A/B testing, and retargeting to optimize social ROI.",
        },
      },
      {
        "@type": "Question",
        name: "What is Digital PR, and how can Ayati Works help with it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital PR at Ayati Works means building credibility and authority through media mentions, influencer collaborations, and content that gets covered in trusted publications. They help clients craft compelling PR strategies to earn high-value features, backlinks, and brand visibility. Their approach is tailored to both national and local audiences, adjusting messaging for regional media as well as high-authority national outlets.",
        },
      },
      {
        "@type": "Question",
        name: "Do they provide web development or e-commerce solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Ayati Works offers web and e-commerce services including UX/UI design, web development, and full-funnel e-commerce strategy. They aim to transform traditional storefronts into scalable online businesses. They also optimize conversion, retention, and performance for e-commerce clients.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Ayati Works to start a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach Ayati Works via email: upendran@ayatiworks.com or info@ayatiworks.com. You can also call them at 044-35031874 / 044-35031878. Their Chennai office is located at 18/24, TTK Road, 1st Cross St, Alwarpet, Chennai, Tamil Nadu, 600018. They are available Monday to Friday, 10:00 AM to 7:00 PM.",
        },
      },
      {
        "@type": "Question",
        name: "How soon can I expect results from working with Ayati Works?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeframe for results depends on the kind of service: For SEO, meaningful gains in organic traffic or rankings often take a few months. For paid campaigns / performance marketing, you can typically start seeing leads or conversions within weeks once campaigns are live and optimized. With content and branding, impact may be gradual, focused on long-term growth, engagement, and trust.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does Ayati Works work only in Chennai or with national and international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While Ayati Works is headquartered in Chennai, they serve clients across India and globally. They have experience scaling brands from local markets to pan-India and cross-border markets.",
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
