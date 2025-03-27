"use client";
import React from "react";

import { IconHome, IconMessage } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
import { PillBottle, CirclePlus } from "lucide-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Capsules",
      link: "/about",
      icon: <PillBottle className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Create Capsule",
      link: "/dashboard/create",
      icon: <CirclePlus className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
