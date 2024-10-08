"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState();

  return (
    <nav className="flex w-full font-mono h-20 bg-[#1c1c22] py-6 px-12 text-white justify-between items-center">
      {/* {Logo} */}
      <h1>
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Bajjou <span className="text-green-300">.</span>
          </h1>
        </Link>
      </h1>
      <div className="hidden lg:block border border-green-500 px-7 py-3 rounded-full space-x-6">
        {links.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && "text-green-500"}
              relative focus-visible:outline capitalize font-medium px-2 py-4`}
              href={link.path}
              key={index}
            >
              <span className="text-lg">{link.name}</span>
            </Link>
          );
        })}
      </div>
      <div>
        <MobileNav />
      </div>
    </nav>
  );
}
