import Connection from "../../components/Home/Connection";
import HeroSection from "../../components/Home/HeroSection";
import DottedWorldMap from "../../components/Home/MapLocation";
import PartnersInClimb from "../../components/Home/PartnersInClimb";
import FAQSection from "../../components/Web Development/FAQSection";
import OurWideRange from "../../components/Web Development/OurWideRange";
import HeroServicePage from "../../components/Web Development/HeroServicePage";

export const metadata = {
  title:
    "Ecommerce Web Development Chennai, Web development company - Ayatiworks",
  description:
   "Keep your online store running smoothly with expert web maintenance in Chennai! Reliable solutions for growth. Contact us now!",
    alternates: { canonical: "https://ayatiworks.com/web-ecommerce/web-development", },
};

export default function WebDevPage() {
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
