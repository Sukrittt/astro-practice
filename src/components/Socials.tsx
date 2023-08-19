import { motion } from "framer-motion";

import { navMotion, socialItemMotion, socials } from "../config";

const Socials = () => {
  return (
    <motion.div
      className="flex justify-center gap-12 w-full"
      variants={navMotion}
      animate="visible"
      initial="hidden"
    >
      {socials.map((social) => (
        <motion.a
          variants={socialItemMotion}
          key={social.id}
          href={social.href}
          className="text-2xl text-slate-800 hover:underline underline-offset-4"
          target="_blank"
        >
          {social.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Socials;
