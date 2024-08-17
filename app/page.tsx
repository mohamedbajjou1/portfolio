"use client";
import { motion } from "framer-motion";
import Header from "../components/Header";
import "../app/globals.css";
import Stats from "@/components/Stats";

function page() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 1 }}
    >
      <div className="font-jetbrains-mono text-white w-full font-Menlo">
        <div>
          <Header />
          <div>
            <Stats />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
