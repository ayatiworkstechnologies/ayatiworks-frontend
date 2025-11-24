"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Flag,
  Target,
  LayoutDashboard,
  Palette,
  Rocket,
  Hash,
  Share2,
  ThumbsUp,
  MessageSquare,
  Repeat2,
  ShoppingCart,
  TrendingUp,
  MapPin,
  CalendarDays,
  ShieldCheck,
  HeartPulse,
  Users,
  Type,
} from "lucide-react";

/* ============= Motion helpers ============= */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.4 },
});

/* ============= Content ============= */
const meta = {
  title: "Jeep India Independence Day Merchandise Campaign by Ayatiworks",
  subtitle: "Growth Journey",
  client: "Jeep India",
  agency: "Ayatiworks – Next is Now",
  markets: "Chennai, Pondicherry, Tamil Nadu",
  dates: "August 13–16, 2025",
  banner: "/assets/casestudy/jeep-banner.png",
  heroImg: "/assets/casestudy/jeep.png",
};

const objectives = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Elevate microsite UX",
    text: "Elevate microsite experience with intuitive, Jeep-worthy design",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Freedom-driven creatives",
    text: "Create irresistible creatives that combine patriotic flair with persuasive pull",
  },
  {
    icon: <Hash className="h-5 w-5" />,
    title: "Maximize social momentum",
    text: "Maximize social momentum, tapping into Jeep’s existing followers to spark organic conversations",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Convert buzz to orders",
    text: "Convert social buzz into sales, turning interest into ₹ orders on the clock",
  },
];

const strategy = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "UI/UX Redesign",
    text: "Built a smooth, rugged storefront, bold yet accessible, making shopping feel like a smooth off-road run.",
  },
  {
    icon: <Flag className="h-5 w-5" />,
    title: "Independence Day creatives",
    text: "Freedom-driven visuals tied into “Jeep Army” energy, with punchy, sales-friendly copy that resonated with patriotism and urgency. ",
    extras: [
      "(Jeep India advertised 20% off on exclusive Jeep Army merchandise,",
      "21% off on regular gear) Facebook Instagram.",
    ],
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Social Launchpad",
    text: ": Leveraged hashtags like #JeepArmy and #Jeeplife, mobilizing real fans across Instagram, Facebook, and X to like, comment, repost, and tag, a communal fuel injection.",
  },
  {
    icon: <ThumbsUp className="h-5 w-5" />,
    title: "Organic Buzz Engine: ",
    text: "No paid ads, just authentic engagement tapped through limited-time messages like “Freedom drives us forward,” turning audiences into advocates.",
  },
];

const results = [
  { icon: <ThumbsUp className="h-5 w-5" />, label: "Likes", value: "16,666" },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    label: "Comments",
    value: "3,000",
  },
  { icon: <Repeat2 className="h-5 w-5" />, label: "Reposts", value: "420" },
  { icon: <Share2 className="h-5 w-5" />, label: "Shares", value: "1,778" },
  { icon: <ShoppingCart className="h-5 w-5" />, label: "Orders", value: "123" },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    label: "Revenue (₹)",
    value: "240,375",
  },
];

const whyItWorked = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Stylish UX that clicks",
    text: "A design as sturdy and smooth as a Jeep trail drive.",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Emotion with edge",
    text: "Patriotic themes that felt compelling, not clichéd.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Organic engine power",
    text: "Mobilized the Jeep community, real fans beat ad spend.",
  },
  {
    icon: <Type className="h-5 w-5" />,
    title: "Copy that converts",
    text: "“Make it catchy, make it convert.” And it did.",
  },
];

