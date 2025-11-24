import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function SolutionsSection() {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const fadeCard = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cards = [
    {
      cat: "",
      title: "Digital Marketing Services",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/good-vibe.png",
      basePath: "/digital-marketing-services",
      list: [
        { label: "SEO Services", href: "/digital-marketing-services/seo" },
        { label: "Social Media Marketing", href: "/digital-marketing-services/social-media-marketing" },
        { label: "Email Marketing", href: "/digital-marketing-services/email-marketing" },
        { label: "Instagram Marketing", href: "/digital-marketing-services/instagram-marketing" },
        { label: "Affiliate Marketing", href: "/digital-marketing-services/affiliate-marketing" },
        { label: "Programmatic Marketing", href: "/digital-marketing-services/programmatic-marketing" },
        { label: "Video Marketing", href: "/digital-marketing-services/video-marketing" },
      ],
      cta: { label: "Explore Digital Marketing →", href: "/digital-marketing-services" },
    },
    {
      cat: "",
      title: "Content as a Service",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/01.png",
      basePath: "/content-as-a-service",
      list: [
        { label: "Multi-lingual Marketing", href: "/content-as-a-service/multilingual-marketing" },
        { label: "Brand Consultant", href: "/content-as-a-service/brand-service" },
        { label: "Video Creation", href: "/content-as-a-service/video-creation" },
      ],
      cta: { label: "Explore Content Services →", href: "/content-as-a-service" },
    },
    {
      cat: "",
      title: "Digital PR Service",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/02.png",
      basePath: "/digital-pr",
      list: [
        { label: "Digital PR", href: "/digital-pr/digital-pr-service" },
        { label: "Influencer Marketing", href: "/digital-pr/digital-pr/influencer-marketing" },
        { label: "Online Reputation & Media Outreach", href: "/digital-pr/online-reputation-media-outreach" },
      ],
      cta: { label: "Explore Digital PR →", href: "/digital-pr" },
    },
    {
      cat: "",
      title: "Web & E-commerce",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/03.png",
      basePath: "/services/web-ecommerce",
      list: [
        { label: "UX/UI Design", href: "/web-ecommerce/ux-ui-design" },
        { label: "Web Development Services", href: "/web-ecommerce/web-development" },
        { label: "Web Maintenance Services", href: "/web-ecommerce/web-maintenance" },
        { label: "Shopify Development Services", href: "/web-ecommerce/shopify-development" },
        { label: "E-commerce", href: "/web-ecommerce" },
      ],
      cta: { label: "Explore Web & E-commerce →", href: "/web-ecommerce" },
    },
  ];

  return (
    <section className="relative w-full">
      {/* background accents */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-0 -right-16 h-64 w-64 rounded-full bg-secondary/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/[0.03] to-transparent" />

      {/* Title row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-10 px-6"
      >
        <h3 className="section-title">
          What Ayati Brews
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.25 }}
            className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full"
          />
        </h3>
        <h3 className="text-secondary font-primary text-2xl sm:text-3xl lg:text-3xl text-center md:text-right">
          Fully Integrated Digital & Creative Agency
        </h3>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            variants={fadeCard}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => navigate(card.basePath)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate(card.basePath)}
            className="group relative cursor-pointer rounded-2xl p-[1px] overflow-hidden"
          >
            {/* animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 sm:p-8 h-full">
              {/* header */}
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-14 w-14 rounded-xl bg-primary/10 ring-1 ring-primary/20 shrink-0">
                  <img src={card.icon} alt={`${card.title} icon`} className="h-8 w-8 object-contain" loading="lazy" />
                </div>
                <div className="flex-1">
                  <h4 className="font-primary text-2xl sm:text-3xl text-secondary leading-tight">
                    {card.title}
                  </h4>
                  {card.cat && (
                    <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{card.cat}</div>
                  )}
                </div>
              </div>

              {/* divider shimmer */}
              <div className="relative my-5 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent overflow-hidden">
                <span className="absolute -left-24 top-0 h-px w-24 bg-secondary/60 group-hover:translate-x-[140%] transition-transform duration-700" />
              </div>

              {/* list as pills */}
              <ul
                className="flex flex-wrap gap-2 sm:gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                {card.list.map((item) => {
                  const label = typeof item === "string" ? item : item.label;
                  const href =
                    typeof item === "string"
                      ? `${card.basePath}/${label.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}`
                      : item.href;
                  return (
                    <li key={label}>
                      <Link
                        to={href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[13px] font-semibold text-gray-800 hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary transition"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* footer CTA */}
              <div className="mt-6 flex items-center justify-between gap-3" onClick={(e) => e.stopPropagation()}>
                <Link
                  to={card.cta?.href || card.basePath}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-white font-primary text-sm md:text-base shadow hover:opacity-90 transition"
                >
                  {card.cta?.label || `Explore ${card.title} →`}
                </Link>

                {/* subtle arrow hint */}
                <span className="hidden sm:flex items-center gap-1 text-xs text-gray-500 group-hover:text-secondary transition">
                  Open {card.title}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* glow on hover */}
              <div aria-hidden className="pointer-events-none absolute -bottom-6 inset-x-8 h-10 rounded-full bg-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* bottom divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary/60 h-1 mt-10 section-container mx-auto"
      />
    </section>
  );
}
