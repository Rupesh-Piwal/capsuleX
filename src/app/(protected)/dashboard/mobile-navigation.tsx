import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { navigation, brandInfo } from "./navigation-config";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar (Visible only on md screens and above) */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-64 bg-[#121826] border-r border-[#3170EE]/20">
        <div className="flex h-full flex-col">
          {/* Brand Header */}
          <div className="p-4 border-b border-[#3170EE]/20">
            <div className="flex items-center gap-3">
              <brandInfo.icon
                className="h-6 w-6"
                style={{ color: brandInfo.color }}
              />
              <h2 className="text-lg font-semibold text-white">
                {brandInfo.name}
              </h2>
            </div>
          </div>

          {/* Navigation Links */}
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

          {/* Logout Section */}
          <div className="border-t border-[#3170EE]/20 p-4 bg-[#121826]">
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
    </>
  );
};

export default Sidebar;
