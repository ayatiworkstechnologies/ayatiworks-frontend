import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Web Development/FAQSection";
import OurWideRange from "../../components/Web Development/OurWideRange";
import HeroServicePage from "../../components/Web Development/HeroServicePage";

export const metadata = {
  title:
    "Ecommerce Website Development company in Chennai, Website development company - Ayatiworks",
  description:
   "Transform your online presence with Ayatiworks, a top Ecommerce website development company in Chennai. We craft user-focused, robust websites for brands worldwide.",
    alternates: { canonical: "https://www.ayatiworks.com/web-ecommerce/web-development", },
};

export default function WebDevPage() {
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
