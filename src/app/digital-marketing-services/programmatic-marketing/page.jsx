import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Programmatic Marketing/FAQSection";
import OurWideRange from "../../components/Programmatic Marketing/OurWideRange";
import HeroServicePage from "../../components/Programmatic Marketing/HeroServicePage";

export const metadata = {
  title:
    "Programmatic Marketing Company in Chennai , Programmatic Advertising Services - Ayatiworks",
  description:
    "Revolutionize ads with programmatic marketing in Chennai! Precision targeting for maximum impact. Boost your campaigns today!",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/programmatic-marketing", }
};

export default function emailPage() {
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
