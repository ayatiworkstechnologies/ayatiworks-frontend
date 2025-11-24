import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Digital PR Service/FAQSection";
import OurWideRange from "../../components/Digital PR Service/OurWideRange";
import HeroServicePage from "../../components/Digital PR Service/HeroServicePage";

export const metadata = {
  title:
    "Expert Digital PR Services Chennai, Strategic Brand & Media Exposure - Ayatiworks",
  description:
   "Amplify your brand with strategic digital PR in Chennai! Expert media exposure to boost visibility. Start building today!",
    alternates: { canonical: "https://ayatiworks.com/digital-pr/digital-pr-services", }
};

export default function DigitalServicePage() {
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
