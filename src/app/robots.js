// app/robots.js
export const dynamic = "force-static";
export const revalidate = false;

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [], // ✅ correct key and empty value
      },
    ],
    sitemap: "https://ayatiworks.com/sitemap.xml",
  };
}
