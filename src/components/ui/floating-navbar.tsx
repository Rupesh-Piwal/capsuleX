"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
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
    icon?: React.ReactNode; // Changed JSX.Element to React.ReactNode
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Always at the same position
        }}
        animate={{
          y: 0,
          opacity: 1, // Always visible
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[90%] md:w-[60%]   fixed top-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2.5 items-center justify-between space-x-3",
          className
        )}
      >
        <Link href="/" className="flex items-center gap-1 md:gap-2">
          <CiTimer className="h-6 w-6" />
          <p>
            Capsule<span className="text-lg font-semibold">X</span>
          </p>
        </Link>
        <div className="flex flex-row gap-3 md:gap-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <Link
          className="text-[#fafafa] bg-black py-2 px-3.5 md:px-6 rounded-3xl text-[14px]"
          href="/login"
        >
          Login
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
