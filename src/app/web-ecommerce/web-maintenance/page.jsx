import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Web Maintenance/FAQSection";
import OurWideRange from "../../components/Web Maintenance/OurWideRange";
import HeroServicePage from "../../components/Web Maintenance/HeroServicePage";

export const metadata = {
  title:
    "Ecommerce Web Maintenance company Chennai, Web development Experts - Ayatiworks",
  description:
   "Keep your online store running smoothly with expert web maintenance in Chennai! Reliable solutions for growth. Contact us now!",
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
