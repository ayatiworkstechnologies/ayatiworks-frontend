// app/digital-marketing-services/multilingual-marketing/page.jsx
import Script from "next/script";
import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
// import FAQSection from "../../components/Multilingual/FAQSection";
import OurWideRange from "../../components/Multilingual/OurWideRange";
import HeroServicePage from "../../components/Multilingual/HeroServicePage";

export const metadata = {
  title: "Best Multilingual Marketing Agency Chennai | Vernacular Campaigns | Ayatiworks",
  description:
    "Chennai's leading multilingual marketing agency. Create culturally relevant campaigns in 121+ languages. Vernacular marketing, localization and regional strategies. Book a consultation!",
    alternates: { canonical: "https://ayatiworks.com/content-as-a-service/multilingual-marketing", }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ayatiworks.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Digital Marketing Services",
      item: "https://ayatiworks.com/digital-marketing-services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Content as a Service",
      item: "https://ayatiworks.com/content-as-a-service",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Multilingual Marketing",
      // For the current page, it's fine to omit the `item` URL
    },
  ],
};

export default function MultilingualPage() {
  return (
    <>
      {/* JSON-LD must be a string */}
      

      <HeroSection />
      <Script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroServicePage />
      
      {/* <FAQSection /> */}
      <OurWideRange />
      <PartnersInClimb />
      <DottedWorldMap />
      <Connection />
    </>
  );
}
