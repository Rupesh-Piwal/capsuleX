import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: React.PropsWithChildren) {
  return (
    <div className="relative bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
