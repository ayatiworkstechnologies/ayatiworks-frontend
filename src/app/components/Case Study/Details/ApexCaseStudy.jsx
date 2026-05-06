import React from "react";
import CaseStudyShowcase from "../CaseStudyShowcase";
import ChallengeSection from "../ChallengeSection";
import ResultsShowcase from "../ResultsShowcase";
import WhyWorkedCta from "../WhyWorkedCta";

export default function ApexCaseStudy() {
  return (
    <main className="section section-home bg-gradient-to-b from-[#fafafa] via-[#f6f6f6] to-[#f5f5f5]">
      <CaseStudyShowcase
        hero={{
          desktopImage:
            "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/apex-banner-web.svg",
          mobileImage:
            "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/apex-banner-mob.svg",
          imageAlt:
            "Apex Dura branding and marketing campaign by Ayatiworks showcasing logo, identity, and digital presence.",
        }}
        section={{
          title: "How Ayatiworks Built the Apex Dura Powerhouse",
          subtitle: "Branding & Digital Transformation for TMT Brands",
        }}
        client="Apex Group – Apex TMT (Fe 500 Division)"
        agency="Ayatiworks – Next is Now"
        markets="South India"
        duration="Full-stack branding + ongoing digital execution"
        downloadLabel="Download Apex Case Study"
        className=""
      />

      <ChallengeSection
        challengeTitle="The Challenge"
        challengeEyebrow="Apex Steel carried a legacy identity, but its new TMT division needed to break from the past."
        challengeCopy="The brand lacked a compelling persona, strong recall, and a communication system that could scale in a hyper-competitive TMT market."
        challengeCopy1=" Ayatiworks stepped in to engineer clarity, character, and differentiation."
        challengeImg="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-10.svg"
        challengeImgAlt="Volvo challenge section background"
        objectiveTitle="The Objective"
        objectiveSubTitle="To build a complete brand ecosystem that: "
        bullets={[
          " Establishes a future-ready identity with strong market recall",
          "Converts product innovation into powerful brand storytelling",
          "Amplifies visibility across South India",
          "Unifies voice, design, and communication across every touchpoint",
        ]}
        carImg="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-1.svg"
        carImgAlt="Volvo crossover image"
        className=""
      />
      <ResultsShowcase
        title="The Transformation: A Brand Reforged"
        topImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-2.svg"
        metaHeading="Naming & Brand Philosophy"
        metaPoints={[
          "Through extensive ideation, one name stood tall, Apex Dura.",
          "120K+ people in retargetable audiences",
          "2A name that conveys durability, strength, and forward momentum, rooted in the brand’s unique product innovation: the Fishbone Rib Design.",
        ]}
        searchHeading="Logo & Visual Identity"
        searchPoints={[
          " Grip",
          "Toughness",
          "Structural integrity",
          "The signature rib pattern evolved into a design language, elevating recall across campaigns and collaterals. ",
        ]}
        rightImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-3.svg"
        className=""
      />
      <ResultsShowcase
        title="Brand Bible Development"
        topImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-4.svg"
        metaHeading="We codified the brand through a comprehensive Brand Book, defining:"
        metaPoints={[
          "Logo usage",
          "Typography",
          "Visual systems",
          "Creative direction",
          "Signature patterns and applications",

          "A blueprint engineered for long-term consistency.",
        ]}
        className=""
      />
      <ResultsShowcase
        title="The Execution"
        topImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-5.svg"
        metaHeading="Brand Identity & Collaterals"
        metaPoints={[
          "From business cards to brochures, every asset was a bold expression of the Apex Dura persona, rugged, modern, high impact.",
          "Even T-shirts became moving billboards of strength and style.",
        ]}
        searchHeading="Digital & Media Presence"
        searchPoints={[
          "We transformed Apex Dura’s static presence into a vibrant, high-recall brand ecosystem:",
          "A dynamic, performance-aligned website",
          "Regional radio campaigns",
          "Outdoor advertising",
          "Digital PR",
          "Platform-specific content strategies",
          "All communications spoke one unified, authoritative voice.",
        ]}
        rightImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-6.svg"
        className=""
      />
      <ResultsShowcase
        title="The Results: Strategy Into Strength"
        topImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-7.svg"
        metaHeading="Market Impact"
        metaPoints={[
          "A bold, differentiated position in a cluttered TMT category",
          "Significant surge in digital visibility, engagement, and brand conversations",
          "Reinforced customer trust and pride",
          "A modern identity linked with innovation and performance",
        ]}
        closingTitle="Business Impact"
        closingCopy={`10X business growth directly attributed to the end-to-end marketing ecosystem designed by Ayatiworks.
Apex Dura didn’t just enter the market.
It claimed its territory.

`}
        logo="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-12.svg"
        className=""
      />
      <WhyWorkedCta
        caseStudyTitle="Apex"
        title="From Identity to Industry Impact"
        points={[
          "Apex Dura is now a benchmark of strength and innovation, bridging Apex Group’s industrial heritage with a contemporary market presence that resonates across South India.",
          "Ayatiworks transformed vision into identity, identity into strategy, and strategy into market dominance.",
        ]}
        socialPosts={[
          {
            platform: "Instagram",
            title:
              "It begins with a grip. Soft, silent, gentle, yet unbreakable.",
            metrics: "1.2M impressions · 16k+ Likes ",
            href: "https://www.instagram.com/p/DLzqIQ9J4tg/",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-post-1.mp4",
          },
          {
            platform: "Instagram",
            title: "Apex Dura doesn’t just reduce curing time",
            metrics: "10k+ impressions · 3k Likes ",
            href: "https://www.instagram.com/p/DNDbG7wvDW_/",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-post-2.jpg",
          },
          {
            platform: "Instagram",
            title: "For builders, every column, every joint,",
            metrics: "10k+ impressions · 5k+ Likes ",
            href: "https://www.instagram.com/p/DN-r-5OCXTW/",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-post-3.mp4",
          },
          {
            platform: "Instagram",
            title: "In Karnataka, trust isn’t won by tall claims.",
            metrics: "10k+ impressions · 2.5k+ Likes ",
            href: "https://www.instagram.com/p/DMAaqFXvl2g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
            image:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-post-4.mp4",
          },
        ]}
        ctaHeadline="Ready to Build Brands That Endure?"
        ctaCopy={`From steel to SaaS, we craft brands engineered for growth. Let’s build your next market success story.`}
        ctaButtonText="Get in Touch"
        ctaHref="/contact-us"
        ctaImage="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/casestudy/apex-11.svg"
        className=""
        ctaHeadlineColor="text-primary "
        ctaCopyColor="text-secondary"
      />
    </main>
  );
}
