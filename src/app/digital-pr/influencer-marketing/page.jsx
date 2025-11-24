import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Influencer Marketing/FAQSection";
import OurWideRange from "../../components/Influencer Marketing/OurWideRange";
import HeroServicePage from "../../components/Influencer Marketing/HeroServicePage";

export const metadata = {
  title:
    "Influencer Marketing Services in Chennai, Grow with Influencers - Ayatiworks ",
  description:
   "Skyrocket your brand with influencer marketing in Chennai! Connect with influencers to drive growth. Partner with us now!",
    alternates: { canonical: "https://ayatiworks.com/digital-pr/influencer-marketing", }
};

export default function InfluencerMarketingPage() {
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
