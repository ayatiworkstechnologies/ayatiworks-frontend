import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Instagram Marketing/FAQSection";
import OurWideRange from "../../components/Instagram Marketing/OurWideRange";
import HeroServicePage from "../../components/Instagram Marketing/HeroServicePage";

export const metadata = {
  title:
    "Best Instagram Marketing Company in Chennai, Expert SMM Services - Ayatiworks",
  description:
    "Grow your brand on Instagram with expert marketing in Chennai! Creative strategies to boost engagement and sales. Get started today!",
  alternates: {
    canonical:
      "https://ayatiworks.com/digital-marketing-services/instagram-marketing",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Instagram marketing and how does it help businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instagram marketing is promoting your brand via content, ads, stories, and reels to grow awareness, generate leads, and drive sales.",
      },
    },
    {
      "@type": "Question",
      name: "How much do Instagram marketing services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary based on content needs, ad spend, and campaign scope. Ayatiworks offers flexible pricing based on business size.",
      },
    },
    {
      "@type": "Question",
      name: "Can Instagram marketing help B2B companies too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Thought leadership posts, case studies, and client testimonials work well for B2B on Instagram, especially via reels and carousels.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I see results from Instagram marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically, initial traction can be seen in 4-6 weeks, but consistent engagement and growth are visible over 3 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you also manage ad campaigns on Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We manage ad setup, A/B testing, audience targeting, and performance tracking end-to-end.",
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
