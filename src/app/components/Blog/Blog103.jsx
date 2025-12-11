"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import Script from "next/script";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { POSTS } from "../../lib/blogs-data";

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};

export default function AEOArticlePage103() {
    const post = POSTS.find((p) => p.id === 103) || POSTS[0];
  
  return (
    <main className="min-h-screen bg-white">
      {/* Top banner */}
      {/* <section className="mx-auto section-container px-4 sm:px-6 pt-6">
        <ResponsiveBanner
          href="#"
          alt="Your Offer"
          desktopSrc="/banner/aoe-blogs-web.webp"
          mobileSrc="/banner/aoe-blogs-mob.webp"
        />
      </section> */}

      <section className="mx-auto section-container px-4 sm:px-6 pt-6">
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
              "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/author/daniel.png",
          }}
          updatedAt={post.date}
          readMins={post.readMins}
        />
      </section>

      {/* HERO */}
      <header className="border-b border-slate-200 section-container bg-white">
        <div className="mx-auto px-4 sm:px-6 py-10">
          <h1 className="mx-auto text-center section-title">
            <span className="text-primary">
              Implementing AEO in Your Content Strategy: A Step-by-Step Framework for Tech Startups
            </span>
            {/* <br />
            <span className="text-primary">
              5 Must-Know AEO Strategies for 2025
            </span> */}
          </h1>
        </div>
      </header>

      {/* BODY: 3-column */}
      <section className="mx-auto grid section-container grid-cols-1 gap-6 px-4 sm:px-6 py-8 lg:grid-cols-[230px_minmax(0,1fr)_280px]">
        {/* LEFT: TOC (scroll-spy with active styling) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        {/* CENTER: ARTICLE */}
        <article className="prose prose-slate max-w-none md:prose-lg">
          <Intro />

          <Section
            id="step-1"
            title="Step 1: Start by Redefining Your Keyword Universe"
          >
            <p className="section-phara">
              Traditional keyword research is about what people type. <br />
              AEO keyword strategy focuses on what people ask.
            </p>
            <p className="section-phara">
              Start by mapping out your industry’s most frequently asked questions (FAQs, how-tos, definitions, and comparisons).

            </p>
            <p className="section-phara">
              Tools like <strong> AlsoAsked, AnswerThePublic,</strong>  and <strong>Google’s People Also Ask</strong> help you uncover the intent-based questions your audience is voicing.
            </p>
            <p className="section-phara">
              But don’t stop there, cluster these questions by <strong>intent (informational, navigational, transactional).</strong> This forms the base of your Answer Graph, the digital map of what your audience seeks from your startup.
            </p>
            <p className="section-phara">
              Tip: When you’re building your AEO keyword list, keep your brand’s SEO foundation strong. <strong>AEO doesn’t replace SEO;</strong> it enhances it. You can explore our detailed breakdown of <strong>SEO services at Ayatiworks </strong>to understand how both work hand in hand.
            </p>

          </Section>

          <Section
            id="step-2"
            title="Step 2: Structure Your Content Like an Answer"
          >
            <p className="section-phara">
              What is the difference between ranking and being featured?
            </p>
            <p className="section-phara">
              We refer to that as the<strong> Structure of AEO.  </strong>

            </p>
            <p className="section-phara">
              <strong>Ranking</strong> is a traditional success model of SEO where Search Engines ranked business on the 1st page of SERP.
            </p>
            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-103-1.png"
              alt="Google Ranking businesses for Keyword on SERP "
            />
            <h3 className="section-title text-2xl text-left my-5">That’s the Structure </h3>
            <p className="section-phara">
              When the end user types a keyword in the search bar of the Search Engine, in the above image the keyword being “multilingual marketing Chennai” Google pulls up 3 businesses in the page ranking
            </p>
            <h3 className="section-title text-2xl text-left m-5">Rank 1 – Goes to -  <Link
              href="https://www.rankraze.com/vernacular-multilingual-marketing/"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              Rankraze
            </Link>{" "}</h3>
            <h3 className="section-title text-2xl text-left m-5">Rank 2 – Goes to -  <Link
              href="https://ayatiworks.com/content-as-a-service/multilingual-marketing"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              Ayatiworks
            </Link>{" "}</h3>
            <h3 className="section-title text-2xl text-left m-5">Rank 3 – Goes to -  <Link
              href="https://socialbeat.in/multi-lingual-marketing/"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              Social Beat
            </Link>{" "}</h3>
            <h3 className="section-title text-2xl text-left m-5">Rank 4 – Goes to -  <Link
              href="https://ayatiworks.com/content-as-a-service/multilingual-marketing/"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              Ayatiworks
            </Link>{" "}</h3>
            <p className="section-phara">Even now for some keywords Google does rank pages of businesses on the Search Engine Ranking Pages.  </p>
            <p className="section-phara">Every business can look at this as an opportunity to browse Q&A’s around this search term, to come up with FAQ’s, get the structure correct to rank for the same keyphrase on AEO. </p>
            <p className="section-phara"><strong>Being Featured or Featured Snippet</strong> is when the search engine provides direct answers to an end user who has entered a key term or phrase seeking information, by triggering a specialized response format i.e. the Answer Format referring your business as one of the best options.  </p>
            <p className="section-phara">Just like in the image below, look at the question asked in the search bar and the response with options of 3 businesses. </p>
            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-103-2.png"
              alt="Google offering answers to the end user in the AEO format suggesting 3 businesses.  "
            />
            <h3 className="section-title text-2xl text-left m-5">Rank 1 – Goes to -  <Link
              href="https://socialbeat.in/multi-lingual-marketing/"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              Social Beat
            </Link>{" "}</h3>
            <h3 className="section-title text-2xl text-left m-5">Rank 2 – Goes to -  <Link
              href="https://www.rankraze.com/vernacular-multilingual-marketing/"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              Rankraze
            </Link>{" "}</h3>
            <h3 className="section-title text-2xl text-left m-5">Rank 3 – Goes to -  <Link
              href="https://ayatiworks.com/content-as-a-service/multilingual-marketing"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              Ayatiworks
            </Link>{" "}</h3>


            <p className="section-phara">AI systems and Answer engines prefer content that is well-defined, snippet-friendly, and hierarchy-driven. </p>
            <div className="ml-10 py-5">
              <h3 className="section-title text-2xl text-left my-5">Here’s how to AEO-proof your content layout: </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Use question-based H2s and H3s. ",

                  },
                  {
                    name: "Keep direct answers (40–60 words) immediately below the header. ",

                  },
                  {
                    name: "Add supporting context (stats, examples, or data) to build authority. ",

                  },

                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">When you answer a query with clarity, you’re signaling to AI engines, this content is ready to be cited</p>
            <p className="section-phara"><strong>Example: In a Tech Business </strong>- Instead of <strong>“Benefits of Cloud Hosting,”</strong> write <strong>“Why is Cloud Hosting Essential for SaaS Startups?”</strong> and follow it up with a crisp, fact-based answer. </p>
            <p className="section-phara">This structured approach also aligns perfectly with <Link
              href="https://ayatiworks.com/blogs/seo/5-must-know-AEO-Strategies-For-2025"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              AEO strategies for 2025
            </Link>, especially as Google and OpenAI refine how AI Overviews source responses.</p>
          </Section>

          <Section
            id="step-3"
            title="Step 3: Create Topic Clusters Around ‘Answer Themes’"
          >
            <p className="section-phara">
              Think of AEO like building your own <strong>Wikipedia</strong>, where every page connects intelligently.

            </p>
            <p className="section-phara">Start by identifying 3–5<strong> core answer themes </strong>relevant to your startup. </p>

            <div className="ml-10 py-5">
              <h3 className="section-title text-2xl text-left my-5">For instance:  </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "For a SaaS startup: “AI integrations,” “data security,” “API scalability.”  ",

                  },
                  {
                    name: "For a FinTech app: “payment security,” “credit analytics,” “AI in lending.” ",

                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">Each theme becomes a <strong>pillar blog</strong>, supported by<strong> answer-based subtopics </strong>(clusters). </p>
            <p className="section-phara">Example: Pillar Topic: AEO for SaaS Startups </p>
            <p className="section-phara"><strong>Cluster Topics:</strong> “Best AEO tools for SaaS founders,” “How AEO impacts API documentation visibility,” “AEO vs. SEO for technical content.” </p>
            <p className="section-phara">This method ensures your content ecosystem mirrors user intent while reinforcing your brand authority across interlinked themes. </p>
            <p className="section-phara"><strong>Smart move:</strong> Internal linking isn’t just for navigation, it’s for context passing. When your content ecosystem interlinks naturally, AI crawlers understand your site’s topical relevance better. </p>

            {/* <img
              src="/assets/blogImg/blog-102-3.jpg"
              alt="Understanding the difference between SEO vs AEO "
            /> */}
          </Section>

          <Section
            id="step-4"
            title="Step 4: Optimize for Featured Snippets and AI Overviews"
          >
            <p className="section-phara">
              AEO thrives where traditional SEO peaks, at the  <strong>featured snippet zone.</strong>

            </p>
            <p className="section-phara">
              If your content consistently lands in snippets, you’re already halfway into AEO territory.
            </p>

            <div className="ml-10 py-5">
              <h3 className="section-title text-2xl text-left my-5">Here’s how to take it further:  </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Target question-style long-tail keywords.  ",
                  },
                  {
                    name: " Provide concise, fact-based answers within 50–70 words. ",
                  },
                  {
                    name: "Use definition-style phrasing (“X is…”, “Y means…”) for concept queries.  ",
                  },
                  {
                    name: "Include data tables, lists, and comparisons; these formats are snippet gold.  ",
                  },

                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">Google’s AI Overviews now rely on these structured content patterns to summarise results for voice and chat-based searches.
              So, when your startup content is snippet-optimized, you’re not just ranking; you’re getting referenced. </p>
            <p className="section-phara">Pro Tip: Keep a mix of <strong>evergreen Q&As</strong> (like “What is AEO?”) and <strong>emerging intent questions</strong> (like “How does AEO help startups in 2025?”). This ensures your content stays relevant to both existing and evolving AI answer sets. </p>
          </Section>

          <Section
            id="step-5"
            title="Step 5: Add Schema Markup - Your AI Translator"
          >
            <p className="section-phara">
              Schema is your content’s passport into the AI universe.
            </p>
            <p className="section-phara">While humans read words, AI reads structure, and schema markup gives it exactly that. </p>
            <div className="ml-10 py-5">
              <h3 className="section-title text-2xl text-left my-5">For tech startups, these schema types are essential:   </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "FAQ Schema: Helps voice assistants fetch direct answers.  ",
                  },
                  {
                    name: "How To Schema: Works great for step-based tutorials or implementation guides. ",
                  },
                  {
                    name: "Product Schema: For SaaS features or app-based solutions. ",
                  },
                  {
                    name: "Article Schema: To define the content’s intent and author expertise. ",
                  },

                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">Implementing schema manually (via JSON-LD) or through a plugin (like Rank Math or Yoast) ensures that your content is not only visible to AI crawlers but also interpretable. </p>
            <p className="section-phara"><strong>Quick Tip:</strong> Keep your schema markup validated using Google’s Rich Results Test. Clean data improves your eligibility for AI Overview inclusion and voice search snippets. </p>

            {/* <div className="ml-10 py-5">
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "AnswerThePublic / AlsoAsked",
                    desc: "Identify real user questions to guide AEO-focused content creation.",
                  },
                  {
                    name: "Frase / MarketMuse",
                    desc: "Analyze content intent, readability, and AI interpretability.",
                  },
                  {
                    name: "Google’s Structured Data Testing Tool / Schema.org / RankMath",
                    desc: "Validate and deploy schema markup for FAQs, HowTos, and Product data.",
                  },
                  {
                    name: "ChatGPT / Perplexity / Bing Copilot",
                    desc: "Test how AI tools summarize your content. If your brand doesn’t appear, it’s time to refine.",
                  },
                  {
                    name: "Google Search Console & GA4",
                    desc: "Track impressions, engagement, and visibility shifts after AEO updates.",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}:
                      </span>{" "}
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div> */}

          </Section>

          <Section id="step-6" title="Step 6: Make Your Content Conversationally Discoverable">

            <p className="section-phara">
              AEO doesn’t just optimize for search engines, it prepares your content to be spoken out loud.
            </p>
            <p className="section-phara">
              By implementing <strong>Answer Engine Optimization,</strong> they
              restructured their blogs with{" "}
              <strong>question-led H2s, added FAQ schemas,</strong> and rewrote
              sections into concise, conversational summaries.
            </p>
            <p className="section-phara">
              With tools like  <strong>ChatGPT, Perplexity, Claude and Gemini </strong>shaping how audiences discover and trust information, your content must sound human, natural, and authoritative.

            </p>

            <div className="ml-10 py-5">
              <h3 className="section-title text-2xl text-left my-5">Here’s how to make your startup content conversationally discoverable: </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Write in Q&A pairs (simulate real user dialogue). ",
                  },
                  {
                    name: "Use “you” and “your startup” to personalize.  ",
                  },
                  {
                    name: "Keep sentences crisp, 15–20 words max. ",
                  },
                  {
                    name: "Integrate contextual transitions (“So what does this mean for your brand?”).  ",
                  },

                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              You’re not writing for algorithms, you’re writing with them.
            </p>
            <p className="section-phara">
              That’s the secret to creating AEO-ready content that reads smoothly in chat-based summaries and voice results.
            </p>
            <p className="section-phara"><span className="font-bold"> The takeaway:</span>  </p>
            <p className="section-phara">Are you wondering how AEO fits into your content marketing strategy? </p>
            <p className="section-phara">It’s simpler than you think; it’s about answering before being asked.  </p>
          </Section>

          <Section id="step-7" title="Step 7: Track, Test, and Tune Your ‘Answer Visibility’">
            <p className="section-phara">
              You can’t improve what you don’t measure, and AEO performance goes beyond keyword rankings.
            </p>

            <div className="ml-10 py-5">
              <h3 className="section-title text-2xl text-left my-5">Here’s what to monitor:  </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Featured snippet appearances (track via tools like Semrush or Ahrefs).  ",
                  },
                  {
                    name: "Voice search impressions (via Google Search Console queries with “how,” “why,” “what”).  ",
                  },
                  {
                    name: "AI Overview mentions (manual tracking + brand name visibility).  ",
                  },
                  {
                    name: " Click-through rate (CTR) for answer-based queries. ",
                  },
                  {
                    name: " Engagement metrics: Average time on page, bounce rate, and scroll depth.",
                  },

                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="section-title text-2xl text-left my-5">The goal?  </h3>

            <p className="section-phara">
              To move from “I rank” to “I’m referenced.”
            </p>
            <p className="section-phara">
              Review your data every 30 days and adjust content tone, structure, or schema accordingly. AEO is not a one-time setup, it’s a feedback loop where your content learns as AI systems evolve.
            </p>
            <p className="section-phara">
              <strong>Insight: </strong>Early adopters who consistently refine based on AI visibility data are seeing up to<strong> 35% improvement</strong> in snippet inclusion rates within six months.
            </p>
          </Section>
          <Section id="build-your-startup" title="Build Your Startup’s AI Visibility. One Answer at a Time">
            <p className="section-phara">
              AEO isn’t replacing SEO; it’s evolving it.
            </p>
            <p className="section-phara">And for tech startups, it’s the smartest bridge between being searchable and being discoverable. </p>
            <div className="ml-10 py-5">
              <h3 className="section-title text-2xl text-left my-5">Start with one step at a time:  </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "1. Redefine your keyword universe.  ",
                  },
                  {
                    name: "2. Structure content for answers. ",
                  },
                  {
                    name: "3. Cluster intelligently. ",
                  },
                  {
                    name: "4. Optimize and measure relentlessly.  ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              And remember, the ultimate goal isn’t just to appear on search results. It’s to be the answer AI chooses to quote.
            </p>
            <p className="section-phara">
              Ready to build your startup’s AI-ready SEO foundation?             </p>

            <div className="flex justify-center py-5">
              <Link
                href="/contact-us"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Book a Free Consultation with Ayatiworks
              </Link>
            </div>

          </Section>

          <Section id="faq" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        {/* RIGHT: Categories + Author + Banner */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CategoriesCard items={rightCategories} />
        </aside>
      </section>

      {/* ===== Bottom: Related Posts ===== */}
      <section className="mx-auto section-container px-4 sm:px-6 pb-14">
        <RelatedPostsSection posts={relatedPosts} />
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

/* Scroll-spy TOC with active classes: text-primary + font-primary (others font-secondary) */
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
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: [0, 1] }
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
    <nav className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-2xl section-title">
        What’s Inside
      </div>
      <ul className="p-3 text-sm">
        {items.map((it) => {
          const active = activeId === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                className={[
                  "block rounded px-2 py-2 transition-colors",
                  active
                    ? "text-primary text-xl font-primary bg-slate-50"
                    : "text-slate-700 font-secondary text-lg hover:bg-slate-50 hover:text-secondary",
                ].join(" ")}
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function CategoriesCard({ items }) {
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <div className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-2xl section-title font-semibold">
        Categories
      </div>
      <div className="p-3">
        <ul className="space-y-1 text-sm">
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

/* Responsive banner (desktop + mobile) */
function ResponsiveBanner({ href, desktopSrc, mobileSrc, alt = "" }) {
  return (
    <Link
      href={href}
      aria-label={alt}
      className="block w-full overflow-hidden bg-white shadow-sm"
    >
      <img src={desktopSrc} alt={alt} className="hidden w-full md:block" />
      <img src={mobileSrc} alt={alt} className="block w-full md:hidden" />
    </Link>
  );
}

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
  const shareUrl = typeof window !== "undefined" ? window.location.origin + href : href;
  const shareTitle = Array.isArray(title) ? title.join(" ") : title;

  return (
    <div
      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      aria-label={`Read: ${shareTitle}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <Link href={href} aria-label={`Read: ${shareTitle}`} className="block">
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-[420px]">
              <img
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
                  <img
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

              <div className="hidden sm:block h-6 w-px bg-white/20 mx-3" aria-hidden="true" />

              <div className="text-sm text-slate-100/90">
                <div className="font-primary font-medium text-base">{readMins} Min</div>
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
      (typeof document !== "undefined" ? document.title : "")
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
          `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`
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
                `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
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
                `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
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
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
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
                true
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp className="h-4 w-4 text-slate-700" />
          </button>

          {/* Telegram */}
          <button
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
          </button>

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

/* TOC items */
const tocItems = [
  { id: "intro", label: "Intro" },
  { id: "step-1", label: "Start by Redefining" },
  { id: "step-2", label: "Structure Your Content" },
  { id: "step-3", label: "Create Topic Clusters" },
  { id: "step-4", label: "Optimize for Featured " },
  { id: "step-5", label: "Add Schema Markup" },
  { id: "step-6", label: "Make Your Content" },
  { id: "step-7", label: "Track, Test, and Tune" },
  { id: "build-your-startup", label: "Build Your Startup" },
  { id: "faq", label: "FAQ" },
];

/* Right rail categories */
const rightCategories = [
  { text: "SEO Services", href: "/blogs/seo" },
  { text: "Digital Marketing", href: "#" },
  { text: "Social Media Marketing", href: "#" },
  { text: "Email Marketing", href: "#" },
  { text: "Instagram Marketing", href: "#" },
  { text: "Affiliate Marketing", href: "#" },
  { text: "Programmatic Marketing", href: "#" },
  { text: "Video Marketing", href: "#" },
  { text: "Content as a Service", href: "#" },
  { text: "Digital PR", href: "#" },
  { text: "Web & E-Commerce", href: "#" },
];

/* ---- Mock related posts (swap with your CMS) ---- */
const relatedPosts = [
  {
     id: 101,
    slug: "/blogs/seo/5-must-know-aeo-strategies-for-2025/",
    title: "5 Must-Know AEO Strategies for 2025 ",
    excerpt:
      "A customer asks their AI assistant, “What’s the best way to boost my online sales?” and gets a crisp, tailored answer, but your business isn’t mentioned.",
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-banner.png",
    category: "SEO",
    updatedAt: "October 22, 2025",
    readMins: 8,
  },
  {
     id: 102,
    slug: "/blogs/seo/how-your-tech-startup-can-use-answer-engine-optimization-aeo-to-attract-engage-and-convert-smarter-audiences/",
    title: "How Your Tech Startup Can Use Answer Engine Optimisation (AEO) to Reach their Audience ",
    excerpt: "From CEOs to CMOs in funded or incubated tech startups, there is this question about using organic reach or SEO ...",
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-102.jpg",
    category: "SEO",
    updatedAt: "October 31, 2025",
    readMins: 15,
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>How does this sound?</em>
      </p>
      <p className="section-phara">
        Answer Engine Optimization (AEO) isn’t the next big thing, it’s the now thing.
        As AI Overviews and conversational search take center stage, startups that master AEO today are the ones that will stay visible tomorrow.
      </p>
      <p className="section-phara">
        In our earlier blog, we broke down
        <Link
          href="https://ayatiworks.com/digital-marketing-services/seo"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          how tech startups can use AEO to attract and convert smarter audiences.
        </Link>{" "}
      </p>
      <p className="section-phara">
        Now, let’s go one step further, and see how you can actually apply it inside your content strategy.

      </p>

      <p className="section-phara">
        This framework will walk you through <strong>7 actionable steps</strong>, from defining your AEO-ready content blueprint to tracking your <strong>“answer visibility”</strong> performance.
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
      q: "What is the difference between AEO and traditional SEO?",
      a: "Traditional SEO focuses on ranking your website for keywords typed into search engines. AEO (Answer Engine Optimization) goes a step further - it optimizes your content so that AI-driven systems and voice assistants (like ChatGPT, Gemini, or Siri) can identify, quote, and recommend your answers directly. In short, SEO gets you found, AEO gets you featured and referred.",
    },
    {
      q: "Why is AEO important for startups in 2025?",
      a: "With the rise of AI Overviews and conversational search, users no longer browse - they expect instant, credible answers. Startups using AEO stand a higher chance of appearing in these AI-generated summaries, improving brand trust, visibility, and lead conversion even before the user visits the website.",
    },
    {
      q: "How can AEO be integrated into my startup's existing SEO strategy?",
      a: "You can integrate AEO by mapping question-based keywords, structuring content for snippet-friendly answers, and adding schema markup. Analyze your user personas and buyer journey to understand what questions your audience asks. Then, provide straightforward and useful answers that satisfy their intent - this helps search and AI systems feature your brand in relevant contexts.",
    },
    {
      q: "What types of content work best for AEO?",
      a: "Content that directly answers user questions performs best - think FAQs, how-to guides, comparison blogs, product explainers, and educational articles. Each should follow a 'question → crisp answer → context' pattern, making it easier for AI systems to extract and showcase your response.",
    },
    {
      q: "How long does it take to see AEO results?",
      a: "Most startups begin to notice measurable improvements - such as increased snippet visibility or AI Overview mentions - within 3 to 6 months. However, results vary depending on factors like content quality, schema accuracy, and publishing consistency. In some cases, optimized content can appear in AI results just days after being indexed.",
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

/* ---------- Single Item ---------- */
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
        <p className="font-secondary text-lg text-black/80">{a}</p>
      </div>
    </div>
  );
}

/* ---------- Related Posts (Bottom) ---------- */

function RelatedPostsSection({ posts = [] }) {
  if (!posts?.length) return null;
  return (
    <div className="mt-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title text-left ">Related Posts</h2>
        <Link
          href="/blogs"
          className=" btn-outline "
          aria-label="View all blog posts"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <RelatedPostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}

function RelatedPostCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Stretched link */}
      <Link href={post.slug} className="absolute inset-0 z-[1]">
        <span className="sr-only">{`Read: ${post.title}`}</span>
      </Link>

      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="line-clamp-2 font-primary text-lg leading-snug text-slate-900">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.updatedAt}</span>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <span>{post.readMins} min read</span>
        </div>
      </div>
    </article>
  );
}