/* ============= Component ============= */
export default function JeepCaseStudy() {
  return (
    <section className="bg-white font-primary section">
      {/* ===== A) Banner (image + gradient only) ===== */}
      <div className="relative section-container h-[320px] md:h-[480px] w-full overflow-hidden">
        <motion.img
          src={meta.banner}
          alt="Jeep Independence Day campaign banner"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>

      {/* ===== B) Content header (separate from banner) ===== */}
      <div className="section-container px-6 md:px-8 py-8 md:py-12 text-center">
        <div className="mx-auto max-w-5xl">
          <motion.h1
            {...fadeUp(0.05)}
            className="text-3xl md:text-5xl font-medium  tracking-tight text-primary"
          >
            {meta.title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.12)}
            className="mt-3 font-secondary text-base md:text-xl text-gray-700"
          >
            {meta.subtitle}
          </motion.p>

          <motion.div
            {...fadeUp(0.18)}
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
          >
            <Badge
              icon={<CalendarDays className="h-4 w-4" />}
              text={meta.dates}
            />
            <Badge
              icon={<MapPin className="h-4 w-4" />}
              text={`Target: ${meta.markets}`}
            />
            <Badge
              icon={<Target className="h-4 w-4" />}
              text={`Client: ${meta.client}`}
            />
            <Badge
              icon={<Rocket className="h-4 w-4" />}
              text={`Agency: ${meta.agency}`}
            />
          </motion.div>
        </div>
      </div>

      {/* ===== Challenge ===== */}
      <div className="section-container px-6 md:px-8 py-8 md:py-12 mx-auto ">
        <motion.div
          {...scaleIn(0.05)}
          className="rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-1"
        >
          <div className="rounded-3xl bg-white/70 backdrop-blur p-6 md:p-10 ring-1 ring-black/5">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <SectionTitle title="The Challenge" />
                <p className="mt-4 font-secondary text-lg text-gray-700 leading-relaxed">
                  Jeep India rolled into Ayatiworks with a mission: to overhaul
                  their merchandise microsite with a sharper, more stylish UI/UX
                  and roll out Independence Day creatives that don’t just wave
                  the flag, they make wallets open. With only three days on the
                  clock, expectations were riding high, Jeep wanted copy that
                  was catchy and salesy, and Ayatiworks delivered with style
                  under pressure.
                </p>
              </div>
              <motion.div {...scaleIn(0.1)} className="relative">
                <img
                  src={meta.heroImg}
                  alt="Jeep campaign hero"
                  className="w-full rounded-2xl ring-1 ring-black/5 shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== Objective ===== */}
      <div className="mx-auto w-full px-6 md:px-8 py-8 md:py-12 section-container ">
        <SectionTitle title="The Objective" />
        <motion.h3
          {...fadeUp(0)}
          className="section-title text-2xl text-left mt-5"
        >
          To drive an Independence Day merchandising blitz that would:
        </motion.h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((o, i) => (
            <motion.article
              key={o.title}
              {...fadeUp(0.04 * i)}
              className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-primary">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                  {o.icon}
                </span>
                <h4 className="font-medium text-xl">{o.title}</h4>
              </div>
              <p className="mt-3 font-secondary  text-gray-600 text-base leading-relaxed">
                {o.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ===== Strategy ===== */}
      <div className="mx-auto px-6 md:px-8 py-8 md:py-12 w-full section-container ">
        <SectionTitle title="The Strategy" />
        <motion.h3
          {...fadeUp(0)}
          className="section-title text-2xl text-left mt-5"
        >
          We treated this like a fast-paced trail drive, every element needed
          grip, control, and momentum:
        </motion.h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {strategy.map((s, i) => (
            <motion.article
              key={s.title}
              {...fadeUp(0.05 * i)}
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm"
            >
              <div className="flex items-center gap-3 text-primary">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 ring-1 ring-secondary/20">
                  {s.icon}
                </span>
                <h4 className="font-medium text-2xl">{s.title}</h4>
              </div>
              <p className="mt-3 font-secondary text-gray-700 text-lg leading-relaxed">
                {s.text}
              </p>

              {s.extras?.length ? (
                <div className="mt-4 flex flex-wrap items-center text-secondary gap-3 text-lg">
                  {s.extras.map((e) => (
                    <Pill key={e} text={e} />
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-8 rounded-2xl bg-primary/5 p-6 ring-1 ring-primary/10"
        >
          <p className="mt-4 font-secondary text-lg text-gray-700 leading-relaxed">
            Over three adrenaline-charged days, the campaign revved into life.
          </p>
        </motion.div>
      </div>

      {/* ===== Results ===== */}
      <div className="mx-auto w-full px-6 md:px-8 py-8 md:py-12 section-container">
        <SectionTitle title="Results: Likes, Leads & Revenue , Fast" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              {...fadeUp(0.05 * i)}
              className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm"
            >
              <div className="flex items-center gap-3 text-primary">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                  {r.icon}
                </span>
                <div>
                  <div className="text-2xl font-medium  tracking-tight">
                    {r.value}
                  </div>
                  <div className="text-lg text-secondary font-secondary">
                    {r.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          {...fadeUp(0.2)}
          className="mt-8 rounded-2xl bg-primary/5 p-6 ring-1 ring-primary/10"
        >
          <p className="mt-4 font-secondary text-lg text-gray-700 leading-relaxed">
            We ignited social engagement and translated it into real revenue,
            all before the campaign cooled down.{" "}
          </p>
        </motion.div>
      </div>

      {/* ===== Why it worked ===== */}
      <div className="mx-auto w-full px-6 md:px-8 py-8 md:py-12 section-container">
        <SectionTitle title="Why It Worked" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyItWorked.map((w, i) => (
            <motion.article
              key={w.title}
              {...fadeUp(0.04 * i)}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-primary">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                  {w.icon}
                </span>
                <h4 className="font-medium text-2xl">{w.title}</h4>
              </div>
              <p className="mt-3 font-secondary text-gray-600 text-lg leading-relaxed">
                {w.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="mx-auto w-full px-6 md:px-8 py-8 md:py-12 section-container">
        <motion.div
          {...fadeUp(0)}
          className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        >
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
            Ready to Shift Your Digital Strategy into Overdrive?
          </h3>
          <p className="mx-auto mt-3 max-w-3xl font-secondary text-white/90">
            Whether you're an automobile brand, EdTech innovator, or fintech
            disruptor, Ayatiworks knows how to craft campaigns that don't just
            cost, they charge.
            <br />
            Let’s put your next campaign into high gear.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <MotionLink href="/contact-us" text="Get in Touch" />
            <MotionLink href="#work" text="See More Work" variant="outline" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============= UI atoms ============= */
function SectionTitle({ title }) {
  return (
    <div>
      <motion.h3 {...fadeUp(0)} className="section-title text-left">
        {title}
      </motion.h3>
      <Underline />
    </div>
  );
}

function Underline() {
  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
        className="bg-secondary h-1 w-24 md:w-40 mt-3 origin-left rounded-full"
      />
    </>
  );
}

function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-lg text-primary ring-1 ring-black/5 shadow-sm font-secondary">
      {icon ? icon : null}
      <span className="font-medium">{text}</span>
    </span>
  );
}

function Pill({ text }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-md font-medium text-primary ring-1 ring-black/5 shadow-sm">
      {text}
    </span>
  );
}

function MotionLink({ href = "#", text = "Learn More", variant = "solid" }) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium px-5 py-2 transition-all duration-300 text-xl font-primary";
  const styles =
    variant === "outline"
      ? "bg-transparent text-white ring-1 ring-white/70 hover:bg-white/10"
      : "bg-white text-primary shadow-md hover:shadow-lg hover:bg-white/90";

  return (
    <motion.a
      href={href}
      className={`${base} ${styles}`}
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      viewport={{ once: true }}
      aria-label={text}
    >
      {text}
    </motion.a>
  );
}
