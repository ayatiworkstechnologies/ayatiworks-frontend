// lib/author-data.js

export const AUTHORS = [
  {
    slug: "daniel-joseph",
    name: "Daniel Joseph",
    avatar:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/teams/daniel.png",
    bio: `Daniel Joseph is a Senior SEO Content Writer & Strategist at Ayatiworks, bringing over 20 years of expertise in content creation and digital marketing strategy. He specializes in developing and executing SEO-driven content for healthcare clients in the United States, helping them achieve a strong organic presence on Google SERP. Having worked with prominent brands across the UAE, UK, USA, and India, Daniel collaborates closely with SEO, Marketing, and Sales teams to craft content that drives business growth and enhances online visibility. His core strengths include SEO, content marketing, content strategy development and AISEO Content. He is passionate about mentoring and authored couple of books. Daniel is dedicated to empowering professionals with modern content marketing skills to thrive in the evolving digital landscape.` ,
       socials: {
      linkedin: "https://www.linkedin.com/",
      rss: "/rss.xml",
    },
    topics: ["SEO", "Content as a Service", "Digital Marketing", "AI SEO"],
  },

];

export const POSTS_BY_AUTHOR = {
  "daniel-joseph": [
    {
      id: "p1",
      title: "Is Your Website Ready for the AI Search Takeover? 5 Must-Know AEO Strategies for 2025",
      excerpt:
        "A customer asks their AI assistant, “What’s the best way to boost my online sales?” and gets a crisp, tailored answer, but your business isn’t mentioned...",
      cover:
        "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-banner.png",
      tag: "SEO",
      href: "/blogs/seo/5-must-know-aeo-strategies-for-2025",
      publishedAt: "2025-10-22T17:55:00-03:00",
    },
    {
    id: "p2",
    title: "How Your Tech Startup Can Use Answer Engine Optimisation (AEO) to Reach their Audience",
    href: "/blogs/seo/how-your-tech-startup-can-use-answer-engine-optimization-aeo-to-attract-engage-and-convert-smarter-audiences",
      publishedAt: "2025-10-31T17:15:00-04:00",
    tag: "SEO",
    cover: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-102.jpg",
    coverAlt:
      "Tech Startup Optimizing Content for AI-Powered Answer Engines ",
    excerpt:
      "From CEOs to CMOs in funded or incubated tech startups, there is this question about using organic reach or SEO ...",
  },
    {
    id: "p3",
    title: "Implementing AEO in Your Content Strategy",
    href: "/blogs/seo/implementing-aeo-in-your-content-strategy",
      publishedAt: "2025-11-07T17:40:00-03:00",
    tag: "SEO",
    cover: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-103.jpg",
    coverAlt:
      "Tech Startup Optimizing Content for AI-Powered Answer Engines ",
    excerpt:
      "Answer Engine Optimization (AEO) isn’t the next big thing, it’s the now thing. As AI Overviews and conversational search take center stage, startups that master AEO today are the ones that will stay visible tomorrow. ",
  },
    {
    id: "p4",
    title: "The Local Agency Advantage for National-Scale ROI",
    href: "/blogs/digital-marketing-services/chennai-digital-marketing-services",
      publishedAt: "2025-11-14T17:40:00-03:00",
    tag: "Digital Marketing Services",
    cover: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-104.jpg",
    coverAlt:
      "Chennai digital marketing agency delivering pan-India ROI ",
    excerpt:
      "Discover how Chennai’s top digital agencies drive national-scale growth. See how brands like Volvo, Nippo & Jeep scaled with Ayatiworks’ expertise...",
  },
    {
    id: "p4",
    title: "5 Key Benefits of Hiring a Chennai-Based Digital Marketing Agency",
    href: "/blogs/digital-marketing-services/benefits-of-hiring-a-chennai-based-digital-marketing-agency",
      publishedAt: "2025-11-21T17:40:00-03:00",
    tag: "Digital Marketing Services",
    cover: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-105.jpg",
    coverAlt:
      "Benefits of hiring a Chennai-based digital marketing agency for business growth",
    excerpt:
      "Discover the top Chennai digital marketing agency benefits and why choosing a local agency drives faster results, better communication, and higher ROI...",
  },
  ],

};

// helpers
export function getAuthor(slug) {
  return AUTHORS.find((a) => a.slug === slug) || null;
}
export function getAuthorPosts(slug) {
  return POSTS_BY_AUTHOR[slug] || [];
}
export function getAllAuthorSlugs() {
  return AUTHORS.map((a) => a.slug);
}
