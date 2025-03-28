import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1A2B4D]">
        {title.split(" ")[0]}
        <span className="bg-gradient-to-r from-[#2465E9] to-[#14B6A8] text-transparent bg-clip-text ml-2">
          {title.split(" ").slice(1).join(" ")}
        </span>
      </h1>
      <p className="text-lg text-[#344256] max-w-md mx-auto">{subtitle}</p>
    </div>
  );
}
