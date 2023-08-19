import { useState } from "react";
import { motion } from "framer-motion";

import avatar from "/avatar.jpg";
import { itemMotion, navMotion } from "../../config";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="relative mx-8 mb-12 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <a href="/">
        <img
          src={avatar}
          alt="Sukrit's profile picture"
          className="h-12 w-12 rounded-full object-cover"
        />
      </a>

      <h1 className="text-lg font-bold">
        <a href="/">Sukrit.</a>
      </h1>

      <div
        className="space-y-1.5 cursor-pointer z-50"
        onClick={() => setToggled((prev) => !prev)}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="block h-0.5 w-8 bg-black"
        ></motion.span>
        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="block h-0.5 w-6 bg-black"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 16,
          }}
          className="block h-0.5 w-4 bg-black"
        ></motion.span>
      </div>

      {toggled && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed bg-white bottom-0 h-screen w-full left-0 flex items-center justify-center z-10"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a
              variants={itemMotion}
              href="https://github.com/Sukrittt?tab=repositories"
              target="_blank"
            >
              Projects
            </motion.a>
            <motion.a variants={itemMotion} href="/contact">
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
