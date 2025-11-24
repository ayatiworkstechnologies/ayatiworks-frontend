import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Video Marketing/FAQSection";
import OurWideRange from "../../components/Video Marketing/OurWideRange";
import HeroServicePage from "../../components/Video Marketing/HeroServicePage";

export const metadata = {
  title:
    "Video Marketing Company in Chennai , Programmatic Advertising Services - Ayatiworks",
  description:
    "Revolutionize ads with Video Marketing in Chennai! Precision targeting for maximum impact. Boost your campaigns today!",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/video-marketing", }
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
