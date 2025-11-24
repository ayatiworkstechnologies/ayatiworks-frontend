// app/about-us/page.jsx

export const metadata = {
  title: "Digital Marketing for Automobile Brands | Jeep India Independence Day Merchandise by Ayatiworks ",
  description: "Discover how Ayatiworks transformed Jeep India’s Independence Day merchandise microsite, revamped UI/UX, catchy creatives, and a 3-day social sprint that translated likes into ₹240K+ in sales. ",
    alternates: { canonical: "https://ayatiworks.com/case-study/Jeep-India-Independence-Day-Merchandise-Sales-Campaign", }

};
import React from "react";
import Connection from "../../components/Home/Connection";
import CaseStudyShowcase from "../../components/Case Study/CaseStudyShowcase";
import ChallengeObjectiveSection from "../../components/Case Study/ChallengeSection";
import ResultsShowcase from "../../components/Case Study/ResultsShowcase";
import WhyWorkedCta from "../../components/Case Study/WhyWorkedCta";



export default function JeepIndiaPages() {
  return (

    <main className="section section-home bg-gradient-to-b from-[#fafafa] via-[#f6f6f6] to-[#f5f5f5]">
      <CaseStudyShowcase
        hero={{
          desktopImage: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/jeep-banner.png",
          mobileImage: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/jeep-banner-mob.png",
          imageAlt: "Jeep India Independence Day merchandise campaign, stylish UI/UX and sales-driving creatives by Ayatiworks",
        }}
        section={{
          title: " Jeep India Independence Day Merchandise Campaign by Ayatiworks",
          subtitle: "",
        }}
        client="Jeep India"
        agency="Ayatiworks - Next is Now"
        markets="Chennai, Pondicherry, Tamil Nadu"
        duration="August 13th - August 16th, 2025"
        outcome=" Jeep India"
        downloadLabel="Download Jeep India Case Study"
        downloadHref=""
        className=""
      />

      <ChallengeObjectiveSection
        challengeTitle="The Challenge"
        challengeEyebrow="Jeep India rolled into Ayatiworks with a mission: to overhaul their merchandise microsite with a sharper, more stylish UI/UX and roll out Independence Day creatives that don’t just wave the flag, they make wallets open. With only three days on the clock, expectations were riding high, Jeep wanted copy that was catchy and salesy, and Ayatiworks delivered with style under pressure.  "
        challengeCopy=""
        challengeCopy1=""
        challengeImg="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-img-2.png"
        challengeImgAlt="jeep challenge section background"
        objectiveTitle="The Objective"
        objectiveSubTitle="To drive an Independence Day merchandising blitz that would: "
        bullets={[
          "Elevate microsite experience with intuitive, Jeep-worthy design ",
          "Create irresistible creatives that combine patriotic flair with persuasive pull ",
          "Maximize social momentum, tapping into Jeep’s existing followers to spark organic conversations ",
          "Convert social buzz into sales, turning interest into ₹ orders on the clock ",
        ]}
        carImg="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-img-1.png"
        carImgAlt="jeep crossover image"
        className=""
      />
      <ResultsShowcase
        title="Results: Likes, Leads & Revenue Fast "
        topImage="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-img-3.png"
        metaHeading="Meta Campaigns (Apr 2024 - Feb 2025)"
        metaPoints={[
          "16,666 likes ",
          "3,000 comments ",
          "420 reposts ",
          "1,778 shares ",
          "123 orders placed ",
          "₹240,375 in total sales ",

        ]}
        metaPhara="We ignited social engagement and translated it into real revenue, all before the campaign cooled down. "
        // searchHeading="Search & Google Ads (Apr 2024 - Feb 2025)"
        // searchPoints={[
        //   "12,000+ Google clicks",
        //   "20%+ direct organic traffic",
        //   "2024 XC90 Launch",
        //   "Google Ads: 7.9% CTR | 11.7% (Search) | 17.6% (Smart Leads)",
        //   "CPA, Google Search: 23% improvement MoM (Q4) | 40% QoQ (Q4)",
        // ]}
        // rightImage="/assets/casestudy/volvo-img-3.png"
        closingTitle="From Scroll to Sale: The Transformation "
        closingCopy={`In just 72 hours, Ayatiworks shifted Jeep India’s merchandising from just another microsite to a turbocharged user experience and social event. We turned each likes into traction, each creative into a conversion, and the campaign into short-run success. `}
        logo="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-img-5.png"
        className=""
      />
      <WhyWorkedCta
        title="Why It Worked"
        points={[
          "Stylish UX that clicks: A design as sturdy and smooth as a Jeep trail drive ",
          "Emotion with edge: Patriotic themes that felt compelling, not clichéd ",
          "Organic engine power: Mobilized the Jeep community, real fans do better than ads ",
          "Copy that commands attention: “Make it catchy, make it convert”, and it did ",
        ]}
        socialPosts={[
          {
            platform: "Instagram",
            title: "From iconic jackets to sleek sippers and rugged keychains",
            metrics: "1k impressions  ",
            href: "https://www.instagram.com/p/DNVi430vLDH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=1",
            image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-post-1.jpg",
          },
          {
            platform: "Instagram",
            title: "From iconic jackets to sleek sippers and rugged keychains",
            metrics: "1k impressions ",
            href: "https://www.instagram.com/p/DNVi430vLDH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=1",
            image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-post-2.jpg",
          },
          {
            platform: "Instagram",
            title: "From iconic jackets to sleek sippers and rugged keychains",
            metrics: "1k impressions  ",
            href: "https://www.instagram.com/p/DNVi430vLDH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=1",
            image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-post-3.jpg",
          },

        ]}
        ctaHeadline="Ready to Shift Your Digital Strategy into Overdrive? "
        ctaCopy={`Whether you're an automobile brand, EdTech innovator, or fintech disruptor, Ayatiworks knows how to craft campaigns that don't just cost, they charge. Let’s put your next campaign into high gear.  `}
        ctaButtonText="Get in Touch"
        ctaHref="/contact-us"
        ctaImage="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/jeep-img-6.png"
        className=""
        ctaHeadlineColor="text-secondary "
        ctaCopyColor="text-white/90"
      />
    </main>

  );
}
