import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Branding/FAQSection";
import OurWideRange from "../../components/Branding/OurWideRange";
import HeroServicePage from "../../components/Branding/HeroServicePage";

export const metadata = {
  title:
    "Video Creation Services in Chennai, Professional Video Content Services in Chennai - Ayatiworks",
  description:
    "Engage audiences with professional video creation in Chennai! Stunning visuals to boost your brand’s story. Create now!",
    alternates: { canonical: "https://ayatiworks.com/content-as-a-service/video-creation", }
};

export default function BrandingPage() {
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
