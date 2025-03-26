"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  Archive,
  Clock,
  Home,
  LogOut,
  Menu,
  Plus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Capsules", href: "/dashboard/capsules", icon: Archive },
    { name: "Create Capsule", href: "/dashboard/create", icon: Plus },
  ];

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-[#2A2A2A] transition-colors duration-300"
        >
          <Menu className="text-gray-300" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 bg-[#1E1E1E] border-r border-gray-800"
      >
        <div className="flex h-full flex-col">
          <div className="p-4 border-b border-gray-800 bg-[#121212]">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-[#3B82F6]" />
              <h2 className="text-lg font-semibold text-white">TimeCapsule</h2>
            </div>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-[#3B82F6] text-white"
                      : "text-gray-300 hover:bg-[#2A2A2A] hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-gray-800 p-4 bg-[#121212]">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border-2 border-[#3B82F6]/20">
                <AvatarImage
                  src="/placeholder.svg?height=36&width=36"
                  alt="User"
                />
                <AvatarFallback className="bg-[#2A2A2A] text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium leading-none text-white">
                  John Doe
                </p>
                <p className="text-xs text-gray-400 truncate">
                  john@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#0A0A0A] text-white">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-800 bg-[#1E1E1E]/80 backdrop-blur-md px-4 md:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <MobileNav />
            <Clock className="h-6 w-6 text-[#3B82F6]" />
            <h1 className="text-lg font-semibold text-white">TimeCapsule</h1>
          </div>
          <div className="hidden md:flex md:items-center md:gap-2">
            <SidebarTrigger className="text-white hover:bg-[#2A2A2A] p-2 rounded-md transition-colors duration-300">
              <Menu className="h-5 w-5 text-gray-300" />
            </SidebarTrigger>
            <Clock className="h-6 w-6 text-[#3B82F6]" />
            <h1 className="text-lg font-semibold text-white">TimeCapsule</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden md:flex bg-transparent border-gray-700 text-white hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] transition-colors duration-300"
            >
              <Link href="/dashboard/create">
                <Plus className="mr-2 h-4 w-4 text-[#6EE7B7]" />
                Create Capsule
              </Link>
            </Button>

            <Avatar className="h-8 w-8 border-2 border-[#3B82F6]/20">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback className="bg-[#2A2A2A] text-white">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex flex-1">
          {!isMobile && (
            <Sidebar className="hidden md:flex flex-col w-64 border-r border-gray-800 bg-[#1E1E1E]!important">
              <SidebarHeader className="bg-[#121212] border-b border-gray-800">
                <div className="flex items-center gap-2 px-2 py-3">
                  <Clock className="h-6 w-6 text-[#3B82F6]" />
                  <span className="text-lg font-semibold text-white">
                    TimeCapsule
                  </span>
                </div>
              </SidebarHeader>
              <SidebarContent className="flex-1 overflow-y-auto">
                <SidebarMenu>
                  {navigation.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        className={`
                          flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300
                          ${
                            pathname === item.href
                              ? "bg-[#3B82F6] text-white"
                              : "text-gray-300 hover:bg-[#2A2A2A] hover:text-white"
                          }
                        `}
                      >
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter className="border-t border-gray-800 bg-[#121212]">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="flex items-center text-white hover:bg-[#2A2A2A] px-3 py-2 rounded-md transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        <Avatar className="mr-2 h-5 w-5 border border-[#3B82F6]/20">
                          <AvatarImage
                            src="/placeholder.svg?height=20&width=20"
                            alt="User"
                          />
                          <AvatarFallback className="bg-[#2A2A2A] text-white">
                            JD
                          </AvatarFallback>
                        </Avatar>
                        <span>John Doe</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="flex items-center text-red-400 hover:bg-red-500/10 px-3 py-2 rounded-md transition-colors duration-300"
                    >
                      <Link href="/auth/login">
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>Logout</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
          )}
          <main className="flex-1 bg-[#121212]/50 backdrop-blur-sm overflow-y-auto md:ml-64">
            <div className="h-full w-full p-4 md:p-6">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
