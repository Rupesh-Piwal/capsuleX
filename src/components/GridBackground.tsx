import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: React.PropsWithChildren) {
  return (
    <div className="relative bg-[#F5F7FF]">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          // Light mode grid with soft blue-teal gradient overlay
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#2465E9]/5 after:to-[#14B6A8]/5 after:mix-blend-overlay",

          // Dark mode grid with deeper gradient overlay
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "dark:after:bg-gradient-to-r dark:after:from-[#2465E9]/20 dark:after:to-[#14B6A8]/20"
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
