"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CiTimer } from "react-icons/ci";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[90%] md:w-[60%] fixed top-4 inset-x-0 mx-auto rounded-full z-[5000] px-4 py-2.5 items-center justify-between space-x-3",
          "bg-white/30 dark:bg-black/30 backdrop-blur-xl",
          "border border-white/10 dark:border-white/10",
          "shadow-lg shadow-blue-500/10 dark:shadow-blue-200/10",
          className
        )}
      >
        <Link href="/" className="flex items-center gap-1 md:gap-2">
          <CiTimer className="h-6 w-6 text-[#2465E9]" />
          <p className="text-[#1A2B4D]">
            Capsule
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#3170EE] to-[#304EBA]">
              X
            </span>
          </p>
        </Link>
        <div className="flex flex-row gap-3 md:gap-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-[#344256] dark:text-neutral-50",
                "hover:text-transparent bg-clip-text bg-gradient-to-br from-[#2465E9] to-[#14B6A8]",
                "transition-colors duration-300 ease-in-out"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <Link
          className="text-white bg-gradient-to-br from-[#3170EE] to-[#304EBA] 
          py-2 px-3.5 md:px-6 rounded-3xl text-[14px] 
          hover:from-[#2465E9]/90 hover:to-[#14B6A8]/90 
          transition-all duration-300 ease-in-out"
          href="/login"
        >
          Login
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
