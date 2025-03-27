"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "./actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [state, formAction] = useFormState(login, null);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center relative">
        {/* Updated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3170EE]/10 to-[#304EBA]/10 -z-10"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#3170EE]/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#304EBA]/10 rounded-full blur-3xl"></div>

        <div className="w-full max-w-md px-4 py-8 animate-slide-up">
          <Card className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/10 dark:border-white/10 shadow-lg shadow-blue-500/10 dark:shadow-blue-200/10">
            <CardHeader className="space-y-1 pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-[#1A2B4D] dark:text-white">
                  Welcome back
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back to home</span>
                  </Link>
                </Button>
              </div>
              <CardDescription className="text-[#344256] dark:text-neutral-300">
                Sign in to access your account
              </CardDescription>
            </CardHeader>

            <form action={formAction}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#344256] dark:text-neutral-300"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    required
                    className="bg-background/50 border border-white/10"
                  />
                  {state?.errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {state.errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-[#344256] dark:text-neutral-300"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="bg-background/50 border border-white/10"
                    placeholder="Enter your password"
                  />
                  {state?.errors.password && (
                    <p className="text-sm text-red-500 mt-1">
                      {state.errors.password}
                    </p>
                  )}
                </div>

                <div className="flex justify-end text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-[#2465E9] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </CardContent>

              <CardContent className="pt-0">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9] hover:to-[#14B6A8] text-white transition-all duration-300"
                >
                  Sign In
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-transparent px-2 text-[#344256] dark:text-neutral-300">
                      Don't have an account?
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#3170EE] text-[#3170EE] hover:bg-[#3170EE]/10 hover:text-[#3170EE]"
                  asChild
                >
                  <Link href="/signup">Create Account</Link>
                </Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
