import React from "react";
import Link from "next/link";
import Image from "next/image";
import CaseStudyModalForm from "../CaseStudyModalForm";
import {
  ShieldCheck, Languages, Target, Volume2
} from "lucide-react";

export default function NewSpaarcCaseStudy() {
  return (
    <main className="w-full overflow-hidden">
      {/* --- TOP BANNER --- */}
      <section className="w-full">
        {/* Desktop Banner */}
        <Image
          src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/spa-banner-1.jpg"
          alt="SPAARC Case Study Banner Desktop"
          className="hidden md:block w-full object-cover"
          width={1920}
          height={1080}
          priority={true} // Using Next.js priority
        />
        {/* Mobile Banner */}
        <Image
          src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/spa-banner-mob-1.jpg"
          alt="SPAARC Case Study Banner Mobile"
          className="block md:hidden w-full object-cover"
          width={768}
          height={1024}
          priority={true}
        />
      </section>


      {/* --- THE CHALLENGE --- */}
      <section className="relative w-full bg-[#17A3DC] text-white py-4 md:py-8 px-6 md:px-12 object-cover">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-3/5 text-left z-10 flex flex-col">
            <h2 className="text-5xl md:text-6xl font-bold font-primary mb-6 underline decoration-white/40 underline-offset-8">
              The Challenge
            </h2>
            <p className="text-xl md:text-2xl font-secondary font-light mb-6">
              A powerful healing system. Limited visibility.
            </p>
            <p className="text-base md:text-lg font-secondary text-white/90 font-light leading-relaxed mb-4">
              SPAARC had already transformed thousands of lives through non-surgical therapy. But beyond South India, awareness was low, and the brand lacked a structured growth engine.
            </p>
            <p className="text-base md:text-lg font-secondary text-white/90 font-light leading-relaxed">
              Local trust was strong. National recognition was the next step.
            </p>
          </div>

          <div className="w-full md:w-2/5 flex justify-center z-10 relative">
            {/* The Challenge Right Side Image */}
            <Image
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-1.png"
              alt="The Challenge"
              className="w-full h-auto object-cover"
              width={800}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* --- THE STRATEGY --- */}
      <section className="relative w-full min-h-[600px] text-white overflow-hidden flex items-center py-16 md:py-24">
        {/* Full Image Background aligned to the left */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-2.png"
            alt="The Strategy"
            className="w-full h-full object-cover"
            width={1920}
            height={1000}
            loading="lazy"
          />
          {/* Subtle mobile overlay to ensure text contrast if image scales poorly */}
          <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 flex justify-end px-6 md:px-12">
          {/* Overlapping Text Card on the Right */}
          <div className="w-full md:w-[600px] lg:w-[650px] md:pl-10">
            <h2 className="text-4xl md:text-6xl font-bold font-primary mb-4 underline underline-offset-8 drop-shadow-md">
              The Strategy
            </h2>
            <p className="text-lg md:text-xl font-secondary font-light text-zinc-200 mb-10 drop-shadow-md">
              Built to scale belief, not just visibility.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-blue-400 drop-shadow-lg backdrop-blur-sm">
                  <ShieldCheck size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-secondary text-white mt-1 md:mt-2 font-medium drop-shadow">Defined a clear brand around healing through strength</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-blue-400 drop-shadow-lg backdrop-blur-sm">
                  <Volume2 size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-secondary text-white mt-1 md:mt-2 font-medium drop-shadow">Turned doctors into trusted digital voices</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-blue-400 drop-shadow-lg backdrop-blur-sm">
                  <Languages size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-secondary text-white mt-1 md:mt-2 font-medium drop-shadow">Built a multilingual digital-first awareness engine</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-blue-400 drop-shadow-lg backdrop-blur-sm">
                  <Target size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-secondary text-white mt-1 md:mt-2 font-medium drop-shadow">Integrated digital, offline, and on-ground campaigns</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="font-primary text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
                  We didn’t market treatments. We built trust at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE EXECUTION --- */}
      <section className="w-full relative overflow-hidden flex flex-col items-center">
        {/* Desktop Execution Image */}
        <Image
          src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-3.png"
          alt="The Execution"
          className="hidden md:block w-full h-auto object-cover"
          width={1920}
          height={1080}
          loading="lazy"
        />
        {/* Mobile Execution Image */}
        <Image
          src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-4.jpg"
          alt="The Execution Mobile"
          className="block md:hidden w-full h-auto object-cover"
          width={768}
          height={1024}
          loading="lazy"
        />
      </section>

      {/* --- THE RESULTS --- */}
      <section className="relative w-full bg-white text-zinc-900 py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col ">
          <h2 className="text-5xl md:text-6xl font-primary font-bold underline decoration-primary/30 underline-offset-8 inline-block text-zinc-800 mb-16">
            The Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start border-b border-zinc-200 pb-16">
            <div className="flex items-start gap-6 w-full">
              <div className="font-primary text-7xl md:text-8xl font-black text-[#1898E0] leading-none shrink-0 tracking-tighter">
                01
              </div>
              <div className="flex flex-col pt-2 md:pt-4 w-full">
                <h3 className="font-primary text-2xl font-bold text-zinc-800 mb-6 uppercase tracking-wide">National Scale</h3>
                <ul className="space-y-6 text-xl font-secondary text-zinc-600 divide-y divide-zinc-100">
                  <li className="pt-2 flex items-start gap-4"><div className="w-2 h-2 bg-primary rounded-lg shrink-0 mt-3"></div> <div><span className="font-bold font-primary text-zinc-800 text-3xl">50+</span> centers across India</div></li>
                  <li className="pt-4 flex items-start gap-4"><div className="w-2 h-2 bg-primary rounded-lg shrink-0 mt-3"></div> <div><span className="font-bold font-primary text-zinc-800 text-3xl">100%</span> awareness in target markets</div></li>
                  <li className="pt-4 flex items-start gap-4"><div className="w-2 h-2 bg-primary rounded-lg shrink-0 mt-2.5"></div> <div>Recognized leader in non-surgical therapy</div></li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6 w-full mt-10 md:mt-0">
              <div className="font-primary text-7xl md:text-8xl font-black text-[#1898E0] leading-none shrink-0 tracking-tighter">
                02
              </div>
              <div className="flex flex-col pt-2 md:pt-4 w-full">
                <h3 className="font-primary text-2xl font-bold text-zinc-800 mb-6 uppercase tracking-wide">Business Impact</h3>
                <ul className="space-y-6 text-xl font-secondary text-zinc-600 divide-y divide-zinc-100">
                  <li className="pt-2 flex items-start gap-4"><div className="w-2 h-2 bg-primary rounded-lg shrink-0 mt-3"></div> <div><span className="font-bold font-primary text-zinc-800 text-3xl">70%</span> awareness for founders</div></li>
                  <li className="pt-4 flex items-start gap-4"><div className="w-2 h-2 bg-primary rounded-lg shrink-0 mt-2.5"></div> <div>Strong patient trust & engagement</div></li>
                  <li className="pt-4 flex items-start gap-4"><div className="w-2 h-2 bg-primary rounded-lg shrink-0 mt-2.5"></div> <div>5-year sustained growth partnership</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SOCIAL PERFORMANCE --- */}
      <section className="relative w-full text-zinc-900 py-6 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-primary text-zinc-800 mb-4">
            Social Performance
          </h2>
          <p className="text-xl font-secondary text-zinc-600 mb-12 ">
            Content didn’t just educate, it built trust in healing without surgery
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              {
                platform: "Instagram",
                title: "Reel Highlight - Wellness Focus",
                metrics: "Click to View",
                href: "https://www.instagram.com/reel/DM-SewQJ9HH/?igsh=YmVjcjRuMWs2Zmww",
                image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-vid-1.mp4",
              },
              {
                platform: "Instagram",
                title: "Reel Highlight - Therapy Success",
                metrics: "Click to View",
                href: "https://www.instagram.com/reel/DV8mvuqgNP0/?igsh=dW92dmdmbjF3aDRl",
                image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-vid-2.mp4",
              },
              {
                platform: "Instagram",
                title: "Reel Highlight - Expert Guidance",
                metrics: "Click to View",
                href: "https://www.instagram.com/reel/DObFmQFiSot/?igsh=YmRoOW93cDdyYW95",
                image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-vid-3.mp4",
              },
              {
                platform: "Instagram",
                title: "Reel Highlight - Brand Vision",
                metrics: "Click to View",
                href: "https://www.instagram.com/reel/DOgBbeejZk_/?igsh=MTFuc3dobGlzaHowOA%3D%3D",
                image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-vid-4.mp4",
              },
            ].map((post, idx) => (
              <a
                key={idx}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${post.title} on ${post.platform}`}
                className="group relative flex flex-col bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-100"
              >
                {/* Video Container (Reel format) */}
                <div className="relative w-full aspect-[9/16] bg-zinc-900 overflow-hidden">
                  <video
                    src={post.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-transform duration-700"
                  >
                    <track kind="captions" />
                  </video>
                </div>
                {/* Card Content */}
                <div className="p-6 flex flex-col items-start text-left z-10 relative bg-white border-t border-zinc-100">
                  <span className="font-secondary text-xs font-bold text-[#1898E0] mb-2 uppercase tracking-widest">{post.platform}</span>
                  <h4 className="font-primary text-zinc-900 font-bold mb-2 leading-snug">{post.title}</h4>
                  <p className="font-secondary text-sm font-medium text-zinc-500 flex items-center gap-2">
                    {post.metrics}
                    <svg className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="mx-auto w-full bg-zinc-50">
        <div className="relative left-1/2 -translate-x-1/2">
          <div className="relative isolate w-full overflow-hidden">
            <Image
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-footer.jpg"
              alt="Ready to build your growth story CTA Desktop Background"
              className="hidden md:block w-full h-[500px] md:h-[600px] object-cover"
              width={1920}
              height={600}
              loading="lazy"
            />
            <Image
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/casestudy/spa-footer-mob.jpg"
              alt="Ready to build your growth story CTA Mobile Background"
              className="block md:hidden h-[500px] w-full object-cover"
              width={768}
              height={500}
              loading="lazy"
            />

            {/* LEFT-aligned text and CTA */}
            <div className="absolute inset-0 z-[1] flex flex-col items-start md:ml-10 justify-start px-6 pt-12 text-left md:pt-14 md:pl-16">
              <h3 className="section-title max-w-[520px] text-left font-primary text-secondary drop-shadow-sm">
                Ready to build your growth story?
              </h3>

              <div className="mt-4 max-w-[520px] section-phara font-secondary text-white drop-shadow-md">
                <span className="text-white block text-left">
                  Great brands are built when purpose meets strategy. At Ayatiworks, we combine brand storytelling, digital ecosystems, and performance marketing to help organizations scale their impact and reach.
                </span>
              </div>

              <div className="flex flex-col w-full sm:w-auto sm:flex-row items-start sm:items-center gap-4 mt-8">
                <CaseStudyModalForm
                  buttonText="Download Case study"
                  caseStudyTitle="SPAARC"
                  className="btn-primary no-print shadow-lg w-full sm:w-auto text-center justify-center flex"
                />

                <Link
                  href="/contact-us"
                  className="btn-primary w-full sm:w-auto text-center justify-center flex"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
