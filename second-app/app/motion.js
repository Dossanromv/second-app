"use client";
import { motion } from "motion/react";

// ОБЯЗАТЕЛЬНО добавь { children } здесь в скобках:
export default function Hero({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl text-center space-y-10 px-4 mt-10 flex flex-col items-center mx-auto"
    >
      {children}
    </motion.div>
  );
}