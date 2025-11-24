"use client";import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "1.Goal Setting",

    points: ["Define clear objectives for your email campaigns."],
  },
  {
    id: 2,
    title: "2. Audience Segmentation",
    points: ["Categorize your subscribers for targeted messaging."],
  },
  {
    id: 3,
    title: "3. Content Creation",
    points: ["Develop engaging and relevant email content."],
  },
  {
    id: 4,
    title: "4. Design Optimization",
    points: ["Ensure responsive and visually appealing email designs."],
  },
  {
    id: 5,
    title: "5. A/B Testing",
    points: ["Test different elements to optimize performance."],
  },
  {
    id: 6,
    title: "6. Automation Setup",
    points: ["Implement workflows for timely and relevant emails."],
  },
  {
    id: 7,
    title: "7. Integration",
    points: ["Connect email campaigns with your CRM and other tools."],
  },
  {
    id: 8,
    title: "8. Compliance Check",
    points: ["Ensure adherence to email marketing laws and best practices."],
  },
  {
    id: 9,
    title: "9. Performance Monitoring",
    points: ["Track key metrics like open rates and conversions."],
  },
  {
    id: 10,
    title: "10. Continuous Improvement",
    points: ["Refine strategies based on data insights."],
  },
];

const data = [
  {
    title: "Increased Engagement",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-1.png",
    desc: "Achieved a 25% higher open rate for a Chennai-based NGO’s newsletters.",
  },
  {
    title: "Boosted Sales",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-2.png",
    desc: "Drove a 20% increase in online sales for a local electronics retailer through promotional campaigns.",
  },
  {
    title: "Enhanced Customer Retention",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-3.png",
    desc: "Drove a 30% increase in online sales for a local electronics retailer through promotional campaigns.",
  },
];
const expertise = [
  {
    title: "Newsletter Campaigns",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-4.png",
  },
  {
    title: "Promotional Emails",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-5.png",
  },
  {
    title: "Transactional Emails",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-6.png",
  },
  {
    title: "Drip Campaigns",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-7.png",
  },
  {
    title: "Event Invitations",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-8.png",
  },
  {
    title: "Customer Surveys",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-9.png",
  },
  {
    title: "Re-engagement Campaigns",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-10.png",
  },
  {
    title: "Automated Workflows",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/email-11.png",
  },
  
];

