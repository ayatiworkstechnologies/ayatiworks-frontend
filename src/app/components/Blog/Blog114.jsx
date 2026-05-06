"use client";

import React from "react";
import { usePathname } from "next/navigation";

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
import Image from "next/image";

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage114() {
  const post = POSTS.find((p) => p.id === 114) || POSTS[0];

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
            avatar: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/author/daniel.png",
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
              The Future of Ecommerce Is Agentic: Why AI-Enabled Shopify
              Development Is the Next Growth Lever for Chennai Businesses
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
            id="commerce-is-changing-from-browsing-to-predictive-buying"
            title="1. Commerce Is Changing: From Browsing to Predictive Buying"
          >
            <p className="section-phara">
              For nearly two decades, ecommerce has followed a familiar pattern.
              A customer searches, lands on a website, browses categories,
              compares products, reads reviews, and eventually adds something to
              the cart.
            </p>
            <p className="section-phara">
              Every optimization tactic, from SEO to paid ads to CRO, has been
              designed around this browsing behavior.
            </p>
            <p className="section-phara">That model is now evolving.</p>
            <p className="section-phara">
              Predictive buying replaces manual exploration with intelligent
              assistance. Instead of navigating menus and filters, customers
              increasingly rely on AI systems to interpret intent.
            </p>
            <p className="section-phara">
              These systems analyze search history, purchase behavior,
              contextual signals, location, and even time of day to surface
              relevant product recommendations before the customer actively
              hunts for them.
            </p>
            <p className="section-phara">
              This fundamentally shifts the role of a Shopify store.
            </p>
            <p className="section-phara">
              It is no longer just a digital storefront. It becomes a structured
              data engine feeding AI ecosystems.
            </p>
            <p className="section-phara">
              Product titles, descriptions, tags, reviews, pricing structures,
              and inventory logic must be machine-readable and strategically
              organized.
            </p>
            <p className="section-phara">
              If not, AI recommendation systems cannot accurately surface those
              products.
            </p>
            <p className="section-phara">
              For businesses aiming to stay competitive, this requires more than
              design upgrades.
            </p>
            <p className="section-phara">
              It requires working with an{" "}
              <Link
                href="/web-ecommerce/shopify-development"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                AI-Enabled Shopify Development Company in Chennai
              </Link>{" "}
              that understands how to build structured, intelligent ecommerce
              infrastructure aligned with predictive commerce systems.
            </p>
            <p className="section-phara">
              Traditional ecommerce rewarded visibility. Predictive commerce
              rewards structured intelligence.
            </p>
            <p className="section-phara">
              The brands that adapt early will not simply rank.
            </p>
            <p className="section-phara">They will be recommended.</p>

            {/* <p className="section-phara">  </p> */}
          </Section>

          {/* STEP 1 */}
          <Section
            id="what-is-agentic-ecommerce-and-why-it-matters"
            title="2. What Is Agentic Ecommerce and Why It Matters"
          >
            <p className="section-phara ">
              Agentic ecommerce sounds complex, but the idea is straightforward.
            </p>
            <p className="section-phara">
              “Agentic” refers to AI systems that act as agents on behalf of
              users. Instead of customers manually evaluating dozens of options,
              AI tools perform the analysis, narrow the choices, and sometimes
              even execute transactions.
            </p>
            <p className="section-phara">
              Think of it as delegation in commerce.
            </p>
            <p className="section-phara">
              A user might tell an AI assistant: “Find me the best protein
              supplement under ₹3,000 with high ratings and fast delivery.”
            </p>
            <p className="section-phara">
              The AI scans data, filters products, compares reviews, evaluates
              pricing, and returns a shortlist.
            </p>
            <p className="section-phara">
              In some ecosystems, it can even complete the checkout process.
            </p>
            <p className="section-phara">That changes how brands compete.</p>
            <p className="section-phara">
              {" "}
              In a traditional ecommerce environment, design, persuasive copy,
              and visual appeal influence human decisions.
            </p>
            <p className="section-phara">
              In agentic commerce, structured data, transparency, pricing logic,
              and performance metrics influence AI decisions.{" "}
            </p>
            <p className="section-phara">
              This means Shopify stores must be built not just for humans, but
              also for algorithms.{" "}
            </p>
            <p className="section-phara">
              Businesses working with experienced Shopify experts in Chennai are
              beginning to understand this shift.{" "}
            </p>
            <p className="section-phara">
              {" "}
              The competitive advantage no longer lies only in visual design or
              theme customization.{" "}
            </p>
            <p className="section-phara">
              {" "}
              It lies in how intelligently product data is structured, how APIs
              communicate with external systems, and how seamlessly automation
              integrates across the buying journey.
            </p>
            <p className="section-phara">
              If product attributes are incomplete, if reviews are unstructured,
              if schema markup is missing, AI systems cannot accurately assess
              the offering.{" "}
            </p>
            <p className="section-phara">
              Visibility declines, not because the product lacks value, but
              because the infrastructure lacks intelligence.{" "}
            </p>
            <p className="section-phara">
              Agentic ecommerce rewards clarity, data integrity, and
              automation.{" "}
            </p>
            <p className="section-phara">
              It moves commerce from persuasion to precision.{" "}
            </p>
            {/* <p className="section-phara"> </p>
            <p className="section-phara"> </p> */}
          </Section>

          {/* STEP 2 */}
          <Section
            id="how-ai-is-reshaping-the-shopify-ecosystem"
            title="3. How AI Is Reshaping the Shopify Ecosystem"
          >
            <p className="section-phara">
              Shopify began as a powerful platform for building online stores
              quickly and efficiently. Today, it is evolving into a flexible
              commerce engine capable of integrating artificial intelligence
              across multiple layers.
            </p>
            <p className="section-phara">
              {" "}
              AI within the Shopify ecosystem touches everything-from product
              recommendations and dynamic pricing to customer segmentation and
              marketing automation.
            </p>
            <p className="section-phara">
              {" "}
              Search functionality, once keyword-based, is becoming
              intent-driven. Recommendation engines analyze behavior patterns in
              real time. Email campaigns are increasingly automated through
              predictive triggers. Inventory forecasting can now use machine
              learning to anticipate demand fluctuations.{" "}
            </p>
            <p className="section-phara">
              {" "}
              But the transformation goes deeper.
            </p>
            <p className="section-phara">
              {" "}
              AI is influencing how Shopify stores are discovered externally.
              Search engines use AI-driven ranking systems. Paid advertising
              platforms rely heavily on machine learning optimization. Social
              commerce platforms integrate predictive feeds powered by
              behavioral data.
            </p>
            <p className="section-phara">
              This is where a strategic Shopify development company Chennai
              businesses rely on must evolve beyond template implementation.
              Development can no longer operate in isolation from marketing
              intelligence. Store architecture, analytics tracking, conversion
              optimization, and AI automation must work as a unified system.
            </p>
            <p className="section-phara">
              An AI-enabled Shopify store integrates structured product data,
              conversion tracking frameworks, predictive analytics dashboards,
              and automated marketing workflows. It ensures that SEO,
              performance advertising, retention campaigns, and customer
              experience operate within one intelligent growth engine.
            </p>
            <p className="section-phara">
              The future Shopify store is not just responsive and
              mobile-friendly.
            </p>
            <p className="section-phara">
              It is adaptive, predictive, and continuously learning from
              customer behavior.
            </p>
            <p className="section-phara">
              Here we transition from infrastructure to growth mechanics. This
              is where development meets revenue.
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="from-traffic-funnels-to-intelligent-commerce-systems"
            title="4. From Traffic Funnels to Intelligent Commerce Systems"
          >
            <p className="section-phara">
              For years, digital growth strategies revolved around a simple
              formula: drive traffic, optimize conversions, scale ads.
            </p>
            <p className="section-phara">
              The funnel was linear. Awareness at the top, consideration in the
              middle, conversion at the bottom.
            </p>
            <p className="section-phara">
              But AI disrupts that neat structure.
            </p>
            <p className="section-phara">
              When predictive algorithms begin influencing product discovery,
              and machine learning systems determine ad delivery, audience
              targeting, and even messaging variations, the traditional funnel
              starts to dissolve.
            </p>
            <p className="section-phara">
              The journey becomes dynamic rather than sequential.
            </p>
            <p className="section-phara">
              Instead of pushing users through a rigid path, intelligent
              commerce systems adapt in real time.
            </p>
            <p className="section-phara">
              A returning customer doesn’t see the same homepage as a first-time
              visitor. Ad creatives evolve automatically based on behavioral
              signals. Email flows trigger based on predictive lifetime value
              modeling. Product recommendations adjust dynamically according to
              browsing depth, cart patterns, and historical purchase behavior.
            </p>
            <p className="section-phara">
              This is not optimization in the old sense. It is continuous
              algorithmic refinement.
            </p>
            <p className="section-phara">
              That is why businesses investing in{" "}
              <Link
                href="/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Digital Marketing Services in Chennai
              </Link>{" "}
              must rethink what “marketing” actually means in an AI-driven
              ecosystem.
            </p>
            <p className="section-phara">
              It is no longer about running isolated SEO campaigns or launching
              performance ads independently. It is about building interconnected
              systems where data flows seamlessly between Shopify, analytics
              platforms, ad networks, CRM tools, and automation engines.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              SEO must be structured for AI interpretation.
            </h3>
            <p className="section-phara">
              Paid campaigns must leverage machine learning signals effectively.
            </p>
            <p className="section-phara">
              Retention marketing must be automated through predictive
              segmentation.
            </p>
            <p className="section-phara">
              Conversion rate optimization must integrate behavioral
              intelligence.
            </p>
            <p className="section-phara">
              In other words, marketing is no longer a promotional layer placed
              on top of ecommerce. It becomes embedded within the store’s
              architecture.
            </p>
            <p className="section-phara">
              An intelligent commerce system unifies development, analytics,
              automation, and acquisition under one strategy. It ensures that
              every click, scroll, and purchase contributes to a learning model
              that improves performance over time.
            </p>
            <p className="section-phara">
              Businesses that continue operating with fragmented funnels will
              struggle in this environment. Those that integrate AI-driven
              marketing with Shopify infrastructure will create compounding
              growth loops.
            </p>
            <p className="section-phara">
              Commerce is no longer about pushing traffic through a pipe.
            </p>
            <p className="section-phara">
              It is about designing systems that think, learn, and optimize
              continuously.
            </p>
          </Section>

          {/* STEP 4 */}
          <Section
            id="ai-driven-personalisation-the-new-conversion-engine"
            title="5. AI-Driven Personalisation: The New Conversion Engine"
          >
            <p className="section-phara">
              Personalisation used to mean adding a customer’s first name to an
              email.
            </p>
            <p className="section-phara">
              Today, it means reshaping the entire shopping experience in real
              time.
            </p>
            <p className="section-phara">
              AI-driven personalisation analyzes browsing behavior, purchase
              history, device usage, location signals, and engagement patterns
              to dynamically modify product recommendations, pricing visibility,
              content hierarchy, and even promotional messaging.
            </p>
            <p className="section-phara">
              Two users can land on the same Shopify store and experience
              completely different journeys, because the system adapts to
              predicted intent.
            </p>
            <p className="section-phara">
              This matters because attention is scarce. Customers no longer
              tolerate generic experiences. If a store does not immediately
              align with their needs, they exit.
            </p>
            <p className="section-phara">AI changes that equation.</p>
            <p className="section-phara">
              Recommendation engines powered by behavioral data increase average
              order value by intelligently suggesting complementary products.
            </p>
            <p className="section-phara">
              Predictive upselling reduces friction by presenting relevant
              upgrades at the right moment.
            </p>
            <p className="section-phara">
              Dynamic homepage sections prioritize categories based on user
              interest probability rather than static merchandising logic.
            </p>
            <p className="section-phara">The impact compounds over time.</p>
            <p className="section-phara">
              The more data the system gathers, the more accurate it becomes.
              Conversion rates improve not because the copy changes, but because
              the relevance improves.
            </p>
            <p className="section-phara">
              For Shopify brands, AI-driven personalisation is no longer
              optional. It is the engine that transforms traffic into measurable
              growth.
            </p>
            <p className="section-phara">Relevance is the new persuasion.</p>
          </Section>
          <Section
            id="structured-data-apis-and-ai-visibility"
            title="6. Structured Data, APIs, and AI Visibility"
          >
            <p className="section-phara">
              If personalisation drives conversion, structured data drives
              discoverability.
            </p>
            <p className="section-phara">
              AI systems cannot “understand” products the way humans do.
            </p>
            <p className="section-phara">
              They rely on structured information, clear product attributes,
              standardized metadata, schema markup, availability signals,
              pricing logic, and categorized specifications.
            </p>
            <p className="section-phara">
              When this data is properly organized within a Shopify store, AI
              tools can interpret it accurately.
            </p>
            <p className="section-phara">
              That increases visibility across search engines, recommendation
              systems, conversational interfaces, and shopping aggregators.
            </p>
            <p className="section-phara">
              Without structured data, even a high-quality product risks
              invisibility in AI-driven environments.
            </p>

            <h3 className="section-title text-2xl text-secondary text-left my-5">
              APIs (Application Programming Interfaces) also play a critical
              role.
            </h3>
            <p className="section-phara">
              APIs allow different systems, payment gateways, CRMs, analytics
              platforms, ad networks, automation tools, to communicate
              seamlessly.
            </p>
            <p className="section-phara">
              In an AI-enabled ecosystem, this connectivity ensures that data
              flows continuously between marketing and commerce layers.
            </p>
            <p className="section-phara">
              For example, predictive audience segmentation from ad platforms
              can inform on-site personalization.
            </p>
            <p className="section-phara">
              Purchase data can automatically update email automation logic.
              Inventory updates can influence campaign optimization in real
              time.
            </p>
            <p className="section-phara">
              This interconnected architecture is what allows AI to operate
              effectively.
            </p>
            <p className="section-phara">
              Visibility in the future will not depend solely on keywords.
            </p>
            <p className="section-phara">
              It will depend on how cleanly and intelligently your data is
              structured.
            </p>
          </Section>
          <Section
            id="conversational-commerce-and-smart-checkout-systems"
            title="7. Conversational Commerce and Smart Checkout Systems"
          >
            <p className="section-phara">
              The shopping interface itself is evolving.
            </p>
            <p className="section-phara">
              Instead of navigating menus and filters, customers increasingly
              interact through conversational inputs, chat-based assistants,
              voice commands, or AI-driven recommendation prompts.
            </p>
            <p className="section-phara">
              Conversational commerce reduces friction by simplifying discovery
              into dialogue.
            </p>
            <p className="section-phara">
              Rather than browsing ten product pages, a user can ask a system to
              compare options, highlight differences, and recommend the best
              fit.
            </p>
            <p className="section-phara">
              This shortens the decision cycle dramatically.
            </p>
            <p className="section-phara">
              Smart checkout systems amplify this effect.
            </p>
            <p className="section-phara">
              AI can detect hesitation signals, such as repeated cart visits or
              abandoned checkout patterns, and trigger automated nudges. It can
              offer contextual incentives, adjust payment options, or surface
              trust elements dynamically.
            </p>
            <p className="section-phara">
              Fraud detection systems powered by machine learning also reduce
              transactional risk without adding customer friction.
            </p>
            <p className="section-phara">
              Voice-enabled ordering and reordering mechanisms further compress
              the path to purchase.
            </p>
            <p className="section-phara">
              For Shopify brands, this means the checkout process is no longer
              static. It becomes adaptive.
            </p>
            <p className="section-phara">
              Every interaction generates data. Every data point strengthens the
              system’s ability to predict behavior.
            </p>
            <p className="section-phara">
              The result is not just higher conversions.
            </p>
            <p className="section-phara">
              It is a smoother, faster, more intelligent buying journey that
              aligns with how modern consumers expect technology to behave.
            </p>
          </Section>

          <Section
            id="ai-in-digital-marketing-smarter-seo-smarter-ads-smarter-growth"
            title="8. AI in Digital Marketing: Smarter SEO, Smarter Ads, Smarter Growth"
          >
            <p className="section-phara">
              Artificial intelligence is not only transforming ecommerce
              architecture; it is redefining digital marketing execution itself.
            </p>
            <p className="section-phara">
              Search engines now rely heavily on AI-driven ranking systems that
              interpret intent, semantic relationships, and contextual
              relevance.
            </p>
            <p className="section-phara">
              Keyword stuffing no longer works. Content must align with meaning,
              authority, and structured clarity.
            </p>
            <p className="section-phara">
              SEO has shifted from optimizing for phrases to optimizing for
              understanding.
            </p>
            <p className="section-phara">
              Paid advertising has undergone an even more dramatic
              transformation.
            </p>
            <p className="section-phara">
              Platforms like Google and Meta operate on machine learning
              algorithms that automatically test creatives, optimize bidding
              strategies, and allocate budget based on predicted conversion
              probability.
            </p>
            <p className="section-phara">
              Manual micromanagement has given way to data-fed automation.
            </p>
            <p className="section-phara">
              But AI is only as powerful as the data it receives.
            </p>
            <p className="section-phara">
              When Shopify stores integrate accurate conversion tracking,
              customer lifecycle data, structured product feeds, and real-time
              performance analytics, advertising algorithms become more precise.
            </p>
            <p className="section-phara">
              Campaigns improve not because budgets increase, but because
              signals strengthen.
            </p>
            <p className="section-phara">
              Email marketing, retention campaigns, and audience segmentation
              also benefit. Predictive models can identify high-value customers
              before they make repeat purchases.
            </p>
            <p className="section-phara">
              Automated sequences can be triggered based on behavioral
              probability rather than static timelines.
            </p>
            <p className="section-phara">
              In this environment, digital marketing becomes less about
              guesswork and more about engineered growth.
            </p>
            <p className="section-phara">
              The brands that align development, data, and AI-driven marketing
              systems will scale sustainably. Those relying on fragmented
              tactics will struggle to compete.
            </p>
            <p className="section-phara">
              Growth now belongs to intelligence, not just investment.
            </p>
          </Section>
          <Section
            id="monetisation-in-the-age-of-ai-commerce"
            title="9. Monetisation in the Age of AI Commerce"
          >
            <p className="section-phara">
              AI introduces enormous opportunities, but it also shifts
              competitive dynamics.
            </p>
            <p className="section-phara">
              When recommendation engines and conversational systems influence
              purchasing decisions, brands must compete for algorithmic
              preference.
            </p>
            <p className="section-phara">
              That preference is influenced by clarity, pricing transparency,
              customer satisfaction metrics, structured data quality, and
              performance consistency.
            </p>
            <p className="section-phara">Trust becomes measurable.</p>
            <p className="section-phara">
              AI systems evaluate ratings, return rates, fulfillment speed, and
              engagement signals.
            </p>
            <p className="section-phara">
              Products with stronger data integrity gain higher recommendation
              probability. Poorly structured or inconsistent data can silently
              reduce visibility.
            </p>
            <p className="section-phara">
              This also changes monetisation strategy.
            </p>
            <p className="section-phara">
              Subscription models, loyalty ecosystems, predictive replenishment
              cycles, and automated cross-selling become more powerful when AI
              identifies repeat behavior patterns.
            </p>
            <p className="section-phara">
              Revenue no longer depends solely on acquiring new customers; it
              compounds through intelligent retention systems.
            </p>
            <p className="section-phara">
              However, businesses must remain cautious.
            </p>
            <p className="section-phara">
              Over-automation without transparency can erode trust. Customers
              value convenience, but they also value control.
            </p>
            <p className="section-phara">
              Ethical AI usage, clear data policies, honest pricing, authentic
              reviews, becomes critical.
            </p>
            <p className="section-phara">
              In AI commerce, revenue is amplified by intelligence but sustained
              by credibility.
            </p>
            <p className="section-phara">
              Long-term monetisation depends on balancing automation with
              authenticity.
            </p>
          </Section>
          <Section
            id="why-chennai-businesses-must-act-now"
            title="10. Why Chennai Businesses Must Act Now"
          >
            <p className="section-phara">
              Global commerce trends do not wait for regional readiness.
            </p>
            <p className="section-phara">
              As AI adoption accelerates across search engines, advertising
              platforms, and ecommerce ecosystems, businesses in Chennai face a
              strategic choice: adapt early or react late.
            </p>
            <p className="section-phara">The opportunity is significant.</p>
            <p className="section-phara">
              Chennai has a rapidly expanding digital economy, growing D2C
              brands, tech-savvy entrepreneurs, and increasing online consumer
              adoption.
            </p>
            <p className="section-phara">
              But competing in an AI-driven marketplace requires more than
              launching a Shopify store and running basic ads.
            </p>
            <p className="section-phara">
              It requires infrastructure designed for intelligence.
            </p>
            <p className="section-phara">
              Businesses must evaluate whether their ecommerce architecture
              supports structured data, predictive analytics, automated
              marketing workflows, and AI-driven optimization.
            </p>
            <p className="section-phara">
              They must assess whether their marketing strategy integrates
              seamlessly with development rather than operating in silos.
            </p>
            <p className="section-phara">
              Working with a forward-thinking{" "}
              <Link
                href="/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                digital marketing agency Chennai
              </Link>{" "}
              businesses trust can accelerate this transformation.
            </p>
            <p className="section-phara">
              The right partner does not merely build websites or run campaigns;
              it engineers growth systems that align AI, data, and commerce into
              one cohesive ecosystem.
            </p>
            <p className="section-phara">
              The window for proactive adaptation is narrowing.
            </p>
            <p className="section-phara">
              Brands that implement AI-enabled Shopify development and
              intelligent marketing systems today will build long-term
              competitive leverage.
            </p>
            <p className="section-phara">
              Those who delay may find themselves struggling for visibility in
              algorithm-driven marketplaces.
            </p>
            <p className="section-phara">
              The future of ecommerce will not be decided by who spends the
              most.
            </p>
            <p className="section-phara">
              It will be decided by who builds the smartest systems.
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
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "commerce-is-changing-from-browsing-to-predictive-buying",
    level: 1,
    label: "Commerce Is Changing",
  },
  {
    id: "what-is-agentic-ecommerce-and-why-it-matters",
    level: 1,
    label: "What Is Agentic Ecommerce",
  },
  {
    id: "how-ai-is-reshaping-the-shopify-ecosystem",
    level: 1,
    label: "How AI Is Reshaping Shopify",
  },
  {
    id: "from-traffic-funnels-to-intelligent-commerce-systems",
    level: 1,
    label: "From Funnels to Intelligent Systems",
  },
  {
    id: "ai-driven-personalisation-the-new-conversion-engine",
    level: 1,
    label: "AI-Driven Personalisation",
  },
  {
    id: "structured-data-apis-and-ai-visibility",
    level: 1,
    label: "Structured Data & AI Visibility",
  },
  {
    id: "conversational-commerce-and-smart-checkout-systems",
    level: 1,
    label: "Conversational Commerce",
  },
  {
    id: "ai-in-digital-marketing-smarter-seo-smarter-ads-smarter-growth",
    level: 1,
    label: "AI in Digital Marketing",
  },
  {
    id: "monetisation-in-the-age-of-ai-commerce",
    level: 1,
    label: "Monetisation in AI Commerce",
  },
  {
    id: "why-chennai-businesses-must-act-now",
    level: 1,
    label: "Why Chennai Businesses Must Act Now",
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
      <p className="section-title mb-4 text-left text-3xl">
        <em>
          Why AI Is Redefining How Customers Discover and Buy Products Online
        </em>
      </p>
      <p className="section-phara">Let’s be honest for a moment.</p>
      <p className="section-phara">
        If your e-commerce strategy still revolves around “getting more clicks,”
        you’re playing yesterday’s game.{" "}
      </p>
      <p className="section-phara">
        For years, digital growth meant driving traffic, optimizing landing
        pages, tweaking product descriptions, and running performance ads until
        the numbers turned green. It was a numbers game, impressions, CTR, ROAS,
        conversions. And for a long time, that worked beautifully.{" "}
        {/* <Link
          href="/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          digital marketing Chennai
        </Link> */}{" "}
      </p>
      <p className="section-phara">But something subtle has shifted.</p>
      <p className="section-phara">
        Customers are no longer just searching. They’re asking. They’re
        describing intent. They’re expecting systems to understand them.
      </p>
      <p className="section-phara ">
        Instead of typing “best formal shoes Chennai,” they might ask an AI
        assistant to recommend premium office footwear within a certain budget,
        compare materials, check reviews, and even complete the purchase.
      </p>
      <p className="section-phara">
        The interface is changing. The behaviour is changing.
      </p>
      <p className="section-phara">
        And behind the scenes, artificial intelligence is quietly mediating the
        decision-making process.
      </p>
      <p className="section-phara">
        {" "}
        This is where ecommerce moves into its next phase.
      </p>
      <p className="section-phara">
        {" "}
        AI is transforming shopping from a reactive activity into a predictive
        one. Rather than waiting for customers to browse, scroll, and filter,
        intelligent systems anticipate needs based on behavior, context,
        history, and patterns.{" "}
      </p>
      <p className="section-phara">
        {" "}
        The shopping cart is no longer just a digital basket. It’s becoming an
        intelligent layer that adapts in real time.{" "}
      </p>
      <p className="section-phara">
        {" "}
        That evolution introduces a powerful concept: agentic commerce.{" "}
      </p>
      <p className="section-phara">
        {" "}
        Agentic commerce refers to AI systems that act on behalf of consumers,
        curating options, narrowing choices, recommending alternatives, and
        sometimes even executing transactions.{" "}
      </p>
      <p className="section-phara">
        {" "}
        It’s not just personalization. It’s delegation. Consumers are gradually
        trusting intelligent systems to simplify complexity.
      </p>
      <p className="section-phara">
        {" "}
        For ecommerce brands, especially those operating on platforms like
        Shopify, this shift is not optional to acknowledge. It is
        foundational.{" "}
      </p>
      <p className="section-phara">
        {" "}
        If your store architecture is not structured in a way that AI systems
        can interpret product data, pricing logic, availability, reviews, and
        attributes, you risk losing visibility in AI-driven recommendation
        environments.{" "}
      </p>
      <p className="section-phara">
        {" "}
        If your digital marketing campaigns are not powered by predictive
        analytics and machine learning insights, you’re optimizing manually in a
        market that is becoming automated.{" "}
      </p>
      <p className="section-phara">
        {" "}
        This is particularly relevant for businesses in Chennai and across
        India. As AI adoption accelerates globally, local brands must build
        digital infrastructure that competes on intelligence, not just
        design.{" "}
      </p>
      <p className="section-phara">
        {" "}
        AI-enabled Shopify development goes beyond adding chatbots or installing
        plugins. It includes structured product data, intelligent recommendation
        engines, AI-powered search optimization, automated lifecycle marketing,
        predictive customer segmentation, and performance campaigns enhanced by
        machine learning.{" "}
      </p>
      <p className="section-phara">
        {" "}
        The businesses that understand this shift early will build stores that
        are not just visually appealing, but algorithmically discoverable.{" "}
      </p>
      <p className="section-phara">
        {" "}
        In the sections ahead, we’ll explore how AI is reshaping ecommerce
        infrastructure, what agentic shopping means for Shopify brands, and why
        businesses must align digital marketing and development under one
        intelligent growth strategy.{" "}
      </p>
      <p className="section-phara">
        {" "}
        Commerce is no longer just about being online.{" "}
      </p>
      <p className="section-phara">
        {" "}
        It’s about being intelligently integrated into the systems that now
        influence buying decisions.{" "}
      </p>
      {/* <p className="section-phara">      </p>
      <p className="section-phara">      </p> */}
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
      q: "What is AI-enabled Shopify development?",
      a: `AI-enabled Shopify development refers to building Shopify stores integrated with artificial intelligence tools such as predictive analytics, smart product recommendations, automated marketing workflows, and intelligent search optimization.
Unlike traditional development, AI-enabled stores use structured data, machine learning integrations, and behavioral tracking to personalize customer experiences and improve conversion rates. 
This approach ensures that the store is optimized not just for human visitors but also for AI-driven discovery systems and advertising algorithms.
`,
    },
    {
      q: " How does AI improve ecommerce conversion rates?",
      a: `AI improves ecommerce conversion rates by analyzing user behavior in real time and dynamically adjusting product recommendations, pricing displays, content layouts, and promotional triggers.
Machine learning models identify buying intent, predict customer preferences, and reduce decision fatigue by surfacing the most relevant options. This increases average order value, reduces cart abandonment, and enhances overall user experience through personalization and automation.
`,
    },
    {
      q: "Why is structured data important for AI-driven ecommerce?",
      a: `Structured data allows AI systems to accurately interpret product information such as price, availability, specifications, reviews, and categories.
Without proper schema markup and standardized product attributes, AI search engines and recommendation platforms cannot index or evaluate products effectively. 
Structured data improves visibility in AI-powered search results, conversational interfaces, and automated shopping feeds, making it essential for future-ready Shopify stores.
`,
    },
    {
      q: "What is agentic commerce in ecommerce?",
      a: `Agentic commerce is a model where AI systems act on behalf of customers to discover, compare, recommend, and sometimes complete purchases.
Instead of manually browsing multiple websites, customers delegate decisions to intelligent assistants that evaluate products based on defined criteria. 
This shifts ecommerce competition toward structured data quality, transparency, and algorithmic visibility rather than purely visual appeal.
`,
    },
    {
      q: "How does AI impact SEO for Shopify stores?",
      a: `AI impacts SEO by shifting focus from keyword density to semantic relevance, user intent alignment, and content authority.
Search engines now use machine learning to evaluate context, engagement signals, and structured data integrity. Shopify stores must implement technical SEO, optimized metadata, internal linking structures, and AI-readable product schemas to maintain strong rankings in evolving search environments.
`,
    },
    {
      q: "Can small businesses in Chennai benefit from AI-enabled ecommerce?",
      a: `Yes, small and mid-sized businesses in Chennai can significantly benefit from AI-enabled ecommerce by leveraging automation and predictive analytics to compete efficiently.
AI tools reduce manual workload, optimize ad spend, personalize customer journeys, and improve retention strategies. This allows growing brands to scale intelligently without requiring enterprise-level budgets.
`,
    },
    {
      q: "Why should businesses work with an AI-focused Shopify development partner?",
      a: `An AI-focused Shopify development partner ensures that ecommerce infrastructure, marketing automation, and data architecture are integrated into one cohesive growth system.
Instead of building a store and adding AI later, the development process embeds structured data, performance tracking, predictive marketing tools, and intelligent automation from the beginning. This future-proofs the business against rapidly evolving digital commerce trends.
`,
    },
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





