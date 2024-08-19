import Link from "next/link";
import path from "path";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mohamedbajjou1" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mohamed-bajjou-a74985268/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@ayoub_bajjou" },
  { icon: <FaTwitter />, path: "https://x.com" },
];
const social = () => {
  return (
    <div>
      <div className="flex space-x-6">
        {socials.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              target="_blank"
              className={`text-green-500 rounded-full border-2 border-green-500 p-2 hover:text-white duration-200 ease-in-out hover:border-2 hover:border-white`}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default social;
