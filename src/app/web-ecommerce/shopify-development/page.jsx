import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Shopify Development/FAQSection";
import OurWideRange from "../../components/Shopify Development/OurWideRange";
import HeroServicePage from "../../components/Shopify Development/HeroServicePage";

export const metadata = {
  title:
    "Shopify development company chennai, Shopify experts in Chennai - Ayatiworks",
  description:
   "Create a thriving online store with expert Shopify development in Chennai! Tailored solutions to boost sales. Start now!",
    alternates: {
    canonical: "https://ayatiworks.com/web-ecommerce/shopify-development",
  },
};

export default function ShopifyDevPage() {
  return (
    <>
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
