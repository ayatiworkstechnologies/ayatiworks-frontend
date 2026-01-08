import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Web Maintenance/FAQSection";
import OurWideRange from "../../components/Web Maintenance/OurWideRange";
import HeroServicePage from "../../components/Web Maintenance/HeroServicePage";

export const metadata = {
  title:
    "Ecommerce Website Maintenance company Chennai, Website development Experts Chennai | Ayatiworks",
  description:
   "Get expert Ecommerce Website Maintenance Company in Chennai and Web Development Experts in Chennai. Trusted by businesses in India & globally. Get a quote now!",
    alternates: { canonical: "https://ayatiworks.com/web-ecommerce/web-maintenance", },
};

export default function WebMaintenancePage() {
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
