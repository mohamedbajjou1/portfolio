"use client";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCycle } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const MobileNav = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  return (
    <nav className="stitcky top-0 inset-x-0 h-screen -z-10">
      <div className="mx-auto h-full px-4 flex items-center">
        <div className="relative z-40">
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            onClick={() => toggleMobileNav()}
            className="flex flex-col space-y-1"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-7 h-px bg-green-500 block"
            ></motion.span>
            <motion.span
              variants={{ closed: { opcity: 1 }, open: { opacity: 0 } }}
              className="w-7 h-px bg-green-500 block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-7 h-px bg-green-500 block"
            ></motion.span>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <motion.div
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.05,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "100%",
                  transition: {
                    type: "spring",
                    bounce: 0.05,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 space-y-10 px-6 mx-auto py-10 flex flex-col justify-center bg-[#1c1c22] z-30"
            >
              <motion.div
                variants={{
                  open: { x: "0%", opacity: 1 },
                  closed: { x: "-25%", opacity: 0 },
                }}
              >
                <ul className="space-y-5">
                  <li>
                    <Link className="text-4xl font-bold" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-4xl font-bold" href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="text-4xl font-bold" href="/resume">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link className="text-4xl font-bold" href="/work">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link className="text-4xl font-bold" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <div className="w-full bg-white h-px"></div>
              <motion.div
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
              >
                <ul className="flex items-center gap-x-5 justify-center">
                  <li>
                    <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
