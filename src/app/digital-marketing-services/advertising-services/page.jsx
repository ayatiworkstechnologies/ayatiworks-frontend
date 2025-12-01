import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Advertising/FAQSection";
import HeroServicePage from "../../components/Advertising/HeroServicePage";
import OurWideRange from "../../components/Advertising/OurWideRange";

export const metadata = {
  title:
    "Advertising Agency in Chennai | Creative Agency for High-Impact Brand Growth",
  description:
    "Partner with the top Advertising Agency in Chennai. Ayatiworks delivers data-driven creative campaigns, performance marketing, and ROI-led brand growth for businesses ready to scale.",
  alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/advertising-services", }
};

export default function AdPage() {
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