function HeroServicePage() {
  return (
    <>
      <section className="section-container py-12">
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Email Marketing Services in Chennai that Deliver ROI, Not Spam
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-black/80 space-y-6"
          >
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              Ayatiworks has done it right for many clients and when done right,
              email marketing still delivers the highest ROI in digital. We
              offer data-driven email marketing services in Chennai that help
              brands stay relevant, build trust, and convert leads into paying
              customers.
            </p>
            <h2 className="text-lg sm:text-xl md:text-3xl text-secondary font-primary font-medium leading-relaxed">
              What we don’t do - SPAM! Batch-and-blast! Carefree Emails! Bulk
              Useless Dumps!
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              We create segmented, personalized, and performance-focused
              campaigns that keep your audience engaged , and buying. As a
              results-first email marketing company, we help local businesses
              and global brands turn inboxes into sales channels with
              automation, analytics, and sharp strategy.
            </p>
            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
          </motion.div>

          {/* Right - Sticky Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="sticky top-20">
              <motion.img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/office-member.png"
                alt="Search Engines Work"
                className="w-full h-auto mx-auto rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Why Ayatiworks is the Best Email Marketing Company in Chennai
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/email-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                {" "}
                Being the best is a craft; we have successfully personalized
                that craft at Ayatiworks, we don't just send emails; we craft
                personalized campaigns that resonate with your audience and
                drive results.{" "}
              </p>
              <div className="space-y-2">
                {/* ✅ Title */}
                <p className="flex items-start gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <span className="text-primary font-medium text-xl sm:text-2xl flex-shrink-0">
                    1.
                  </span>
                  Personalized Email Marketing & Branding Campaigns for Diverse
                  Industries
                </p>

                {/* ✅ Paragraph with indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-7">
                  We've successfully executed email marketing strategies for
                  various sectors by understanding their end objectives and
                  creating a funnel strategy.
                </p>
              </div>

              <div className="space-y-2">
                {/* ✅ Title with Icon */}
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                  Retail
                </p>

                {/* ✅ Paragraph with left indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                  Our Ayatiworks team boosted repeat purchases for a
                  Chennai-based fashion retailer through targeted promotions.
                  Keeping customers in the loop about product updates, regular
                  discounts and amazing offers lure them into making informed
                  decisions, which is a SALE.
                </p>
              </div>
              <div className="space-y-2">
                {/* ✅ Title with Icon */}
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                  Healthcare
                </p>

                {/* ✅ Paragraph with left indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                  We increased appointment bookings for a local clinic by
                  sending timely health tips and reminders. We worked on a
                  funnel-based strategy and drip marketing format to enhance
                  branding for our client.
                </p>
              </div>
              <div className="space-y-2">
                {/* ✅ Title with Icon */}
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                  E-commerce
                </p>

                {/* ✅ Paragraph with left indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                  Enhanced cart recovery rates for an online store with
                  personalized follow-up emails.
                </p>
              </div>
              <div className="space-y-2">
                {/* ✅ Title */}
                <p className="flex items-start gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <span className="text-primary font-medium text-xl sm:text-2xl flex-shrink-0">
                    2.
                  </span>
                  Data-Driven Strategies to apply targeted Emails
                </p>

                {/* ✅ Paragraph with indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-7">
                  Our approach is rooted in analytics. We segment your audience
                  based on behavior and preferences, ensuring each email hits
                  the mark.
                </p>
              </div>

              <div className="space-y-2">
                {/* ✅ Title */}
                <p className="flex items-start gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <span className="text-primary font-medium text-xl sm:text-2xl flex-shrink-0">
                    3.
                  </span>
                  Compliance and Deliverability
                </p>

                {/* ✅ Paragraph with indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-7">
                  We adhere to global email marketing standards, ensuring high
                  deliverability rates and compliance with regulations like
                  GDPR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-16">
        <div className="bg-primary rounded-2xl shadow-lg hover:shadow-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute inset-0  rounded-2xl"></div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-2xl sm:text-3xl md:text-4xl font-primary font-medium mb-6"
          >
            What is Your Email Marketing Objective?
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="mx-auto mt-4 bg-white h-1 w-32 sm:w-48 md:w-64 origin-center rounded-full"
            />
          </motion.h2>

          {/* Paragraph */}
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-secondary max-w-8xl mx-auto">
            Whether you want to increase repeat purchases, nurture new leads, or
            create brand awareness, email marketing gets it done with ease. At
            Ayatiworks, we align your email strategy with your core business
            goals. From recovering abandoned carts to launching drip campaigns
            and driving higher engagement, we craft personalized, automated
            email marketing flows that truly deliver results.
          </p>
        </div>
      </section>

      <section className="section-container py-12">
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Let’s Plan your Email Campaign Today!
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-white shadow-md border border-gray-200 p-6 rounded-md`}
            >
              {/* Step Title */}
              <h3 className=" font-primary text-secondary font-medium text-2xl mb-4">
                {step.title}
              </h3>

              {/* Step Points */}
              <ul className="font-primary text-lg space-y-2 text-black/80">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container py-12">
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">What is Your Brand’s X?</span>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            <p className="text-base sm:text-lg md:text-xl font-secondary font-medium leading-relaxed">
              What’s the one outcome you expect from your email campaigns? More
              leads, better retention, higher conversions? <br />
              Your brand’s X is that measurable goal. At Ayatiworks, we help you
              define it, align your campaigns to it, and optimize for it. Email
              marketing isn’t about sending more; it’s about sending smarter.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-secondary font-primary font-medium leading-relaxed">
              So, ask yourself
            </h2>

            <div className="space-y-3">
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-primary font-medium text-black/80">
                <GoDotFill className="text-primary text-xl" /> Are you building
                loyalty?
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-primary font-medium text-black/80">
                <GoDotFill className="text-primary text-xl" /> Driving sales?
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-primary font-medium text-black/80">
                <GoDotFill className="text-primary text-xl" /> Re-engaging cold
                leads?
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-primary font-medium text-black/80">
                <GoDotFill className="text-primary text-3xl" />
                Once you’re clear on your X, we build the strategy to achieve
                it , no gimmicks, just focused performance.
              </p>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/email-2.png"
                alt="Search Engines Work"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        {/* Section Heading */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              {" "}
              How Ayatiworks Transformed Clients Digitally
            </span>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>
        <div className="text-left mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-secondary mt-4 font-primary">
            Our email marketing strategies have led to tangible results
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              {/* ✅ Icon first, text second */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium font-primary text-xl sm:text-2xl">
                  {item.title}
                </h3>
                <img
                  src={item.icon}
                  alt=""
                  className="w-15 h-15 object-contain"
                />
              </div>

              <div className="border-b-2 border-white w-full"></div>

              <p className="text-white/90 text-sm font-secondary sm:text-base/8 mt-5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <AutoImageSlider />

      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Why Team Up with Ayatiworks for Email Marketing Services?
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}

          <div className="text-black/80 space-y-6">
            <div className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                <h3 className="text-xl sm:text-3xl font-medium font-primary text-secondary">
                  Expertise
                </h3>
              </div>
              {/* Text */}
              <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed ml-7">
                A team of seasoned professionals with a track record of success.
              </p>
            </div>
            <div className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                <h3 className="text-xl sm:text-3xl font-medium font-primary text-secondary">
                  Customization
                </h3>
              </div>
              {/* Text */}
              <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed ml-7">
                Strategies tailored to your unique business needs.{" "}
              </p>
            </div>
            <div className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                <h3 className="text-xl sm:text-3xl font-medium font-primary text-secondary">
                  Results-Driven
                </h3>
              </div>
              {/* Text */}
              <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed ml-7">
                Focus on achieving your specific marketing objectives.{" "}
              </p>
            </div>
          </div>
          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/email-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12 overflow-hidden">
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Our Range of Email Marketing Expertise
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Auto-scrolling slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{ x: ["0%", "-50%"] }} // only half because we duplicate
            transition={{
              ease: "linear",
              duration: 20, // slower & smoother
              repeat: Infinity,
            }}
          >
            {/* Duplicate items twice for seamless loop */}
            {[...expertise, ...expertise].map((item, i) => (
              <div
                key={i}
                className="bg-secondary text-white px-6 py-5 rounded-md shadow-md hover:shadow-lg flex justify-between items-center w-64 flex-shrink-0"
              >
                <h3 className="font-primary font-medium text-lg leading-snug">
                  {item.title}
                </h3>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-15 h-15 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
