import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/E-commerce/FAQSection";
import OurWideRange from "../../components/E-commerce/OurWideRange";
import HeroServicePage from "../../components/E-commerce/HeroServicePage";

export const metadata = {
  title:
    "Ecommerce Website Solutions in Chennai, Ecommerce Website Design & Development - Ayatiworks",
  description:
   "Grow your online business with expert ecommerce solutions in Chennai! Stunning design and development for success. Start now!",
   alternates: {
    canonical: "https://ayatiworks.com/web-ecommerce/ecommerce-solutions",
  },
};

export default function EcommercePage() {
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
