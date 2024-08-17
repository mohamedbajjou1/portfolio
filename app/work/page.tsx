"use client";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Java Script" }],
    image: "/images/person-developer.jpeg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullStack",
    title: "project 02",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?",
    stack: [{ name: "next.js" }, { name: "tailwind.css" }, { name: "node.js" }],
    image: "/images/image-2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 03",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?",
    stack: [{ name: "node.js" }, { name: "next.js" }],
    image: "/images/Frontend.jpg",
    live: "",
    github: "",
  },
];

export default function page() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: any }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white min-h-[80vh] flex justify-center py-48 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-4xl leading-none font-bold group-hover:text-green-500 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-green-500 text-xl" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border-white/20 border w-72 space-y-4"></div>
              {/* Buttons */}
              <div className="flex gap-4">
                <div>
                  {/* live project buttons */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex justify-center items-center group">
                          <BsArrowUpRight className="text-3xl group-hover:text-green-500 duration-300 ease-in-out" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                <div className="flex items-center gap-4 ">
                  {/* github project buttons */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex justify-center items-center group">
                          <BsGithub className="text-3xl group-hover:text-green-500 duration-300 ease-in-out" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/10">
                      {/* overlay */}
                      <div className="relative w-full h-full">
                        <img
                          src={project.image}
                          alt="images"
                          className="object-cover w-screen h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
