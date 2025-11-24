import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Online Reputation/FAQSection";
import OurWideRange from "../../components/Online Reputation/OurWideRange";
import HeroServicePage from "../../components/Online Reputation/HeroServicePage";

export const metadata = {
  title:
    "Media Outreach Services, Online Reputation Experts Chennai - Ayatiworks",
  description:
   "Strengthen your online reputation with expert media outreach in Chennai! Build trust and visibility. Start now!",
    alternates: { canonical: "https://ayatiworks.com/digital-pr/online-reputation-media-outreach", }
};

export default function OnlineReputationPage() {
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
