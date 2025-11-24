"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Users, DollarSign, TrendingUp } from "lucide-react";

export default function CaaSBenefits() {
  const benefits = [
    {
      icon: Layers,
      title: "Scalable Content Production",
      desc: "From a few social posts to a full multilingual campaign, scale your content effortlessly with our flexible CaaS model.",
    },
    {
      icon: Zap,
      title: "Speed and Agility",
      desc: "Launch campaigns quickly with streamlined processes and an on-demand structure that delivers high-quality content fast.",
    },
    {
      icon: Users,
      title: "Expertise On-Demand",
      desc: "Access copywriters, designers, strategists, and video creators without the overhead of a full-time team.",
    },
    {
      icon: DollarSign,
      title: "Cost-Efficient Model",
      desc: "Pay only for what you need, avoiding heavy retainers or the cost of large in-house teams.",
    },
    {
      icon: TrendingUp,
      title: "Performance-Driven Output",
      desc: "From SEO blogs to ROI-focused ad creatives, every asset is designed to deliver measurable growth.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="section-container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 text-center"
        >
          {/* ✅ Title */}
          <h2 className="section-title flex items-center justify-center text-primary">
            Benefits of Choosing CaaS with{" "}
            <span className="text-secondary ml-2">Ayatiworks</span>
          </h2>

          {/* ✅ Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full mx-auto"
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-black/80 font-secondary mx-auto mb-12"
        >
          Choosing Ayatiworks for Content as a Service (CaaS) means gaining a
          growth partner who understands the pace of modern marketing. Our
          flexible model ensures your brand creates what matters most, when it
          matters most.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left hover:bg-primary"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-xl mb-4 group-hover:bg-white group-hover:text-primary transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium font-primary text-primary mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-secondary text-gray-600 group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
