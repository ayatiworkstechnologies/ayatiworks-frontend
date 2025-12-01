import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/seo/FAQSection";
import HeroServicePage from "../../components/seo/HeroServicePage";
import OurWideRange from "../../components/seo/OurWideRange";

export const metadata = {
  title:
    "Leading SEO Company in Chennai, Affordable SEO Services & Expert Solutions - Ayatiworks",
  description:
    "Dominate search rankings with affordable SEO services in Chennai! Expert solutions to boost visibility and drive traffic. Get started now!",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services/seo", }
};

export default function Page() {
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
