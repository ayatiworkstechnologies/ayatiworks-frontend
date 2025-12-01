import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Instagram Marketing/FAQSection";
import OurWideRange from "../../components/Instagram Marketing/OurWideRange";
import HeroServicePage from "../../components/Instagram Marketing/HeroServicePage";

export const metadata = {
  title: "Best Instagram Marketing Company in Chennai, Expert SMM Services - Ayatiworks",
  description:
    "Grow your brand on Instagram with expert marketing in Chennai! Creative strategies to boost engagement and sales. Get started today!",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/instagram-marketing", }
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
