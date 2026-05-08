import { notFound } from "next/navigation";
import { POSTS } from "../../../lib/blogs-data";
import Connection from "../../../components/Teams/Connection";

// Dynamic component imports based on ID logic
import AEOArticlePage101 from "@/src/app/components/Blog/Blog101";
import AEOArticlePage102 from "@/src/app/components/Blog/Blog102";
import AEOArticlePage103 from "@/src/app/components/Blog/Blog103";
import AEOArticlePage104 from "@/src/app/components/Blog/Blog104";
import AEOArticlePage105 from "@/src/app/components/Blog/Blog105";
import AEOArticlePage106 from "@/src/app/components/Blog/Blog106";
import AEOArticlePage107 from "@/src/app/components/Blog/Blog107";
import AEOArticlePage108 from "@/src/app/components/Blog/Blog108";
import AEOArticlePage109 from "@/src/app/components/Blog/Blog109";
import AEOArticlePage110 from "@/src/app/components/Blog/Blog110";
import AEOArticlePage111 from "@/src/app/components/Blog/Blog111";
import AEOArticlePage112 from "@/src/app/components/Blog/Blog112";
import AEOArticlePage113 from "@/src/app/components/Blog/Blog113";
import AEOArticlePage114 from "@/src/app/components/Blog/Blog114";
import AEOArticlePage115 from "@/src/app/components/Blog/Blog115";
import AEOArticlePage116 from "@/src/app/components/Blog/Blog116";
import AEOArticlePage117 from "@/src/app/components/Blog/Blog117";
import AEOArticlePage118 from "@/src/app/components/Blog/Blog118";
import AEOArticlePage119 from "@/src/app/components/Blog/Blog119";
import AEOArticlePage120 from "@/src/app/components/Blog/Blog120";
import AEOArticlePage121 from "@/src/app/components/Blog/Blog121";
import AEOArticlePage122 from "@/src/app/components/Blog/Blog122";
import AEOArticlePage123 from "@/src/app/components/Blog/Blog123";
import AEOArticlePage124 from "@/src/app/components/Blog/Blog124";
import AEOArticlePage125 from "@/src/app/components/Blog/Blog125";

// Map IDs to their visual component
const blogComponents = {
  101: AEOArticlePage101,
  102: AEOArticlePage102,
  103: AEOArticlePage103,
  104: AEOArticlePage104,
  105: AEOArticlePage105,
  106: AEOArticlePage106,
  107: AEOArticlePage107,
  108: AEOArticlePage108,
  109: AEOArticlePage109,
  110: AEOArticlePage110,
  111: AEOArticlePage111,
  112: AEOArticlePage112,
  113: AEOArticlePage113,
  114: AEOArticlePage114,
  115: AEOArticlePage115,
  116: AEOArticlePage116,
  117: AEOArticlePage117,
  118: AEOArticlePage118,
  119: AEOArticlePage119,
  120: AEOArticlePage120,
  121: AEOArticlePage121,
  122: AEOArticlePage122,
  123: AEOArticlePage123,
  124: AEOArticlePage124,
  125: AEOArticlePage125,
};

// 1. AUTO-Rank Engine: Programmatically Generate SEO for every blog post
export async function generateMetadata({ params }) {
  // Wait for params in NextJS 15
  const resolvedParams = await params;
  const slugTarget = resolvedParams.slug;
  const categoryTarget = resolvedParams.category;

  // Reconstruct path to find the post data
  const requestPath = `/blogs/${categoryTarget}/${slugTarget}/`;
  const requestPathNoSlash = `/blogs/${categoryTarget}/${slugTarget}`;

  // Find post in our database array matching the slug
  const post = POSTS.find(
    (p) => p.slug === requestPath || p.slug === requestPathNoSlash,
  );

  if (!post) {
    return { title: "Blog Not Found | Ayatiworks" };
  }

  // Generate powerful SEO metadata programmatically
  return {
    title: post.seoTitle || `${post.title} | Ayatiworks`,
    description: post.seoDescription || post.deck || post.bannerTitle,
    alternates: {
      canonical: `https://www.ayatiworks.com/blogs/${categoryTarget}/${slugTarget}`,
    },
    openGraph: {
      title: post.title,
      description: post.deck,
      url: `https://www.ayatiworks.com/blogs/${categoryTarget}/${slugTarget}`,
      images: [
        {
          url: post.cover,
          alt: post.coverAlt || post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.deck,
      images: [post.cover],
    },
  };
}

// 2. Pre-build all urls for maximum speed and sitemap inclusion
export function generateStaticParams() {
  return POSTS.map((post) => {
    // Extract category and slug from e.g. "/blogs/seo/5-must-know-aeo..."
    // Ensure no trailing, leading slashes mess up parsing
    const cleanUrl = post.slug.replace(/^\/blogs\//, "").replace(/\/$/, "");

    // Split on first slash
    const [category, ...slugParts] = cleanUrl.split("/");
    const slug = slugParts.join("/");

    return {
      category: category,
      slug: slug,
    };
  }).filter((params) => params.category && params.slug); // Remove incomplete data
}

// 3. Page Component Renderer
export default async function DynamicBlogPage({ params }) {
  const resolvedParams = await params;
  const slugTarget = resolvedParams.slug;
  const categoryTarget = resolvedParams.category;

  const requestPath = `/blogs/${categoryTarget}/${slugTarget}/`;
  const requestPathNoSlash = `/blogs/${categoryTarget}/${slugTarget}`;

  const post = POSTS.find(
    (p) => p.slug === requestPath || p.slug === requestPathNoSlash,
  );

  // If URL slug doesn't match any data, show 404
  if (!post) {
    notFound();
  }

  const BlogComponent = blogComponents[post.id];

  if (!BlogComponent) {
    console.warn(`No visual component defined for blog ID: ${post.id}`);
    notFound();
  }

  // Helper for ISO date formatting
  const formatDateISO = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return "2026-03-13"; // Fallback
      return d.toISOString().split("T")[0];
    } catch {
      return "2026-03-13";
    }
  };

  const isoDate = formatDateISO(post.date);

  // 1. Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.deck,
    image: post.cover,
    author: {
      "@type": "Organization",
      name: "Ayatiworks",
      url: "https://www.ayatiworks.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ayatiworks",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ayatiworks.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ayatiworks.com/blogs/${categoryTarget}/${slugTarget}`,
    },
    datePublished: isoDate,
    dateModified: isoDate,
  };

  // 2. FAQ JSON-LD (Dynamic if faqs exist in POSTS data)
  const faqJsonLd = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  // 3. Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ayatiworks.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.ayatiworks.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category || "SEO",
        item: `https://www.ayatiworks.com/blogs/${categoryTarget}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `https://www.ayatiworks.com/blogs/${categoryTarget}/${slugTarget}`,
      },
    ],
  };

  return (
    <main className="section section-home">
      {/* Inject Structured Data directly into HEAD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Dynamic Visual Content mapping */}
      <BlogComponent />

      <Connection />
    </main>
  );
}
