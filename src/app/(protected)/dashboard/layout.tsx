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
  Settings,
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
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-sidebar">
        <div className="flex h-full flex-col">
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold">TimeCapsule</h2>
            </div>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-sidebar-border p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border-2 border-primary/10">
                <AvatarImage
                  src="/placeholder.svg?height=36&width=36"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">
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
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-md px-4 md:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <MobileNav />
            <Clock className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-semibold">TimeCapsule</h1>
          </div>
          <div className="hidden md:flex md:items-center md:gap-2">
            <SidebarTrigger />
            <Clock className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-semibold">TimeCapsule</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden md:flex"
            >
              <Link href="/dashboard/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Capsule
              </Link>
            </Button>

            <Avatar className="h-8 w-8 border-2 border-primary/10">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex flex-1">
          {!isMobile && (
            <Sidebar>
              <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="text-lg font-semibold">TimeCapsule</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  {navigation.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
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
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <div className="flex items-center">
                        <Avatar className="mr-2 h-5 w-5 border border-primary/10">
                          <AvatarImage
                            src="/placeholder.svg?height=20&width=20"
                            alt="User"
                          />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span>John Doe</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/auth/login">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
          )}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
