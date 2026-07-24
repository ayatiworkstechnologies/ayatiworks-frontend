import React from "react";
import CaseStudyShowcase from "../CaseStudyShowcase";
import ChallengeSection from "../ChallengeSection";
import ResultsShowcase from "../ResultsShowcase";
import WhyWorkedCta from "../WhyWorkedCta";

export default function VolvoCaseStudy() {
  return (
    <main className="section section-home bg-gradient-to-b from-[#fafafa] via-[#f6f6f6] to-[#f5f5f5]">
      <CaseStudyShowcase
        hero={{
          desktopImage:
            "/banner/volvo-banner.jpg",
          mobileImage:
            "/banner/volvo-banner-mob.jpg",
          imageAlt: "Volvo XC90 aerial view",
        }}
        section={{
          title: "How Ayatiworks Accelerated Volvo’s Growth Journey",
          subtitle: "Digital Marketing for Automobile Brands",
        }}
        client="Volvo Cars India"
        agency="Ayatiworks – Next is Now"
        markets="Chennai, Pondicherry, Tamil Nadu"
        duration="Started driving in September 2023"
        outcome="Achieving more milestones and the journey continues"
        downloadLabel="Download Volvo Case Study"
        className=""
      />

      <ChallengeSection
        challengeTitle="The Challenge"
        challengeEyebrow="Volvo wasn’t just looking for a digital agency."
        challengeCopy="They were scouting for a strategic pit crew to tune up their brand visibility, simplify marketing gears, and rev up sales, all without burning extra fuel.  "
        challengeCopy1="That's where Ayatiworks stepped in!  "
        challengeImg="/assets/casestudy/volvo-img-2.png"
        challengeImgAlt="Volvo challenge section background"
        objectiveTitle="The Objective"
        objectiveSubTitle="To build a long-term digital roadmap that: "
        bullets={[
          "Accelerate organic brand traffic",
          "Streamline the marketing engine",
          "Drive faster, more qualified lead conversions",
        ]}
        carImg="/assets/casestudy/volvo-img-1.png"
        carImgAlt="Volvo crossover image"
        className=""
      />
      <ResultsShowcase
        title="The Results: More Than Just Mileage"
        topImage="/assets/casestudy/volvo-img-3.png"
        metaHeading="Meta Campaigns (Apr 2024 – Feb 2025)"
        metaPoints={[
          "4.5M+ impressions; key >1.8% Reach freq",
          "120K+ people in retargetable audiences",
          "25% growth in Volvo’s Insta followers",
          "500k+ seen in first 5 weeks; always-on carousel strategy",
        ]}
        searchHeading="Search & Google Ads (Apr 2024 – Feb 2025)"
        searchPoints={[
          "12,000+ Google clicks",
          "20%+ direct organic traffic",
          "2024 XC90 Launch",
          "Google Ads: 7.9% CTR | 11.7% (Search) | 17.6% (Smart Leads)",
          "CPA, Google Search: 23% improvement MoM (Q4) | 40% QoQ (Q4)",
        ]}
        rightImage="/assets/casestudy/volvo-img-3.png"
        closingTitle="From Test Drive to a Long Drive: A Journey of Trust"
        closingCopy={`What started as one Volvo with Ayatiworks in 2024,
became a multi-model narrative powered by precision creative,
tight measurement, and rapid iteration. The result? Awareness
that translates into qualified leads—and a showroom that really
feels the compounding effect.

Quick note: each KPI was set with the finish line firmly aligned
with on-ground sales.`}
        logo="/assets/casestudy/volvo-img-6.png"
        className=""
      />
      <WhyWorkedCta
        caseStudyTitle="Volvo"
        title="Why It Worked"
        points={[
          "Humanized content for a premium automobile audience",
          "Seamless integration of Meta and Google platforms",
          "Data-backed decision making with a creative soul",
          "A partnership built on performance and personality",
        ]}
        socialPosts={[
          {
            platform: "Instagram",
            title: "A big surprise is cresting the horizon",
            metrics: "1.2M impressions · 1k+ Likes ",
            href: "https://www.instagram.com/p/DNZ0R6SPmLM/?utm_source=ig_web_copy_link",
            image:
              "/assets/casestudy/post-1.webp",
          },
          {
            platform: "Instagram",
            title: "Electric Volvo EX30",
            metrics: "1.2M impressions · 1k Likes ",
            href: "https://www.instagram.com/reel/DOiyfxZktjW/?utm_source=ig_web_copy_link",
            image:
              "/assets/casestudy/post-2.webm",
          },
          {
            platform: "Instagram",
            title: "Volvo family with the Volvo C40",
            metrics: "1.2M impressions · 500+ Likes ",
            href: "https://www.instagram.com/reel/DOiyfxZktjW/?utm_source=ig_web_copy_link",
            image:
              "/assets/casestudy/post-3.webm",
          },
          {
            platform: "Instagram",
            title: "Experience luxury Volvo XC90",
            metrics: "1.2M impressions · 6k+ Likes ",
            href: "https://www.instagram.com/p/DMAaqFXvl2g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
            image:
              "/assets/casestudy/post-4.jpg",
          },
        ]}
        ctaHeadline="Ready to Shift Gears?"
        ctaCopy={`Whether you’re an automobile brand looking to drive footfalls
or a SaaS startup wanting better conversions, Ayatiworks
knows how to make digital roads work for real business impact.`}
        ctaButtonText="Get in Touch"
        ctaHref="/contact-us"
        ctaImage="/assets/casestudy/volvo-img-7.png"
        className=""
        ctaHeadlineColor="text-white "
        ctaCopyColor="text-white/90"
      />
    </main>
  );
}
