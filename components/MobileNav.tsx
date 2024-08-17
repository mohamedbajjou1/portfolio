"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex-col items-center py-52 space-y-4 lg:hidden block">
      {!isMenuOpen ? (
        <CiMenuFries
          className="cursor-pointer text-white size-8"
          onClick={() => setIsMenuOpen(true)}
        />
      ) : (
        <IoMdClose
          className="cursor-pointer text-white size-8"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div
        className={`h-screen w-full bg-[#232329] transition-all duration-300 ease-in-out text-white absolute inset-0 z-50 lg:hidden top-20 rounded-t-xl  ${
          !isMenuOpen ? "-translate-y-[120vh]" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center w-full h-screen fixed ">
          {links.map((link, index) => {
            return (
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  link.path === pathname && ""
                } capitalize font-medium py-2 text-white transition-all`}
                href={link.path}
                key={index}
              >
                <span className="text-2xl font-extralight w-full hover:text-green-500">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
{
  /*  */
}

{
  /* <div className="flex items-center space-x-3">
<div className="lg:hidden block">
  {!isMenuOpen ? (
    <MenuIcon
      className="cursor-pointer text-white size-6"
      onClick={() => setIsMenuOpen(true)}
    />
  ) : (
    <CloseIcon
      className="cursor-pointer text-white size-6"
      onClick={() => setIsMenuOpen(false)}
    />
  )}
</div>
</div>
<div
className={`h-screen w-full bg-green-500 transition-all duration-300 ease-in-out text-white absolute inset-0 lg:hidden top-20 rounded-t-xl ${
  !isMenuOpen ? "-translate-y-[120vh]" : "translate-y-0"
}`}
>
  
</div> */
}
