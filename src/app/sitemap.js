
export const dynamic = "force-static"; // required for output: "export"
export const revalidate = false;

const baseUrl = "https://ayatiworks.com";

const routes = [
    "/", // Home
    "/about-us",
    "/team",
    "/careers",

    // Digital Marketing Services
    "/digital-marketing-services",
    "/digital-marketing-services/seo",
    "/digital-marketing-services/social-media-marketing",
    "/digital-marketing-services/email-marketing",
    "/digital-marketing-services/instagram-marketing",
    "/digital-marketing-services/affiliate-marketing",
    "/digital-marketing-services/programmatic-marketing",
    "/digital-marketing-services/video-marketing",

    // Content-as-a-Service
    "/content-as-a-service",
    "/content-as-a-service/branding-service",
    "/content-as-a-service/video-creation",
    "/content-as-a-service/multilingual-marketing",

    // Digital PR Service
    "/digital-pr",
    "/digital-pr/digital-pr-services",
    "/digital-pr/influencer-marketing",
    "/digital-pr/online-reputation-media-outreach",

    // Web & E-commerce
    "/web-ecommerce",
    "/web-ecommerce/ux-ui-design",
    "/web-ecommerce/web-development",
    "/web-ecommerce/web-maintenance",
    "/web-ecommerce/shopify-development",
    "/web-ecommerce/ecommerce-solutions",

    // Insights
    "/blogs",
    "/awards",
    "/case-study",
    "/case-study/Reposition-Nippo-and-Brand-Awareness-Campaign",
    "/case-study/Jeep-India-Independence-Day-Merchandise-Sales-Campaign",
    "/case-study/how-Ayatiworks-propelled-Volvos-digital-presence-by-250-percentage-increase-in-impressions",

    // Contact
    "/contact-us",

    //blogs List 

    "/blogs/seo/5-must-know-aeo-strategies-for-2025",
    "/blogs/seo/how-your-tech-startup-can-use-answer-engine-optimization-aeo-to-attract-engage-and-convert-smarter-audiences",
    "/blogs/seo/implementing-aeo-in-your-content-strategy",
    "/blogs/digital-marketing-services/chennai-digital-marketing-services",
    "/blogs/digital-marketing-services/benefits-of-hiring-a-chennai-based-digital-marketing-agency",
  ];

export default function sitemap() {
  const now = new Date();
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}

  
