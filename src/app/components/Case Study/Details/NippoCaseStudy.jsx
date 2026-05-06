import React from "react";
import Connection from "../../Home/Connection";
import CaseStudyShowcase from "../CaseStudyShowcase";
import ChallengeObjectiveSection from "../ChallengeSection";
import ResultsShowcase from "../ResultsShowcase";
import WhyWorkedCta from "../WhyWorkedCta";
import ExecutionSection from "../ExecutionSection";

export default function NippoCaseStudy() {
  return (
    <main className="section section-home bg-gradient-to-b from-[#fafafa] via-[#f6f6f6] to-[#f5f5f5]">
      <CaseStudyShowcase
        hero={{
          desktopImage:
            "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/nippo-banner.png",
          mobileImage:
            "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/nippo-banner-mob.png",
          imageAlt: "Nippo Shadow Art Contest by Ayatiworks",
        }}
        section={{
          title: "Nippo Shadow Art Contest by Ayatiworks ",
          subtitle: "",
        }}
        client="Nippo"
        agency="Ayatiworks - Next is Now"
        markets="Chennai, Pondicherry, Tamil Nadu"
        duration="17-30 June 2024"
        outcome="Pan-India Families & Kids"
        downloadLabel="Download Nippo Case Study"
        className=""
      />

      <ChallengeObjectiveSection
        challengeTitle="The Challenge"
        challengeEyebrow="Nippo approached Ayatiworks with a unique hurdle, while the brand was widely known for batteries, very few consumers realized Nippo also made torches, bulbs, and mosquito repellents."
        challengeCopy="The objective was clear: Shift perception and create buzz around the Nippo Torch as a fun, family-friendly product."
        challengeCopy1={`The ask? An interactive, memorable campaign that could light up conversations and brand recall across households.`}
        challengeImg="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-4.png"
        challengeImgAlt="Nippo challenge section background"
        objectiveTitle="The Objective"
        objectiveSubTitle="The campaign set out to:"
        bullets={[
          "Reposition Nippo: Expand awareness beyond batteries to its full product range.",
          "Highlight the Torch: Spotlight the Nippo Torch as a family-friendly innovation.",
          "Ignite Engagement: Encourage playful, creative participation through interactive content.",
          "Drive Buzz & Shares: Turn torch usage into social-worthy, shareable experiences.",
        ]}
        carImg="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-7.png"
        carImgAlt="Nippo Torch product visual"
        /* -------- IDEA PROPS -------- */
        ideasTitle="The Idea"
        ideasSubTitle="Reigniting Childhood Fun"
        ideasCopy={`We tapped into nostalgia with the Nippo Shadow Art Challenge, a contest inviting families to create shadow art using Nippo torches. Inspired by childhood memories of crafting shapes and animals on walls, the idea connected product utility with playful creativity — turning a simple household torch into a spark for imagination.`}
        tagline="Time to reignite childhood fun with shadows."
        ideasImg="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-1.png"
        ideasImgAlt="Families creating shadow art using Nippo torches"
        className=""
      />
      <ExecutionSection
        sectionTitle="The Execution"
        sectionIntro=""
        reelsTitle="Social Media Reels"
        reelsDescription="Teaser, reveal, and UGC reels rolled out on Instagram to keep the challenge alive."
        reels={[
          {
            label: "Teaser Reel",
            desc: "The spark that started it all.",
            url: "https://www.instagram.com/reel/C8YdvnbppTg/",
          },
          {
            label: "Reveal Reel",
            desc: "The challenge goes live.",
            url: "https://www.instagram.com/reel/C8eCpqWvbs7/",
          },
          {
            label: "UGC Reel",
            desc: "Real families, real fun.",
            url: "https://www.instagram.com/reel/C8rfW_pConf/",
          },
        ]}
        participationTitle="UGC Participation"
        participationCopy="Families across India submitted unique shadow-art entries — each one reflecting creativity, nostalgia, and genuine engagement with the Nippo brand."
        participationHighlight="The torch wasn’t just a light; it became a storytelling tool for every household."
      />

      <ResultsShowcase
        title="The Results: Awareness Lit Up"
        topImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-2.png"
        metaHeading="Campaign Performance (17-30 June 2024) "
        metaPoints={[
          "2,410,768 Impressions ",
          "1,606,500 Reach ",
          "820,483 Engagements ",
        ]}
        metaPhara="The contest successfully repositioned Nippo beyond just batteries, drove awareness of the Nippo Torch, and built a fun, share-worthy buzz around the brand. "
        closingTitle="From Scroll to Sale: The Transformation "
        closingCopy={`In just 72 hours, Ayatiworks shifted Jeep India’s merchandising from just another microsite to a turbocharged user experience and social event. We turned each likes into traction, each creative into a conversion, and the campaign into short-run success. `}
        logo="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-6.png"
        className=""
      />
      <WhyWorkedCta
        caseStudyTitle="Nippo"
        title="Why It Worked"
        points={[
          "Nostalgia that connects - Childhood memories of shadow play made the campaign relatable. ",
          "Product in action - Torch utility showcased in a fun, interactive way. ",
          "UGC-powered engagement - Real families amplified authenticity and reach.",
          "Simple, scalable idea - Easy to join, easy to share.",
        ]}
        socialPosts={[
          {
            platform: "Instagram",
            title: "This New Year, Nippo is here to light up your moments",
            metrics: "1M+ impressions , 95K+ likes ",
            href: "https://www.instagram.com/p/DEP3GajJjsI/",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-post-1.mp4",
          },
          {
            platform: "Instagram",
            title: "Rev up the fun with Nippo Thor Alkaline Batteries! ",
            metrics: "1M+ impressions, 1.5M+ likes ",
            href: "https://www.instagram.com/reel/DDcIOm9NLW6/?utm_source=ig_web_copy_link",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-post-2.mp4",
          },
          {
            platform: "Instagram",
            title: "Ignite your creativity with Nippo!",
            metrics: "5M+ impressions, 79K+ likes   ",
            href: "https://www.instagram.com/reel/C8rfW_pConf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-post-3.mp4",
          },
          {
            platform: "Instagram",
            title: "Ever wondered how rechargeable LED bulbs ",
            metrics: "57k+ impressions, 10K+ likes  ",
            href: "https://www.instagram.com/p/C9Y13qnMhmY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-post-4.mp4",
          },
        ]}
        ctaHeadline="Ready to Shine a Light on Your Brand?  "
        ctaCopy={`Whether you’re a legacy brand looking to reinvent perception or a new player eager to create buzz, Ayatiworks knows how to craft campaigns that capture attention, spark engagement, and deliver measurable results. `}
        ctaButtonText="Let’s Build Your Next Big Campaign"
        ctaHref="/contact-us"
        ctaImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/nippo-5.png"
        className=""
        ctaHeadlineColor="text-secondary "
        ctaCopyColor="text-black/90"
      />
    </main>
  );
}
