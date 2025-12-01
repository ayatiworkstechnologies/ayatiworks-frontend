import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/UXUI/FAQSection";
import OurWideRange from "../../components/UXUI/OurWideRange";
import HeroServicePage from "../../components/UXUI/HeroServicePage";

export const metadata = {
  title:
    "Ecommerce UX-UI Design Services Chennai, Web UX - UI development company Chennai - Ayatiworks",
  description:
   "Boost sales with stunning UX-UI design in Chennai! Expert ecommerce interfaces for seamless user experiences. Design now!",
alternates: {
    canonical: "https://ayatiworks.com/web-ecommerce/ux-ui-design",
  },
  };

export default function UXUIPage() {
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
