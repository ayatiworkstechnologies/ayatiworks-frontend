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
    title: `${post.title} | Ayatiworks`,
    description: post.deck || post.bannerTitle,
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

  // Programmatic Article JSON-LD for rich result snippets
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.deck,
    image: post.cover,
    datePublished: post.date,
    author: {
      "@type": "Organization", // Or Person
      name: "Ayatiworks",
      url: "https://www.ayatiworks.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ayatiworks",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ayatiworks.com/fav-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ayatiworks.com/blogs/${categoryTarget}/${slugTarget}`,
    },
  };

  return (
    <main className="section section-home">
      {/* Inject Structured Data directly into HEAD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Dynamic Visual Content mapping */}
      <BlogComponent />

      <Connection />
    </main>
  );
}
