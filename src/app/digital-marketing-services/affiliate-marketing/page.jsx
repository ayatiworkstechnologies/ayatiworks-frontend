import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Affiliate Marketing/FAQSection";
import OurWideRange from "../../components/Affiliate Marketing/OurWideRange";
import HeroServicePage from "../../components/Affiliate Marketing/HeroServicePage";

export const metadata = {
  title: "Affiliate Marketing Company in Chennai, Performance Marketing Solutions - Ayatiworks",
  description:
    "Maximize ROI with expert affiliate marketing in Chennai! Performance-driven solutions to scale your business. Partner with us today!",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/affiliate-marketing", }
};

export default function emailPage() {
  return (
    <>
        <HeroSection />
    
      <HeroServicePage />
      {/* <FAQSection /> */}
      <OurWideRange />
      <PartnersInClimb />
      <DottedWorldMap />
      <Connection />
    </>
  );
}
