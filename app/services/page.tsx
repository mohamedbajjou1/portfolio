"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { delay, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?",
    href: "",
  },
];

export default function page() {
  return (
    <section className="text-white min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer flex-1 flex flex-col justify-center gap-6 group px-7 py-5 rounded-xl "
            >
              <div className="flex w-full justify-between items-center ">
                <div className="text-5xl font-extralight">{service.num}</div>
                <Link
                  href={service.href}
                  className="group-hover:bg-green-500 w-[70px] h-[70px] rounded-full bg-white transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-[#1c1c22] text-3xl]" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-green-500 transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
