import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Social Media Marketing/FAQSection";
import OurWideRange from "../../components/Social Media Marketing/OurWideRange";
import HeroServicePage from "../../components/Social Media Marketing/HeroServicePage";

export const metadata = {
  title: "Social media marketing agency, Social media experts chennai - Ayatiworks",
  description:
    "Amplify your brand with expert social media marketing in Chennai! Engage audiences and drive growth with tailored strategies. Connect today!",
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
