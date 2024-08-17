import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "./Social";
import Photo from "./Photo";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <section className="px-8 py-10 text-white">
      <div className="container mx-auto">
        <div className="lg:flex md:flex w-full space-x-8 justify-between flex-rsow items-center mt-[150px]">
          {/* text */}
          <div className="w-1/2 xl:text-left font-mono text-xl">
            <span className="text-xl">Software Developer</span>
            <h1>
              Hello I'm <br />
              <span className="text-4xl">Mohamed</span>
              <span className="text-green-400 text-4xl">Bajjou</span>
            </h1>
            <p className="py-4">
              I excel at crafting elegant digital experiences
              <br /> and I am proficient <br /> in various programing
            </p>
            {/* Button and social */}
            <div className="lg:flex space-x-4 items-center h-32 space-y-2">
              <div className="flex space-x-2 items-center">
                <Button className="border-2 border-green-500 rounded-full px-6 py-1 flex justify-between items-center hover:bg-slate-200 hover:bg-opacity-10 duration-200 ease-in-out">
                  <span className="text-lg text-green-300 mr-2">
                    Download CV
                  </span>
                  <FiDownload className="text-green-300" />
                </Button>
              </div>
              <div className="py-4">
                <Social />
              </div>
            </div>
          </div>
          {/* image */}
          <div className=" order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
