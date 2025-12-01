import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// If using React Router, uncomment below
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function AwardsSection() {
  const [flipped, setFlipped] = useState(Array(4).fill(false));
  const [modalImage, setModalImage] = useState(null);
    const navigate = useNavigate();


  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const awards = [
    {
      title: "TamilNadu Brand Leadership AWARDS -2020",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/aw-4.png",
      backImg: "/assets/awards-4.webp",
      link: "#",
    },
    {
      title: "Indian Achievers AWARD - 2021-2022",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/aw-1.png",
      backImg: "/assets/awards-1.webp",
      link: "#",
    },
    {
      title: "Digital Agency of the YEAR -2022",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/aw-2.png",
      backImg: "/assets/awards-2.webp",
      link: "#",
    },
    {
      title: "Trendsetters of TamilNadu by TIMES OF INDIA -2022",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/aw-3.png",
      backImg: "/assets/awards-3.webp",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-16">
      {/* Heading + Button */}
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-title text-left md:col-span-10"
          >
            Steadily Crushing the Digital Charts!
            <br /> One Award at a Time!
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[300px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex md:justify-end md:col-span-2"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact-us")}
              className="px-6 py-2 text-sm font-medium font-primary text-primary border border-primary rounded-full hover:bg-blue-900 hover:text-white transition"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Awards Cards */}
      {/* Awards Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 section-container">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[3/4] max-w-xs sm:max-w-sm [perspective:1500px] cursor-pointer"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`absolute inset-0 rounded-2xl shadow-lg transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                flipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-md [backface-visibility:hidden] p-6 hover:shadow-2xl">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-32 sm:w-40 object-contain mb-4"
                />
                <p className="text-gray-900 font-medium font-primary text-lg leading-snug text-center">
                  {award.title}
                </p>
                <a
                  href={award.link}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 text-secondary px-4 py-1.5 text-sm sm:text-base font-primary border border-secondary rounded-full hover:text-white hover:bg-secondary transition"
                >
                  KNOW MORE
                </a>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-2xl shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden p-5">
                <img
                  src={award.backImg}
                  alt="Award Back"
                  className="w-full h-full object-cover rounded-lg mb-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImage(award.backImg);
                  }}
                />
                {/* <button
            className="mt-1 font-primary text-secondary border border-secondary hover:bg-secondary hover:text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition"
            onClick={(e) => {
              e.stopPropagation();
              handleFlip(index);
            }}
          >
            FLIP FRONT
          </button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.img
              src={modalImage}
              alt="Award Preview"
              className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
