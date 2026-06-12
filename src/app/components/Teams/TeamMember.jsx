"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const gridVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.02 },
  }),
};
/* ===== data (yours) ===== */
const teamMembers = [
  {
    name: "Upendran Nandakumar",
    title: "Founder & CEO",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/sir.jpg",
    highlight: true,
    FaLinkedinIn: "https://in.linkedin.com/in/upendrannandakumar",
  },

  {
    name: "Solomon",
    title: "Chief Creative Officer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/solomon.svg",
    highlight: true,
  },
  {
    name: "Tasmin",
    title: "Brand Services Director",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/tasmin.png",
    highlight: true,
  },
  {
    name: "Gopi",
    title: "Assistant Vice President",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/gopinath.png",
    highlight: true,
  },
  {
    name: "Selva",
    title: "Content - Head",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/selva.svg",
    highlight: true,
  },
  // {
  //   name: "Terence",
  //   title: "Chief Human Resource Officer",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/terence.png",
  //   highlight: true,
  // },
  // {
  //   name: "Rajan",
  //   title: "Senior Art Director",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/rajan.png",
  //   highlight: true,
  // },
  {
    name: "Prasanth",
    title: "Lead Motion Graphic Designer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/prasanth.png",
    highlight: true,
  },

  // {
  //   name: "Daniel Joseph",
  //   title: "Senior SEO Content Strategist & Writer",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/daniel.png",
  //   highlight: true,
  // },
  // {
  //   name: "Palani Muthukumaran",
  //   title: "SEO Manager",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/palani.png",
  //   highlight: true,
  // },
  // {
  //   name: "Hari",
  //   title: "Accounts and Financer",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/hari.png",
  //   highlight: true,
  // },
  {
    name: "Sridhar",
    title: "Digital Marketing Manager",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/sridhar.png",
    highlight: true,
  },
  {
    name: "Gopala krishnan",
    title: "Production Lead",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/gopal.jpg",
    highlight: true,
  },
  {
    name: "Liviya Bharathi",
    title: "Finance Manager",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/female.png",
    highlight: true,
  },
  {
    name: "Jamal",
    title: "Digital Marketing Associate",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/jamal.png",
    highlight: true,
  },
  {
    name: "Srirangan M",
    title: "Senior Graphic Designer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/srirangan.png",
    highlight: true,
  },
  {
    name: "Gopi R",
    title: "Senior Graphic Designer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/gopi-r.png",
    highlight: true,
  },
  {
    name: "Srinath",
    title: "Junior UI/UX Designer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/srinath.png",
    highlight: true,
  },
  // {
  //   name: "Rufus",
  //   title: "Production Manager",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/rufus.png",
  //   highlight: true,
  // },
  {
    name: "SriRamya M",
    title: "Senior Web Developer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/Ramya.png",
    highlight: true,
  },
  {
    name: "Rubankumar S",
    title: "Full stack Devloper ",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/ruban.png",
    highlight: true,
  },
  {
    name: "Balaji V",
    title: "Junior Web Developer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/Balaji.png",
    highlight: true,
  },
  // {
  //   name: "Pushpa",
  //   title: "Junior Digital Marketing Associate",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/pushpa.png",
  //   highlight: true,
  // },

  // {
  //   name: "Alexander",
  //   title: "Senior Motion Graphic Designer",
  //   img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/alexander.png",
  //   highlight: true,
  // },
  {
    name: "Sreekanth",
    title: "Motion Graphic Designer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/sreekanth.png",
    highlight: true,
  },
  {
    name: "Vijaylakshme",
    title: " Motion Graphic Designer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/vijaylakshme.png",
    highlight: true,
  },
  {
    name: "Vijayadharshini",
    title: "Motion Graphic Designer",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/vijayadharshini.png",
    highlight: true,
  },

  {
    name: "Karthick Raja",
    title: "Social Media Executive",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/male.png",
    highlight: true,
  },
  {
    name: "Teepeshwaran",
    title: "Social Media Executive",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/teepesh.png",
    highlight: true,
  },
  {
    name: "Raseena Nilofer",
    title: "Brand Service Executive",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/nilo.png",
    highlight: true,
  },
  {
    name: "Abishek Ramesh",
    title: "Brand Service Executive",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/abishek.png",
    highlight: true,
  },

  {
    name: "Nigilan",
    title: "Admin",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/nigilan.png",
    highlight: true,
  },
  {
    name: "Harini Arumugam",
    title: "-",
    img: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/female.png",
    highlight: true,
  },

  // {
  //   name: "",
  //   title: "",
  //   img: "/assets/teams/.png",
  //   highlight: true,
  // },
];

export default function TeamMember() {
  return (
    <section className="bg-white section">
      <div className="section-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
          variants={gridVariant}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, idx) => (
            <motion.article
              key={`${member.name}-${idx}`}
              className="
                group relative overflow-hidden rounded-2xl
                ring-1 ring-black/5 shadow-sm hover:shadow-lg
                bg-white transition-all duration-500
                flex flex-col hover:bg-primary
              "
              custom={idx}
              variants={cardVariant}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative w-full h-[68vw] sm:h-80 md:h-96 lg:h-[420px] pb-16 sm:pb-20">
                <Image width={800} height={800}
                  src={member.img}
                  alt={member.name || 'Team member'}
                  className="
                    absolute inset-0 z-0 h-full w-full 
                    object-cover object-top
                    transition-transform duration-500 group-hover:scale-105
                  "
                  loading="lazy"
                />

                {/* tint on hover */}
                <div className="absolute inset-0 z-10 bg-black/30 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                {/* bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-28 z-10 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* LinkedIn */}
              {member.FaLinkedinIn && (
                <a
                  href={member.FaLinkedinIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile of ${member.name}`}
                  className="
                    absolute z-30 top-3 right-3 inline-flex h-10 w-10 items-center justify-center
                    rounded-full bg-white text-[#0A66C2] ring-1 ring-black/5 shadow
                    opacity-0 translate-y-1 transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-y-0
                    group-hover:bg-white group-hover:text-[#0A66C2]
                  "
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              )}

              {/* Info Chip */}
              <div
                className="
                  absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4
                "
              >
                <div
                  className="
                    inline-block rounded-xl bg-primary px-3 py-2 sm:px-4 sm:py-3 shadow-md 
                    transition-colors duration-300 group-hover:bg-white
                  "
                >
                  <h3 className="
                    font-primary font-medium text-base sm:text-lg md:text-xl 
                    text-white transition-colors group-hover:text-primary
                  ">
                    {member.name}
                  </h3>
                  {member.title && (
                    <p className="
                      mt-0.5 sm:mt-1 text-[11px] sm:text-sm font-medium uppercase font-secondary 
                      text-white/85 transition-colors group-hover:text-primary/80
                    ">
                      {member.title}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
