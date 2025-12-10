import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Email Marketing/FAQSection";
import OurWideRange from "../../components/Email Marketing/OurWideRange";
import HeroServicePage from "../../components/Email Marketing/HeroServicePage";

export const metadata = {
  title:
    "Email Marketing Company in Chennai, Professional email marketing Services - Ayatiworks",
  description:
    "Skyrocket conversions with professional email marketing in Chennai! Tailored campaigns to engage and grow your audience. Start now!",
  alternates: {
    canonical:
      "https://ayatiworks.com/digital-marketing-services/email-marketing",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How soon can I see results from email marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results can vary, but many clients notice increased engagement within the first few campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Is email marketing suitable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. It's a cost-effective way to reach and engage your audience.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with email list building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer strategies to grow and maintain a healthy subscriber list.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide analytics for email campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer detailed reports on key metrics like open rates, click-through rates, and conversions.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure compliance with email marketing laws?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We adhere to all relevant regulations, including GDPR, and implement best practices to maintain compliance.",
      },
    },
  ],
};

export default function emailPage() {
  return (
    <>
      {/* FAQ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />

      <HeroServicePage />
      <FAQSection />
      <OurWideRange />
      <PartnersInClimb />
      <DottedWorldMap />
      <Connection />
    </>
  );
}
