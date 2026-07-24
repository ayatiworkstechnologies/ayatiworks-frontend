import React from "react";
import Link from "next/link";
import CaseStudyShowcase from "../CaseStudyShowcase";
import ChallengeSection from "../ChallengeSection";
import ResultsShowcase from "../ResultsShowcase";
import WhyWorkedCta from "../WhyWorkedCta";

export default function SpaarcCaseStudy() {
  return (
    <main className="section section-home bg-gradient-to-b from-[#f3f4ff] via-[#f5fbff] to-[#f0f9ff]">
      <CaseStudyShowcase
        hero={{
          desktopImage:
            "/banner/spa-banner.jpg", // Placeholder
          mobileImage:
            "/banner/spa-banner-mob.jpg", // Placeholder
          imageAlt:
            "Ayatiworks marketing strategy for SPAARC wellness brand growth",
        }}
        section={{
          title:
            "How Ayatiworks Built SPAARC into a Pan-India Wellness Movement",
          subtitle:
            "Branding & Digital Transformation for Wellness & Therapy Brands",
        }}
        client="SPAARC "
        agency="Ayatiworks – Next is Now"
        markets="Pan India"
        duration="HEALTH & WELLNESS JOURNEY FROM 2020"
        outcome="Expanding awareness, trust, and non-surgical wellness across India."
        downloadLabel="Download SPAARC Case Study"
        className=""
      />

      <ChallengeSection
        challengeTitle="The Challenge"
        challengeEyebrow="SPAARC pioneered in Myofascial Trigger Point Therapy and Aqua Therapy, helping thousands recover from pain naturally. While the results were powerful, the brand’s story had limited reach beyond South India."
        challengeCopy="The organization also lacked a structured marketing ecosystem to support national growth. From brand identity and digital presence to awareness campaigns, the foundation for large-scale communication had to be built."
        challengeCopy1="Ayatiworks stepped in to transform SPAARC from a regional therapy center into a recognized voice of non-surgical healing across India."
        challengeImg="/assets/casestudy/spa-sta.jpg"
        challengeImgAlt="SPAARC wellness challenge"
        objectiveTitle="The Objective"
        objectiveSubTitle="To build a national wellness brand ecosystem that:"
        bullets={[
          "Establishes SPAARC as a trusted leader in non-surgical therapy",
          "Amplifies the philosophy of healing through strength and movement",
          "Expands brand awareness beyond South India to a pan-India audience",
          "Builds thought leadership visibility for the doctor founders",
          "Creates a unified marketing system across digital and offline channels",
        ]}
        carImg="/assets/casestudy/spa-sec-1.jpg"
        carImgAlt="Wellness movement objective"
        className="py-20 md:py-32"
      />

      <ResultsShowcase
        title="The Execution"
        topImage="/assets/casestudy/spa-img-2.jpg"
        metaHeading="Brand Identity & Digital Foundation"
        metaPoints={[
          "Designed SPAARC’s brand identity system, defining voice, message, and visual language",
          "Built a conversion-focused website supported by SEO, Google Analytics, Search Console, and Tag Manager",
          "Created educational content including blogs, infographics, wellness stories, and therapy explainers",
        ]}
        searchHeading="Social Media & Thought Leadership"
        searchPoints={[
          "Built brand presence across Facebook, Instagram, LinkedIn, YouTube, and Google My Business",
          "Developed multilingual content strategy for Tamil, Hindi, and English audiences",
          "Established personal branding for SPAARC’s doctor founders through expert videos, interviews, and wellness insights",
        ]}
        rightImage="/assets/casestudy/spa-img-3.jpg"
        className=""
      />

      <ResultsShowcase
        title="Awareness & Growth Campaigns"
        topImage="/assets/casestudy/spa-img-4.jpg"
        metaHeading=""
        metaPoints={[
          "Executed organic and paid campaigns across Meta and Google Ads",
          "Produced TVCs, radio ads, and wellness events to reach both urban and regional audiences",
          "Strengthened discovery through location-based SEO and clinic search optimization",
        ]}
      />

      <ResultsShowcase
        title="The Results:"
        // topImage="/assets/casestudy/apex-7.svg"
        closingTitle="National Brand Recognition"
        closingCopy={`Achieved 100% awareness across target states, transforming SPAARC into a nationally recognized wellness brand
Positioned SPAARC as a leader in non-surgical therapy and movement-based healing
Built strong online communities around SPAARC’s wellness philosophy`}
        logo="/assets/casestudy/spa-brand.png"
        className=""
      />
      <ResultsShowcase
        // title="Awareness & Growth Campaigns"
        searchHeading="Business Growth & Expansion"
        searchPoints={[
          "Expanded from 20 outlets in 2020 to 50+ outlets by 2025",
          "Strengthened patient trust through doctor-led digital engagement and educational content",
          "Delivered five years of continuous marketing and communications stewardship",
        ]}
        rightImage="/assets/casestudy/spa-img-5.jpg"
        className=""
      />

      <WhyWorkedCta
        caseStudyTitle="SPAARC"
        title="Social Performance"
        points={[
          "SPAARC’s digital ecosystem expanded rapidly through wellness education, therapy explainers, and expert-led content. Reels, patient success stories, and health awareness campaigns helped audiences understand the brand’s philosophy of healing through strength, not surgery",
        ]}
        socialPosts={[
          {
            platform: "Instagram",
            title: "Reel Highlight — Wellness Focus",
            metrics: "Click to View",
            href: "https://www.instagram.com/reel/DM-SewQJ9HH/?igsh=YmVjcjRuMWs2Zmww",
            image:
              "/assets/casestudy/spa-vid-1.mp4",
          },
          {
            platform: "Instagram",
            title: "Reel Highlight — Therapy Success",
            metrics: "Click to View",
            href: "https://www.instagram.com/reel/DV8mvuqgNP0/?igsh=dW92dmdmbjF3aDRl",
            image:
              "/assets/casestudy/spa-vid-2.mp4",
          },
          {
            platform: "Instagram",
            title: "Reel Highlight — Expert Guidance",
            metrics: "Click to View",
            href: "https://www.instagram.com/reel/DObFmQFiSot/?igsh=YmRoOW93cDdyYW95",
            image:
              "/assets/casestudy/spa-vid-3.mp4",
          },
          {
            platform: "Instagram",
            title: "Reel Highlight — Brand Vision",
            metrics: "Click to View",
            href: "https://www.instagram.com/reel/DOgBbeejZk_/?igsh=MTFuc3dobGlzaHowOA%3D%3D",
            image:
              "/assets/casestudy/spa-vid-4.mp4",
          },
        ]}
        className="py-20 md:py-32"
        ctaHeadline="Ready to Build Brands That Transform Lives?"
        ctaCopy={
          <>
            Great brands are built when purpose meets strategy. At{" "}
            <Link
              href="/"
              className="font-bold hover:text-primary transition-colors"
            >
              Ayatiworks
            </Link>
            , we combine brand storytelling, digital ecosystems, and performance
            marketing to help organizations scale their impact and reach.
          </>
        }
        ctaButtonText="Get in Touch"
        ctaHref="https://www.ayatiworks.com/contact-us"
        ctaImage="/assets/casestudy/spa-foot.jpg"
        ctaHeadlineColor="text-primary"
        ctaCopyColor="text-secondary"
      />
    </main>
  );
}
