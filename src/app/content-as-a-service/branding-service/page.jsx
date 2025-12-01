import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Branding/FAQSection";
import OurWideRange from "../../components/Branding/OurWideRange";
import HeroServicePage from "../../components/Branding/HeroServicePage";

export const metadata = {
  title:
    "Creative Branding Services in Chennai, Expert Brand Growth Solutions",
  description:
    "Build a powerful brand with creative branding services in Chennai! Expert solutions to elevate your identity and growth. Start now!",
    alternates: { canonical: "https://ayatiworks.com/content-as-a-service/branding-service", }
};

export default function BrandingPage() {
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
