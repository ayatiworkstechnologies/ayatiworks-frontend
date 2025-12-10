import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/seo/FAQSection";
import HeroServicePage from "../../components/seo/HeroServicePage";
import OurWideRange from "../../components/seo/OurWideRange";

export const metadata = {
  title:
    "Leading SEO Company in Chennai, Affordable SEO Services & Expert Solutions - Ayatiworks",
  description:
    "Dominate search rankings with affordable SEO services in Chennai! Expert solutions to boost visibility and drive traffic. Get started now!",
  alternates: {
    canonical: "https://ayatiworks.com/digital-marketing-services/seo",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to choose the right SEO company for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It’s easier said than done, when it comes to choosing the best SEO company that can accelerate organic traffic for your business. Look for the SEO company’s history with clients, check if they have worked in your business niche in the past, if you know how to evaluate their SEO strategies cross check them yourself or hire an SEO consultant who can help you verify the SEO strategy. Get a FREE SEO Audit from them and if the company aligns with your goals and objectives then consider working with them.",
      },
    },
    {
      "@type": "Question",
      name: "Is SEO better than paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One must understand that SEO and Paid ads are 2 different available ways to get your clients closer to your business and take effective business decisions. SEO is about working on multiple factors organically that aligns with Search Engine Guidelines, bringing them together, optimize it better than competitors, ensure it resonates with end users and then fetch results which can take anywhere 3 to 6 months to kickstart results. On the flipside Paid Ads is considered as a cash cow which is instant spend money to get your customers closer to your business, conversion depends on the effectiveness of the advertisement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of SEO in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Now that differs based on the objective of the project, the expertise of the SEO agency or SEO expert. Commonly SEO Charges start from 15,000/- per month charged by SEO Companies in Chennai. As we all know, one solution cannot fit all the businesses, the price entirely depends on the service required.",
      },
    },
  ],
};
export default function Page() {
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
