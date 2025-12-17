import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Social Media Marketing/FAQSection";
import OurWideRange from "../../components/Social Media Marketing/OurWideRange";
import HeroServicePage from "../../components/Social Media Marketing/HeroServicePage";

export const metadata = {
  title: "Social Media Marketing Agency in Chennai | ROI-Driven SMM Services | Ayatiworks",
  description:
    "Chennai’s award-winning social media marketing agency for Instagram, Facebook, LinkedIn & YouTube growth. Engagement, conversions & ROI-driven campaigns for Chennai brands. Get a free SMM audit.",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/social-media-marketing", }
};

export default function SocailMediaPage() {
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
