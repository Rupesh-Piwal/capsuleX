"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Header } from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F7FF]">
      <Header />
      <main className="flex-1  backdrop-blur-sm overflow-y-auto">
        <div className="h-full w-full p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
