"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";

import { FiShare2, FiCopy } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { POSTS } from "../../lib/blogs-data";
import RelatedPostsFromData from "./RelatedPostsFromData";
import { getRelatedRecentPosts } from "../../lib/getRelatedRecentPosts";

import RightSidebarCategories from "./RightSidebarCategories";

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage117() {
  const post = POSTS.find((p) => p.id === 117) || POSTS[0];

  const relatedPosts = getRelatedRecentPosts({
    currentPostId: post.id,
    category: post.category,
    limit: 3,
  });

  return (
    <main className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="mx-auto max-w-8xl px-4 sm:px-6 pt-6">
        <SplitHeroBanner
          post={post}
          href={buildHref(post.slug)} // <-- normalized href
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={post.category}
          title={[post.bannerTitle]}
          author={{
            name: "Daniel Joseph",
            slug: "daniel-joseph",
            role: "Senior SEO Strategist",
            avatar:
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/author/daniel.png",
          }}
          updatedAt={post.date}
          readMins={post.readMins}
        />
      </section>

      {/* MAIN TITLE */}
      <header className="border-b border-slate-200 section-container bg-white">
        <div className="mx-auto px-4 sm:px-6 py-10">
          <h1 className="mx-auto text-center section-title">
            <span className="text-primary">
              Top 10 SEO Agencies in Chennai
            </span>
          </h1>
        </div>
      </header>

      {/* BODY: 3-column */}
      <section className="mx-auto grid grid-cols-1 gap-4 px-4 sm:px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)_250px]">
        {/* LEFT: TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        {/* CENTER: ARTICLE */}
        <article className="prose prose-slate max-w-none md:prose-lg">
          <Intro />

          <Section
            id="why-chennai-has-become-a-strong-seo-talent-hub"
            title="Why Chennai Has Become a Strong SEO Talent Hub"
          >
            <p className="section-phara">
              Chennai has quietly evolved into one of India’s most reliable centers for digital talent, particularly in search engine optimization and organic marketing.
            </p>
            <p className="section-phara">
              The city’s long-standing reputation as an IT and technology powerhouse has created the perfect environment for SEO specialists, content strategists, technical developers, and digital analysts to collaborate within the same ecosystem.
            </p>
            <p className="section-phara">
              As businesses increasingly shift from short-term advertising tactics to long-term organic growth strategies, Chennai’s blend of technology expertise and marketing capability has positioned it as a strong hub for SEO services.
            </p>
            <p className="section-phara">
              The foundation of this growth lies in the city’s robust technology infrastructure. Chennai hosts numerous IT parks, global software companies, and engineering institutions that continuously produce skilled professionals with strong technical capabilities.
            </p>
            <p className="section-phara">
              SEO today is not only about keywords and content; it requires technical site architecture, structured data, Core Web Vitals optimization, crawl management, and analytics interpretation.
            </p>
            <p className="section-phara">
              The technical orientation of Chennai’s workforce enables agencies to handle these advanced SEO requirements with precision.
            </p>
            <p className="section-phara">
              Another factor driving Chennai’s SEO ecosystem is the increasing demand for organic marketing from businesses across industries.
            </p>
            <p className="section-phara">
              Paid advertising can deliver quick visibility, but its impact stops the moment the ad budget pauses. SEO, on the other hand, builds sustainable discovery.
            </p>
            <p className="section-phara">
              Businesses have realized that appearing consistently in search results creates a steady pipeline of potential customers who are already searching for relevant products or services.

              This long-term value has pushed brands to actively research and partner with firms listed among the Top 10 SEO Agencies in Chennai.
            </p>
            <Link href="https://www.brightedge.com/blog/organic-share-of-traffic-increases-to-53" target="_blank" rel="noopener noreferrer" prefetch={false}>
              <Image
                src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/blogImg/blog-117-1.png"
                alt="Organic search drives 53% of all website traffic"
                width={800}
                height={600}
              />
            </Link>

            <p className="section-phara">

              This widely cited statistic from industry research underscores why companies prioritize SEO as a core digital strategy.
            </p>
            <p className="section-phara">
              When more than half of website visits originate from organic search, ranking well in search engines becomes a direct contributor to brand visibility, inbound leads, and online revenue.
            </p>
            <p className="section-phara">
              Beyond the numbers, the nature of marketing itself has changed. Modern SEO is deeply connected to content ecosystems.
            </p>
            <p className="section-phara">
              Search engines reward websites that demonstrate topical authority, meaning they publish helpful, structured, and consistent content around specific themes.
            </p>
            <p className="section-phara">
              This shift has led to the rise of content-driven SEO strategies, where blogs, guides, landing pages, and multimedia resources work together to build authority and trust with both users and search engines.
            </p>
            <p className="section-phara">
              Chennai’s agencies have adapted quickly to this approach. Many now integrate content strategy, technical optimization, and performance analysis into a unified SEO framework.
            </p>
            <p className="section-phara">
              This integration allows businesses to rank not only for a few isolated keywords but across entire topic clusters that represent real customer journeys.
            </p>
            <p className="section-phara">
              Competition in search results has also intensified. Businesses across sectors, from healthcare and education to SaaS and real estate, are investing in SEO to secure long-term digital visibility.
            </p>
            <p className="section-phara">
              As more organizations recognize the importance of organic discovery, the role of specialized agencies becomes even more critical.
            </p>
            <p className="section-phara">
              Companies are no longer looking for generic digital marketing support; they are actively evaluating the best SEO Agencies in Chennai to identify partners capable of delivering sustainable ranking improvements and measurable organic growth.
            </p>
            <p className="section-phara">
              Together, Chennai’s technology ecosystem, skilled workforce, and increasing demand for organic marketing have created an environment where SEO expertise continues to thrive.
            </p>
            <p className="section-phara">
              For businesses seeking strategic search visibility, the city has become one of the most reliable places to find experienced SEO professionals and forward-thinking agencies.
            </p>

          </Section>

          {/* STEP 1 */}
          <Section
            id="how-brands-should-evaluate-an-seo-agency-in-chennai"
            title="How Brands Should Evaluate an SEO Agency in Chennai"
          >
            <p className="section-phara ">
              Choosing an SEO partner is not simply a vendor selection exercise, it is a strategic decision that can shape how a brand is discovered online.
            </p>
            <p className="section-phara">
              Organic visibility today influences everything from credibility to inbound lead generation.
            </p>
            <p className="section-phara">
              Because of this, businesses must look beyond surface-level promises and evaluate agencies based on their ability to deliver consistent, long-term growth through search.

            </p>

          </Section>

          {/* STEP 2 */}
          <Section
            id="strategic-depth-and-search-intent-understanding"
            title="Strategic Depth and Search Intent Understanding"
          >
            <p className="section-phara">
              A strong starting point is the agency’s strategic thinking. Effective SEO is no longer about ranking a handful of keywords.
            </p>
            <p className="section-phara">Modern optimization focuses on understanding user intent and building content ecosystems that address entire topic areas.
            </p>
            <p className="section-phara">Agencies that demonstrate a structured approach to topic authority, search intent mapping, and content planning tend to produce sustainable results.
            </p>
            <p className="section-phara">
              Instead of chasing short-term ranking spikes, they build frameworks that help websites attract qualified visitors consistently over time.

            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="technical-seo-capability"
            title="Technical SEO Capability"
          >
            <p className="section-phara">
              Search engines rely heavily on technical signals when evaluating websites. This includes site architecture, crawlability, page speed, structured data implementation, and overall user experience.
            </p>
            <p className="section-phara">
              A capable SEO team should be able to identify and resolve technical barriers that may prevent search engines from properly indexing and understanding a website.
            </p>
            <p className="section-phara">
              Improvements in areas such as Core Web Vitals, mobile performance, schema markup, and internal linking structures often have a significant impact on search performance.

            </p>

          </Section>
          <Section
            id="content-driven-seo-strategy"
            title="Content-Driven SEO Strategy"
          >
            <p className="section-phara">
              Content plays a central role in modern SEO. Search engines increasingly reward websites that publish informative, well-structured, and authoritative content around specific topics.
            </p>
            <p className="section-phara">
              Agencies that invest in editorial planning, topic clusters, and long-form resources help brands establish subject-matter authority within their industry.
            </p>
            <p className="section-phara">
              Over time, this strengthens organic visibility while also building trust with potential customers who rely on search engines to find reliable information.

            </p>

          </Section>
          <Section
            id="backlink-strategy-and-authority-building"
            title="Backlink Strategy and Authority Building"
          >
            <p className="section-phara">
              Another important factor is how an agency approaches link building. High-quality backlinks remain one of the strongest signals of credibility for search engines.
            </p>
            <p className="section-phara">
              Reputable agencies focus on ethical link acquisition through digital PR, partnerships, industry collaborations, and authoritative content that naturally attracts citations.
            </p>
            <p className="section-phara">
              This approach improves domain authority while staying aligned with search engine guidelines.
            </p>

          </Section>

          <Section
            id="data-transparency-and-reporting"
            title="Data Transparency and Reporting"
          >
            <p className="section-phara">
              Transparency is a strong indicator of a professional SEO agency. Businesses should expect agencies to rely on credible analytics platforms and provide clear reporting on performance metrics.
            </p>
            <p className="section-phara">
              Tools such as Google Search Console, Google Analytics (GA4), Ahrefs, and SEMrush allow agencies to track keyword performance, organic traffic growth, user behavior, and technical health.
            </p>
            <p className="section-phara">
              Regular reporting ensures that businesses understand how SEO contributes to their broader marketing objectives.

            </p>


          </Section>
          <Section
            id="local-seo-expertise"
            title="Local SEO Expertise"
          >
            <p className="section-phara">
              For businesses targeting specific geographic markets, local SEO expertise becomes essential. Restaurants, healthcare clinics, retail outlets, and service providers rely heavily on local search visibility.
            </p>
            <p className="section-phara">
              Agencies experienced in local optimization can improve Google Business Profile visibility, build location-specific content, manage citations, and strengthen presence in “near me” searches.
            </p>
            <p className="section-phara">
              These strategies help businesses capture high-intent customers who are actively searching within their area.

            </p>


          </Section>
          <Section
            id="how-we-curated-the-seo-agencies-in-chennai"
            title="How We Curated the SEO Agencies in Chennai"
          >
            <p className="section-phara">
              Shortlists like this should help businesses think clearly, not just scroll through names.
            </p>
            <p className="section-phara">The agencies included here were reviewed based on publicly available information, market visibility, service capabilities, and the type of SEO work they are known to deliver.
            </p>
            <p className="section-phara">
              The goal is not to declare a “winner,” but to give brands a practical view of where different agencies tend to perform well.

            </p>

          </Section>
          <Section
            id="market-presence-and-credibility"
            title=" Market Presence and Credibility"
          >
            <p className="section-phara">
              An agency’s reputation usually reflects the consistency of its work. Firms that maintain long-term client relationships, demonstrate visible case studies, or actively contribute to the SEO ecosystem tend to stand out.
            </p>
            <p className="section-phara">
              Market presence also includes how recognizable the agency is within industry conversations, conferences, educational initiatives, or thought leadership.

            </p>

          </Section>
          <Section
            id="service-depth-and-seo-capability"
            title="Service Depth and SEO Capability "
          >
            <p className="section-phara">
              SEO today requires a mix of technical expertise, content strategy, and authority building.
            </p>
            <p className="section-phara">
              Agencies were reviewed for their ability to handle multiple aspects of search optimization, including technical SEO, content-driven growth, backlink strategies, and performance monitoring.
            </p>
            <p className="section-phara">
              Businesses often benefit from partners who can combine these elements into a structured SEO framework rather than offering isolated services.

            </p>


          </Section>
          <Section
            id="industry-exposure"
            title="Industry Exposure "
          >
            <p className="section-phara">
              Different industries demand different SEO approaches. For example, SaaS companies rely heavily on content-led inbound strategies, while local businesses often depend on strong local search visibility.
            </p>
            <p className="section-phara">
              Agencies that have worked across multiple industries usually demonstrate better adaptability when dealing with new challenges.

            </p>


          </Section>
          <Section
            id=""
            title=" Technology and Tools"
          >
            <p className="section-phara">
              Professional SEO work relies on reliable data. Agencies using established platforms such as analytics dashboards, keyword research tools, and technical auditing software are better equipped to make informed optimization decisions. The use of modern tools often reflects the maturity of an agency’s processes.
            </p>
            <p className="section-subtitle text-left text-secondary font-bold">A Note for Businesses
            </p>
            <p className="section-phara">
              The information presented here is based on general research and publicly available insights.
            </p>
            <p className="section-phara">
              While this overview can help businesses understand the strengths of different agencies, it should not replace independent evaluation.
            </p>
            <p className="section-phara">
              Companies are encouraged to review portfolios, request consultations, and assess alignment with their specific goals before making a final decision.

            </p>

          </Section>
          <Section
            id="top-10-seo-agencies-in-chennai-a-comparative-overview"
            title="Top 10 SEO Agencies in Chennai: A Comparative Overview"
          >
            {/* 1. Ayatiworks */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              1. Ayatiworks
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://www.ayatiworks.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.ayatiworks.com/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2020
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India, United States (client delivery)
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO strategy, technical SEO, AI-driven SEO, AEO (Answer Engine Optimization), content marketing, multilingual SEO campaigns, link building, performance marketing integration.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              SaaS, healthcare, edtech, ecommerce, automotive, edtech, educational institutions, real estate, fintech, qcommerce, food and beverage, foodtech and professional services.
            </p>

            {/* 2. Spinta Digital */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              2. Spinta Digital
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://spintadigital.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://spintadigital.com/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2015
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India with international client servicing
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO consulting, technical SEO audits, content optimization, website performance improvements, link building strategies, analytics and reporting.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              Technology startups, SaaS platforms, ecommerce businesses.
            </p>

            {/* 3. Weboin */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              3. Weboin
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://weboin.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://weboin.com/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2013
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India, UAE
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              Search engine optimization, local SEO, social media marketing, paid search advertising, website design and development.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              SMEs, ecommerce brands, healthcare businesses, local service providers.
            </p>

            {/* 4. FITA */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              4. FITA
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://www.fita.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.fita.in/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2012
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO training, digital marketing certification programs, SEO consulting, website optimization strategies.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              Education, training institutions, digital skill development programs.
            </p>

            {/* 5. Orange Digital */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              5. Orange Digital
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://www.orangedigitalmarketing.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.orangedigitalmarketing.in/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2017
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO campaigns, search advertising, content marketing, website development, performance marketing.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              Local businesses, retail brands, small and medium enterprises.
            </p>

            {/* 6. Tech Next Technologies */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              6. Tech Next Technologies
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://www.technexttechnosoft.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.technexttechnosoft.com/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2015
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India, Middle East
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO services, web development, ecommerce solutions, digital marketing consulting.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              IT services, ecommerce, small business websites.
            </p>

            {/* 7. Orion Technologies */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              7. Orion Technologies
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://www.oriontechnosoft.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.oriontechnosoft.com/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2014
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              Search engine optimization, web design, digital marketing campaigns, software development services.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              Technology companies, startups, SMEs.
            </p>

            {/* 8. Hirola Infotech Solutions */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              8. Hirola Infotech Solutions
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://hirolainfotech.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://hirolainfotech.com/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2016
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India, international client support
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO services, website design, mobile application development, digital marketing services.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              Technology startups, ecommerce businesses, service-based companies.
            </p>

            {/* 9. Just SEE */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              9. Just SEE
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://justsee.co.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://justsee.co.in/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2014
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO optimization, digital marketing services, website development, search advertising.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              Small businesses, local services, ecommerce startups.
            </p>

            {/* 10. Infinix 360 */}
            <h3 className="section-title text-2xl text-secondary text-left mt-8 mb-4">
              10. Infinix 360
            </h3>
            <p className="section-phara">
              <strong>Website:</strong> <Link href="https://www.infinix360.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://www.infinix360.com/</Link>
            </p>
            <p className="section-phara">
              <strong>Established In:</strong> 2012
            </p>
            <p className="section-phara">
              <strong>Headquartered At:</strong> Chennai, Tamil Nadu
            </p>
            <p className="section-phara">
              <strong>Global Presence:</strong> India
            </p>
            <p className="section-phara">
              <strong>Products & Services:</strong>
              <br />
              SEO campaigns, social media marketing, content marketing, web development, digital advertising.
            </p>
            <p className="section-phara">
              <strong>Industry Specialization:</strong>
              <br />
              SMEs, ecommerce businesses, consumer brands.
            </p>
          </Section>


          <Section
            id="top-10-seo-agencies-in-chennai-quick-comparison-guide"
            title="Top 10 SEO Agencies in Chennai: Quick Comparison Guide"
          >
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-slate-200 text-left">
                <thead className="bg-[#0A4991] text-white font-semibold">
                  <tr>
                    <th className="px-6 py-4 font-primary text-lg whitespace-nowrap border-b border-[#0A4991]">
                      Agency
                    </th>
                    <th className="px-6 py-4 font-primary text-lg border-b border-[#0A4991]">
                      Best For
                    </th>
                    <th className="px-6 py-4 font-primary text-lg border-b border-[#0A4991]">
                      Core SEO Strength
                    </th>
                    <th className="px-6 py-4 font-primary text-lg border-b border-[#0A4991]">
                      Ideal Business Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Ayatiworks
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Integrated SEO + content ecosystems
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Technical SEO, AI-SEO, AEO, multilingual SEO strategies
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      SaaS companies, global brands, enterprises
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Spinta Digital
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Technical SEO consulting
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Website audits, performance optimization, structured SEO strategies
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      SaaS startups, tech companies
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Weboin
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Local and SME-focused SEO
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Local search optimization, lead generation strategies
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      SMEs, local service providers
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      FITA
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      SEO training and consulting
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      SEO education, foundational SEO frameworks
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      Students, training institutes, early-stage marketers
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Orange Digital
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Full-service digital marketing
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      SEO integrated with paid campaigns and content marketing
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      Retail brands, SMEs
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Tech Next Technologies
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Web development + SEO integration
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Website optimization, technical SEO implementation
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      Ecommerce businesses, IT firms
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Orion Technologies
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Technology-driven SEO solutions
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Technical optimization and web infrastructure alignment
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      Startups and technology businesses
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Hirola Infotech Solutions
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      SEO combined with development
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Website optimization and digital marketing support
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      Ecommerce and service companies
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Just SEE
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Affordable SEO services
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Local SEO, small business optimization
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      Local businesses, startups
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="px-6 py-4 font-primary text-base font-medium text-slate-900 border-r border-slate-100">
                      Infinix 360
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Performance-focused digital marketing
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700 border-r border-slate-100">
                      Content marketing and SEO-led growth
                    </td>
                    <td className="px-6 py-4 font-secondary text-base text-slate-700">
                      Consumer brands, SMEs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section
            id="how-to-choose-the-right-seo-agency-for-your-business"
            title="How to Choose the Right SEO Agency for Your Business"
          >
            <p className="section-phara">
              Finding the right SEO partner requires more than comparing service lists.
            </p>
            <p className="section-phara">
              Businesses should evaluate agencies based on how well their expertise aligns with the company’s goals, market competition, and growth timeline.
            </p>
            <p className="section-phara">
              A thoughtful selection process ensures the SEO investment translates into sustainable organic visibility.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Define Your Primary SEO Objective</h3>
            <p className="section-phara">
              The first step is identifying what success looks like for your business.
            </p>
            <p className="section-phara">
              Some companies want to generate qualified inbound leads through search, while others want to improve ecommerce sales or strengthen brand authority through content.
            </p>
            <p className="section-phara">
              Local service providers may prioritize visibility in location-based searches. Understanding the objective helps narrow down agencies that specialize in the relevant type of SEO strategy.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Evaluate the Strategy Behind the Work</h3>
            <p className="section-phara">
              Many agencies present a list of deliverables, keyword research, backlinks, or technical audits.
            </p>
            <p className="section-phara">
              While these activities are important, the real differentiator lies in the strategy that connects them.
            </p>
            <p className="section-phara">
              Businesses should look for agencies that explain how their approach will improve search visibility, strengthen authority, and drive qualified traffic rather than focusing solely on routine tasks.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Assess Transparency and Reporting</h3>
            <p className="section-phara">
              SEO progress should always be measurable. Reliable agencies provide clear reporting through platforms such as Google Search Console, Google Analytics, and professional SEO tools.
            </p>
            <p className="section-phara">
              These reports typically include ranking improvements, organic traffic growth, and user engagement metrics.
            </p>
            <p className="section-phara">
              Transparent reporting helps businesses understand how optimization efforts contribute to overall marketing performance.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Consider Industry Experience</h3>
            <p className="section-phara">
              SEO strategies often vary across industries. For example, SaaS companies depend heavily on content-driven inbound strategies, while local businesses require strong local search optimization.
            </p>
            <p className="section-phara">
              Agencies that have previously worked in a similar industry may be able to identify opportunities and competitive gaps more quickly.
            </p>
            <p className="section-phara">
              Choosing an SEO agency ultimately comes down to alignment.
            </p>
            <p className="section-phara">
              The best partnership is one where the agency understands the business landscape, communicates strategy clearly, and works collaboratively to achieve long-term organic growth.
            </p>
          </Section>

          <Section
            id="understanding-the-different-types-of-seo-services"
            title="Understanding the Different Types of SEO Services"
          >
            <p className="section-phara">
              Search engine optimization is not a single activity but a combination of specialized disciplines that work together to improve visibility.
            </p>
            <p className="section-phara">
              Businesses evaluating agencies often benefit from understanding the main categories of SEO services.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Technical SEO</h3>
            <p className="section-phara">
              Technical SEO focuses on the structural health of a website. It ensures that search engines can properly crawl, index, and interpret the site’s pages.
            </p>
            <p className="section-phara">
              This includes elements such as site architecture, page speed optimization, mobile responsiveness, structured data, and Core Web Vitals improvements.
            </p>
            <p className="section-phara">
              Without a strong technical foundation, even well-written content may struggle to rank effectively.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Content and On-Page SEO</h3>
            <p className="section-phara">
              Content optimization plays a central role in modern search strategies. Agencies develop content frameworks that align with user intent and industry topics.
            </p>
            <p className="section-phara">
              This includes blog articles, landing pages, pillar content, and topic clusters that collectively establish authority in a specific subject area.
            </p>
            <p className="section-phara">
              On-page optimization, such as headings, metadata, internal linking, and keyword placement, helps search engines understand the relevance of each page.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Local SEO</h3>
            <p className="section-phara">
              Local SEO is designed for businesses targeting customers within a specific geographic area. Restaurants, clinics, retail outlets, and service providers depend heavily on location-based searches.
            </p>
            <p className="section-phara">
              Local optimization involves improving Google Business Profile visibility, managing citations, building location-specific content, and strengthening rankings for city-based search queries.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Authority Building and Link Development</h3>
            <p className="section-phara">
              Backlinks remain a significant ranking factor.
            </p>
            <p className="section-phara">
              Agencies help improve domain authority through ethical link-building strategies, digital PR initiatives, partnerships, and high-quality content that naturally attracts references from other websites.
            </p>
            <p className="section-phara">
              This process strengthens the credibility of a website in the eyes of search engines.
            </p>
            <p className="section-phara">
              When these SEO disciplines work together, they create a balanced optimization strategy capable of delivering consistent organic traffic and long-term search visibility.
            </p>
          </Section>

          <Section
            id="pricing-intelligence-what-seo-services-typically-cost-in-chennai"
            title="Pricing Intelligence: What SEO Services Typically Cost in Chennai"
          >
            <p className="section-phara">
              SEO pricing can vary significantly depending on the scope of work, the competitiveness of the industry, and the maturity of the business.
            </p>
            <p className="section-phara">
              While some companies require basic on-page optimization, others need full-scale SEO programs involving technical improvements, content development, and authority building.
            </p>
            <p className="section-phara">
              Understanding typical pricing ranges can help businesses set realistic expectations when engaging with an SEO agency.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Startup SEO Engagements</h3>
            <p className="section-phara">
              Early-stage businesses and local service providers often begin with foundational SEO services.
            </p>
            <p className="section-phara">
              These typically include technical audits, on-page optimization, keyword research, and basic content improvements.
            </p>
            <p className="section-phara">
              <strong>Typical Monthly Investment:</strong> ₹25,000 – ₹75,000
            </p>
            <p className="section-phara">
              This level of engagement is common for small businesses aiming to improve visibility for niche keywords or local searches.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Growth-Stage SEO Programs</h3>
            <p className="section-phara">
              Companies that are expanding their digital presence usually require a more structured SEO strategy.
            </p>
            <p className="section-phara">
              This may include ongoing content creation, backlink development, competitor analysis, and advanced performance tracking.
            </p>
            <p className="section-phara">
              <strong>Typical Monthly Investment:</strong> ₹80,000 – ₹2,00,000
            </p>
            <p className="section-phara">
              Businesses at this stage are often competing for more competitive keywords and broader industry visibility.
            </p>

            <h3 className="section-title text-xl text-secondary text-left mt-6 mb-3">Enterprise SEO Engagements</h3>
            <p className="section-phara">
              Large organizations and high-competition industries require comprehensive SEO programs.
            </p>
            <p className="section-phara">
              These engagements typically involve technical SEO consulting, large-scale content ecosystems, digital PR campaigns, and continuous data analysis.
            </p>
            <p className="section-phara">
              <strong>Typical Monthly Investment:</strong> ₹3,00,000 – ₹10,00,000+
            </p>
            <p className="section-phara">
              These programs are designed for companies targeting national or global search visibility.
            </p>

            <p className="section-phara italic mt-6">
              <strong>Pricing Disclaimer:</strong> These ranges represent general market averages and should not be interpreted as fixed pricing for any specific agency or that of Ayatiworks. Actual costs may vary depending on the project scope, deliverables, and level of strategic involvement required. Businesses are encouraged to discuss their goals with agencies directly to obtain accurate proposals.
            </p>
          </Section>

          <Section
            id="turning-search-visibility-into-sustainable-business-growth"
            title="Turning Search Visibility Into Sustainable Business Growth"
          >
            <p className="section-phara">
              Choosing an SEO partner is not just about improving rankings, it’s about building a long-term organic growth engine for your business.
            </p>
            <p className="section-phara">
              Search visibility influences how customers discover your brand, evaluate your credibility, and ultimately decide whether to engage with your products or services.
            </p>
            <p className="section-phara">
              The most effective SEO strategies combine multiple elements: technical optimization, content authority, user experience improvements, and consistent performance monitoring.
            </p>
            <p className="section-phara">
              When these components work together, search traffic becomes more than just website visits, it becomes a reliable source of qualified leads and business opportunities.
            </p>
            <p className="section-phara">
              For companies operating in competitive industries, the difference between average SEO and strategic SEO can be significant.
            </p>
            <p className="section-phara">
              A well-executed SEO framework helps businesses capture high-intent searches, strengthen brand authority, and build digital assets that continue to generate visibility long after campaigns begin.
            </p>
            <p className="section-phara">
              At this stage, many organizations begin looking beyond basic service providers and start evaluating partners who can integrate SEO into a broader digital growth strategy.
            </p>
            <p className="section-phara">
              Working with an experienced team that understands search behavior, content ecosystems, and technical optimization can accelerate the journey from visibility to measurable business outcomes.
            </p>
            <p className="section-phara">
              Businesses exploring long-term digital growth often evaluate agencies that combine SEO expertise with content strategy, multilingual marketing, and performance-driven campaigns. For brands seeking a partner capable of delivering that integrated approach, working with the{" "}
              <Link
                href="https://www.ayatiworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                best digital marketing agency in Chennai
              </Link>{" "}
              can provide the strategic foundation needed to transform search visibility into sustained growth.
            </p>
            <p className="section-phara">
              Ultimately, the right SEO partner is one that understands your industry, communicates strategy transparently, and focuses on building organic momentum that compounds over time.
            </p>
          </Section>

          {/* FAQ SECTION */}
          <Section id="faq" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        {/* RIGHT: Categories */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <RightSidebarCategories />
        </aside>
      </section>

      {/* Bottom: Related Posts */}
      <section className="mx-auto section-container px-4 sm:px-6 pb-14">
        {/* <RelatedPostsSection posts={relatedPosts} /> */}
        <RelatedPostsFromData posts={relatedPosts} />
      </section>
    </main>
  );
}

/* ---------- Components ---------- */
function WhatsInside({ items }) {
  const [activeId, setActiveId] = React.useState(items?.[0]?.id || "");

  React.useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: [0, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  React.useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActiveId(id);
    };
    window.addEventListener("hashchange", onHash, { passive: true });
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
      <nav
        className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
        aria-label="Table of contents"
      >
        <div className="border-b border-slate-200 bg-slate-50 px-3 py-3 text-2xl section-title">
          What’s Inside
        </div>

        <ul className="max-h-[70vh] overflow-y-auto p-3 pr-2">
          {items.map((it) => {
            const active = activeId === it.id;
            const isMain = it.level === 1;

            return (
              <li key={it.id} className="relative">
                <span
                  aria-hidden
                  className={[
                    "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r transition-colors",
                    active ? "bg-primary" : "bg-transparent",
                  ].join(" ")}
                />

                <a
                  href={`#${it.id}`}
                  onClick={(e) => handleClick(e, it.id)}
                  className={[
                    "block rounded pr-2 py-2 transition-colors",
                    isMain ? "pl-3" : "pl-7",
                    active
                      ? "bg-slate-50 text-primary font-primary"
                      : "text-slate-700 font-secondary hover:bg-slate-50 hover:text-secondary",
                    isMain ? "text-[15px]" : "text-[13.5px]",
                  ].join(" ")}
                  aria-current={active ? "true" : undefined}
                >
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

function CategoriesCard({ items }) {
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <div className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xl section-title">
        Categories
      </div>
      <div className="p-3">
        <ul className="space-y-1 text-lg">
          {items.map((c) => {
            const active = isActive(c.href);
            return (
              <li key={c.text}>
                <Link
                  href={c.href}
                  className={[
                    "block rounded px-3 py-2 transition-colors",
                    active
                      ? "text-primary text-xl font-primary"
                      : "text-black font-secondary text-lg hover:bg-blue-50",
                  ].join(" ")}
                >
                  {c.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* HERO BANNER */
function SplitHeroBanner({
  href = "#",
  imageSrc,
  imageAlt,
  category,
  title,
  author,
  updatedAt,
  readMins,
  post = null,
}) {
  const shareUrl =
    typeof window !== "undefined" ? window.location.origin + href : href;
  const shareTitle = Array.isArray(title) ? title.join(" ") : title;

  return (
    <div
      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      aria-label={`Read: ${shareTitle}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <Link
            href={href}
            aria-label={`Read: ${shareTitle}`}
            className="block"
          >
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-[420px]">
              <Image width={800} height={800}
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 lg:block group-hover:opacity-100">
                <div className="absolute inset-0 backdrop-blur-[1.5px]" />
              </div>
            </div>
          </Link>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/15 to-transparent lg:block" />
        </div>

        {/* Right: Content panel */}
        <div
          className="relative isolate px-5 py-6 text-white sm:px-8 sm:py-10 flex flex-col"
          style={{
            backgroundImage: "linear-gradient(135deg,#0A4991 0%,#0A4991 100%)",
          }}
        >
          <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

          {/* TOP CONTENT */}
          <div className="flex-1">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {category}
            </div>

            <h2 className="mt-4 section-title text-left leading-[1.08] text-white">
              {Array.isArray(title)
                ? title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))
                : title}
            </h2>
          </div>

          {/* BOTTOM META - aligned row: author | meta | share */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              {/* Author */}
              <Link
                href={`/author/${author.slug}`}
                aria-label={`View ${author.name}'s author page`}
                className="relative z-[1] block rounded-md transition hover:opacity-95"
              >
                <div className="flex items-center gap-3">
                  <Image width={800} height={800}
                    src={author.avatar}
                    alt={author.name}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <div className="font-primary text-xl hover:underline leading-tight">
                      {author.name}
                    </div>
                    {author.role && (
                      <div className="text-sm font-secondary text-slate-300/85 truncate">
                        {author.role}
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              {/* Vertical divider */}
              <Bar />

              {/* Meta */}
              <div className="text-sm text-slate-100/90">
                <div className="font-primary text-base">{updatedAt}</div>
                <div className="text-xs font-secondary">Last updated</div>
              </div>

              <div
                className="hidden sm:block h-6 w-px bg-white/20 mx-3"
                aria-hidden="true"
              />

              <div className="text-sm text-slate-100/90">
                <div className="font-primary font-medium text-base">
                  {readMins} Min
                </div>
                <div className="text-xs font-secondary">Read</div>
              </div>
            </div>

            {/* Share buttons placed on the right of meta - LARGE CTA */}
            <div className="z-[2] flex items-center">
              <ShareButtons
                slug={buildHref(post?.slug)}
                post={post}
                title={shareTitle}
                variant="large" // optional prop to style button inside ShareButtons
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareButtons({
  url = "",
  slug = "",
  post = null,
  title = "",
  domain = "",
}) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const containerRef = React.useRef(null);
  const [absoluteUrl, setAbsoluteUrl] = React.useState(url || "");

  // build absolute URL on client or from domain prop
  React.useEffect(() => {
    if (url) {
      setAbsoluteUrl(url);
      return;
    }
    const base =
      domain || (typeof window !== "undefined" ? window.location.origin : "");
    // prefer passed slug (which should already include /blogs/), otherwise fall back to post
    const candidate = slug || (post && buildHref(post.slug)) || "";
    if (!candidate) return;
    const path = candidate.startsWith("/") ? candidate : `/${candidate}`;
    if (base) setAbsoluteUrl(base + path);
    else setAbsoluteUrl(path);
  }, [url, slug, post, domain]);

  const encodedUrl = encodeURIComponent(absoluteUrl || "");
  const encodedTitle = encodeURIComponent(
    title ||
    (post && post.title) ||
    (typeof document !== "undefined" ? document.title : ""),
  );

  // close on outside click / Esc
  React.useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const openPopup = (shareUrl, preferSameWindow = false) => {
    try {
      const w = 700;
      const h = 520;
      const left = window.screenX + (window.innerWidth - w) / 2;
      const top = window.screenY + (window.innerHeight - h) / 2;
      if (preferSameWindow) {
        window.location.href = shareUrl;
      } else {
        window.open(
          shareUrl,
          "share-window",
          `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`,
        );
      }
    } catch (e) {
      window.open(shareUrl, "_blank", "noopener");
    } finally {
      setOpen(false);
    }
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 
             text-base font-primary text-white backdrop-blur-md 
             hover:bg-white/30 transition"
      >
        <FiShare2 className="h-6 w-6 text-white" />
        <span>Share</span>
      </button>

      <div
        className={[
          "absolute right-0 mt-2 w-auto rounded-md border bg-white shadow-lg ring-1 ring-black/5 transition-all",
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1",
        ].join(" ")}
        style={{
          transitionProperty: "opacity, transform",
          padding: open ? "8px" : "0",
        }}
        aria-hidden={!open}
      >
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <button
            onClick={() =>
              openPopup(
                `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on Facebook"
            title="Facebook"
          >
            <FaFacebookF className="h-4 w-4 text-slate-700" />
          </button>

          {/* Twitter */}
          <button
            onClick={() =>
              openPopup(
                `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on Twitter"
            title="Twitter"
          >
            <FaXTwitter className="h-4 w-4 text-slate-700" />
          </button>

          {/* LinkedIn */}
          <button
            onClick={() =>
              openPopup(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn className="h-4 w-4 text-slate-700" />
          </button>

          {/* WhatsApp */}
          <button
            onClick={() =>
              openPopup(
                `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
                true,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp className="h-4 w-4 text-slate-700" />
          </button>

          {/* Telegram */}
          {/* <button
            onClick={() =>
              openPopup(
                `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
                true
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on Telegram"
            title="Telegram"
          >
            <FaTelegramPlane className="h-4 w-4 text-slate-700" />
          </button> */}

          {/* Copy link */}
          <button
            onClick={onCopy}
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition relative"
            aria-label="Copy link"
            title="Copy link"
          >
            <FiCopy className="h-4 w-4 text-slate-700" />
            <span className="text-sm text-slate-700 hidden sm:inline">
              Copy
            </span>

            <span
              role="status"
              aria-live="polite"
              className={[
                "absolute -bottom-7 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs shadow-sm",
                copied ? "visible opacity-100" : "invisible opacity-0",
              ].join(" ")}
              style={{
                background: "rgba(34,34,34,0.9)",
                color: "white",
                transition: "opacity 180ms ease",
              }}
            >
              {copied ? "Copied!" : ""}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <span
      className="mx-1 hidden h-6 w-px bg-white/30 sm:inline-block"
      aria-hidden="true"
    />
  );
}

/* TOC items – UPDATED to match your 14 points */
/* TOC items – Updated for AI Affiliate Marketing Blog */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "why-chennai-has-become-a-strong-seo-talent-hub",
    level: 1,
    label: "Why Chennai Has Become a Strong SEO Talent Hub",
  },
  {
    id: "how-brands-should-evaluate-an-seo-agency-in-chennai",
    level: 1,
    label: "How Brands Should Evaluate an SEO Agency in Chennai",
  },
  {
    id: "strategic-depth-and-search-intent-understanding",
    level: 1,
    label: "Strategic Depth and Search Intent Understanding",
  },
  {
    id: "technical-seo-capability",
    level: 1,
    label: "Technical SEO Capability",
  },
  {
    id: "content-driven-seo-strategy",
    level: 1,
    label: "Content-Driven SEO Strategy",
  },
  {
    id: "backlink-strategy-and-authority-building",
    level: 1,
    label: "Backlink Strategy and Authority Building",
  },
  {
    id: "data-transparency-and-reporting",
    level: 1,
    label: "Data Transparency and Reporting",
  },
  {
    id: "local-seo-expertise",
    level: 1,
    label: "Local SEO Expertise",
  },
  {
    id: "how-we-curated-the-seo-agencies-in-chennai",
    level: 1,
    label: "How We Curated the SEO Agencies in Chennai",
  },
  {
    id: "market-presence-and-credibility",
    level: 1,
    label: "Market Presence and Credibility",
  },
  {
    id: "service-depth-and-seo-capability",
    level: 1,
    label: "Service Depth and SEO Capability",
  },
  {
    id: "industry-exposure",
    level: 1,
    label: "Industry Exposure",
  },
  {
    id: "top-10-seo-agencies-in-chennai-a-comparative-overview",
    level: 1,
    label: "Top 10 SEO Agencies in Chennai",
  },
  {
    id: "top-10-seo-agencies-in-chennai-quick-comparison-guide",
    level: 1,
    label: "Quick Comparison Guide",
  },
  {
    id: "how-to-choose-the-right-seo-agency-for-your-business",
    level: 1,
    label: "How to Choose the Right SEO Agency",
  },
  {
    id: "understanding-the-different-types-of-seo-services",
    level: 1,
    label: "Understanding SEO Services",
  },
  {
    id: "pricing-intelligence-what-seo-services-typically-cost-in-chennai",
    level: 1,
    label: "Pricing Intelligence",
  },
  {
    id: "turning-search-visibility-into-sustainable-business-growth",
    level: 1,
    label: "Turning Search Visibility Into Growth",
  },
  {
    id: "faq",
    level: 1,
    label: "Frequently Asked Questions",
  },
];

/* Right rail categories */
const rightCategories = [
  { text: "SEO Services", href: "/blogs/seo" },
  {
    text: "Digital Marketing Services",
    href: "/blogs/digital-marketing-services",
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <h2 className="section-title mb-4 text-left text-3xl">
        <em>
          When Rankings Become Revenue: How Brands Choose SEO Agencies
        </em>
      </h2>

      <p className="section-phara">
        Search rankings used to be treated like vanity metrics.
      </p>
      <p className="section-phara">
        A business would celebrate appearing on the first page of Google without asking the most important question: Is that visibility actually bringing customers?
      </p>
      <p className="section-phara">
        That mindset has evolved. Today, brands understand that search visibility is not just about rankings, it’s about <strong>revenue-driven discovery</strong>.
      </p>
      <p className="section-phara">
        When the right audience finds a brand at the exact moment of intent, rankings quietly transform into leads, enquiries, bookings, and purchases.
      </p>
      <p className="section-phara">
        This shift is exactly why businesses actively research the <strong>Top 10 SEO Agencies in Chennai</strong> before committing to a long-term SEO partnership.
      </p>
      <p className="section-phara">
        They are no longer looking for agencies that promise “more traffic.” They want partners who can engineer <strong>qualified organic growth</strong>.
      </p>
      <p className="section-phara">
        The difference between traffic and qualified traffic is enormous. A website may receive thousands of visits from broad keywords, but if those visitors have no purchase intent, the numbers remain cosmetic.
      </p>
      <p className="section-phara">
        Effective SEO focuses on identifying the search intent behind queries, whether someone is researching, comparing, or ready to take action.
      </p>
      <p className="section-phara">
        Agencies that understand this nuance build strategies that attract users who are already closer to making a decision.
      </p>
      <p className="section-phara">
        Consider a SaaS company trying to generate inbound leads. Ranking for a broad term like “software solutions” might produce high traffic but low conversion.
      </p>
      <p className="section-phara">
        Ranking for targeted queries such as “best CRM software for small businesses” attracts users who are actively evaluating solutions.
      </p>
      <p className="section-phara">
        The difference lies in <strong>intent mapping</strong>, and this is where experienced SEO agencies prove their value.
      </p>
      <p className="section-phara">
        The same principle applies to local businesses.
      </p>
      <p className="section-phara">
        A healthcare clinic may receive visits from informational keywords like “dental hygiene tips,” but the real opportunity lies in ranking for queries like “best dental clinic in Chennai” or “dentist near me.”
      </p>
      <p className="section-phara">
        These searches come from people who are ready to book an appointment.
      </p>
      <p className="section-phara">
        The role of an SEO agency is to identify these opportunities and build content, technical structure, and authority signals that help the website appear exactly where those high-intent searches happen.
      </p>
      <p className="section-phara">
        This is why the conversation around SEO has matured. Modern brands evaluating the {" "} <Link
          href="https://www.ayatiworks.com/digital-marketing-services/seo"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Top 10 SEO Agencies in Chennai
        </Link>{" "} are not only looking at service packages or pricing, they are assessing strategic capability.
      </p>
      <p className="section-phara">
        They want to know whether the agency understands technical SEO, content ecosystems, topic authority, local search visibility, and the evolving role of AI-driven search results.
      </p>
      <p className="section-phara">
        Choosing the right SEO partner is ultimately about alignment. The agency should understand the brand’s industry, competitive landscape, and long-term growth goals.
      </p>
      <p className="section-phara">
        When the partnership is built on strategy rather than shortcuts, rankings stop being isolated metrics and start functioning as <strong>predictable pipelines for organic growth</strong>.
      </p>
      <p className="section-phara">
        In that sense, the best SEO agencies do more than optimize pages; they help businesses turn search visibility into sustainable revenue channels.
      </p>



    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mt-8 text-left text-2xl section-title">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: "1.	What does an SEO agency in Chennai do?",
      a: `An SEO agency helps businesses improve their visibility on search engines like Google. 
This typically includes keyword research, technical website optimization, content strategy, backlink development, and performance tracking. 
The goal is to increase organic traffic, improve search rankings, and attract potential customers who are actively searching for relevant products or services.

`,
    },
    {
      q: "2.	How long does SEO take to show results?",
      a: `SEO is a long-term strategy and typically takes three to six months to start showing measurable improvements in rankings and traffic. 
The timeline depends on factors such as website age, competition level, technical health of the website, and the consistency of content and optimization efforts.
`,
    },
    {
      q: "3.	How much do SEO services cost in Chennai?",
      a: `SEO services in Chennai usually range between ₹40,000 and ₹3,00,000 per month depending on the scope of work. 
Small businesses may require basic optimization and local SEO, while larger companies often invest in advanced technical SEO, content development, and link-building strategies.`,
    },
    {
      q: "4.	How do I choose the right SEO agency?",
      a: `The right SEO agency should demonstrate strong technical expertise, a clear content strategy, transparent reporting, and proven experience in handling similar industries. 
Businesses should also evaluate the agency’s communication approach, case studies, and ability to align SEO strategy with business objectives.
`,
    },
    {
      q: "5.	Can SEO guarantee first-page rankings on Google?",
      a: `No reputable SEO agency can guarantee first-page rankings because search engine algorithms constantly evolve. 
Instead, reliable agencies focus on improving website quality, content relevance, and domain authority to increase the probability of higher rankings over time.

`,
    },
    {
      q: "6.	Why is SEO important for businesses?",
      a: `SEO helps businesses attract customers who are actively searching for their products or services online. 
Unlike paid advertising, organic search visibility can generate consistent traffic over time, making SEO one of the most sustainable digital marketing channels.
`,
    },
    {
      q: "7.	What industries benefit most from SEO?",
      a: `Almost every industry can benefit from SEO, but it is particularly effective for ecommerce, SaaS companies, healthcare providers, educational institutions, real estate firms, and local service businesses that rely on online discovery to generate leads and customers.`,
    },
    // {
    //   q: "",
    //   a: ``,
    // },

  ];

  const [openIndex, setOpenIndex] = React.useState(0);
  const toggle = (i) => setOpenIndex((curr) => (curr === i ? -1 : i));

  return (
    <div className="mx-auto w-full space-y-3">
      {faqs.map((item, i) => (
        <FAQItem
          key={i}
          index={i}
          open={openIndex === i}
          onToggle={() => toggle(i)}
          q={item.q}
          a={item.a}
        />
      ))}
    </div>
  );
}

function FAQItem({ q, a, open, onToggle, index }) {
  const bodyId = `faq-panel-${index}`;
  return (
    <div
      className={[
        "overflow-hidden rounded-lg",
        "shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-slate-100",
        "transition-shadow duration-200",
      ].join(" ")}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={onToggle}
        className={[
          "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
          "transition-colors duration-200",
          open
            ? "bg-white text-primary font-primary"
            : "bg-white text-primary font-primary hover:bg-slate-50",
        ].join(" ")}
      >
        <h3 className="text-xl leading-5">{q}</h3>
        <span
          className={[
            "inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm",
            "transition-colors duration-200",
          ].join(" ")}
          aria-hidden="true"
        >
          {open ? (
            <FiMinus className="h-3.5 w-3.5" />
          ) : (
            <FiPlus className="h-3.5 w-3.5" />
          )}
        </span>
      </button>

      <div
        id={bodyId}
        className={[
          "px-4 transition-all duration-200 ease-out",
          open ? "max-h-64 py-3" : "max-h-0 py-0",
        ].join(" ")}
      >
        <p className="font-secondary text-lg text-black/80 whitespace-pre-line">
          {a}
        </p>
      </div>
    </div>
  );
}



