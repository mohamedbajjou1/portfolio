"use client";
import { delay, motion } from "framer-motion";
const HeroImg = "/Hero.png";

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[196px] absolute h-[196px] md:w-[298px] md:h-[298px] lg:w-[380px] lg:h-[380px] xl:h-[498px] xl:w-[498px] mix-blend-lighten"
        >
          <img
            className="object-contain rounded-full"
            src={HeroImg}
            alt="Hero image"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[202px] xl:w-[506px] h-[202px] md:w-[303px] md:h-[303px] xl:h-[506px] lg:w-[390px] lg:h-[390px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
