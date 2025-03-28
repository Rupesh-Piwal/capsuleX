import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MobileNavigation } from "../app/(protected)/dashboard/mobile-navigation";
import { CiTimer } from "react-icons/ci";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-[#3170EE]/20 bg-[#F5F7FF] backdrop-blur-md px-4 md:px-6">
      <div className="flex items-center gap-2">
        <MobileNavigation />
        <Link href="/dashboard" className="flex items-center gap-1 md:gap-2">
          <CiTimer className="h-6 w-6" />
          <p className="text-[#1A2B4D]">
            Capsule
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#3170EE] to-[#304EBA]">
              X
            </span>
          </p>
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#3170EE]/90 hover:to-[#304EBA]/90 text-white transition-colors duration-300 px-3 py-1"
        >
          <Link href="/dashboard/create">
            <Plus className="h-4 w-4" />
            Create Capsule
          </Link>
        </Button>
      </div>
    </header>
  );
}
