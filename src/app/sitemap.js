import { POSTS } from "./lib/blogs-data";
import { caseStudies } from "./lib/casestudy-data";

export const dynamic = "force-static";
export const revalidate = false;

const baseUrl = "https://www.ayatiworks.com";

export default function sitemap() {
  const now = new Date();

  // 1. Static Routes
  const staticRoutes = [
    "/",
    "/about-us",
    "/team",
    "/careers",
    
    // Services - Digital Marketing
    "/digital-marketing-services",
    "/digital-marketing-services/seo",
    "/digital-marketing-services/social-media-marketing",
    "/digital-marketing-services/email-marketing",
    "/digital-marketing-services/instagram-marketing",
    "/digital-marketing-services/affiliate-marketing",
    "/digital-marketing-services/programmatic-marketing",
    "/digital-marketing-services/video-marketing",

    // Services - Content
    "/content-as-a-service",
    "/content-as-a-service/branding-service",
    "/content-as-a-service/video-creation",
    "/content-as-a-service/multilingual-marketing",

    // Services - PR
    "/digital-pr",
    "/digital-pr/digital-pr-services",
    "/digital-pr/influencer-marketing",
    "/digital-pr/online-reputation-media-outreach",

    // Services - Web
    "/web-ecommerce",
    "/web-ecommerce/ux-ui-design",
    "/web-ecommerce/web-development",
    "/web-ecommerce/web-maintenance",
    "/web-ecommerce/shopify-development",
    "/web-ecommerce/ecommerce-solutions",

    // Listings
    "/blogs",
    "/awards",
    "/case-study",
    "/contact-us",
  ];

  // 2. Dynamic Blog Routes
  const blogRoutes = POSTS.map((post) => ({
    url: `${baseUrl}${post.slug}`,
    lastModified: new Date(post.date || now),
    changeFrequency: "monthly", // Blogs don't change often after publish
    priority: 0.8,
  }));

  // 3. Dynamic Case Study Routes
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}${study.link}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 4. Map Static Routes to Sitemap Format
  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1.0 : 0.9,
  }));

  // 5. Merge All
  return [...staticSitemap, ...blogRoutes, ...caseStudyRoutes];
}


