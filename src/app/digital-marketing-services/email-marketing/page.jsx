import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Email Marketing/FAQSection";
import OurWideRange from "../../components/Email Marketing/OurWideRange";
import HeroServicePage from "../../components/Email Marketing/HeroServicePage";

export const metadata = {
  title: "Email Marketing Company in Chennai, Professional email marketing Services - Ayatiworks",
  description:
    "Skyrocket conversions with professional email marketing in Chennai! Tailored campaigns to engage and grow your audience. Start now!",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/email-marketing", }
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
