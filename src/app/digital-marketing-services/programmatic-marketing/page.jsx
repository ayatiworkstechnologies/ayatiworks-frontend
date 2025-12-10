import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Programmatic Marketing/FAQSection";
import OurWideRange from "../../components/Programmatic Marketing/OurWideRange";
import HeroServicePage from "../../components/Programmatic Marketing/HeroServicePage";

export const metadata = {
  title:
    "Programmatic Marketing Company in Chennai , Programmatic Advertising Services - Ayatiworks",
  description:
    "Revolutionize ads with programmatic marketing in Chennai! Precision targeting for maximum impact. Boost your campaigns today!",
  alternates: {
    canonical:
      "https://ayatiworks.com/digital-marketing-services/programmatic-marketing",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is programmatic marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It’s an automated process of buying and optimizing ads using data and AI for more efficient, targeted campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "How does programmatic benefit B2B businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It helps reach decision-makers and niche industries with high precision, improving lead quality and conversion rates.",
      },
    },
    {
      "@type": "Question",
      name: "Can Programmatic Marketing help small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it allows even smaller businesses to optimize budgets with cost-efficient targeting and measurable results.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms are used in programmatic advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Platforms include demand-side platforms (DSPs), ad exchanges, and data management platforms for precise targeting.",
      },
    },
    {
      "@type": "Question",
      name: "Is programmatic more effective than traditional ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it offers better targeting, reduced waste, and measurable ROI compared to traditional ad buying.",
      },
    },
    {
      "@type": "Question",
      name: "Can programmatic marketing reduce ad fraud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, advanced fraud prevention and verification tools help ensure budget safety.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure the success of a programmatic campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Success is measured by CTRs, conversions, impressions, cost-efficiency, and overall ROI.",
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
