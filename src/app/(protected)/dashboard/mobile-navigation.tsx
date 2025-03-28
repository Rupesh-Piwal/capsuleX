import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut } from "lucide-react";
import { navigation, brandInfo } from "./navigation-config";
import { usePathname } from "next/navigation";

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-[#3170EE]/20 transition-colors duration-300"
        >
          <Menu className="text-gray-300" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 bg-gradient-to-b from-[#121826] to-[#0D1220] border-r border-[#3170EE]/20"
      >
        <div className="flex h-full flex-col">
          <div className="p-4 border-b border-[#3170EE]/20 bg-[#121826]">
            <div className="flex items-center gap-3">
              <brandInfo.icon className="h-6 w-6 text-[brandInfo.color]" />
              <h2 className="text-lg font-semibold text-white">
                {brandInfo.name}
              </h2>
            </div>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-[#3170EE] to-[#304EBA] text-white"
                      : "text-gray-300 hover:bg-[#3170EE]/10 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-[#3170EE]/20 p-4 bg-[#121826]">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-red-400 hover:bg-red-500/10"
                asChild
              >
                <Link href="/logout">
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Logout</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
