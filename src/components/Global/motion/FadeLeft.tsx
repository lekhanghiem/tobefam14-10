"use client";

import { motion } from "framer-motion";
import { motionProps } from "../../../types/types";

const FadeLeft = ({ children, className }: motionProps) => {
  return (
    <motion.div
      className={`${className && className}`}
      initial={{ opacity: 0, translateX: -60 }}
      whileInView={{
        opacity: 1,
        translateX: -0,
        transition: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};
export default FadeLeft;
