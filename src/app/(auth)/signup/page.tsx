"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { signup } from "./actions";
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

export default function SignUpPage() {
  const [state, formAction] = useFormState(signup, null);

  return (
    <div className="h-[100%] w-full flex flex-col">
      <div className="flex-1 flex items-center justify-center relative px-4 sm:px-0">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3170EE]/10 to-[#304EBA]/10 -z-10" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 sm:w-64 sm:h-64 bg-[#3170EE]/10 rounded-full blur-3xl" />
        <div className="absolute -top-16 -left-16 w-40 h-40 sm:w-64 sm:h-64 bg-[#304EBA]/10 rounded-full blur-3xl" />

        <div className="w-full max-w-md py-6 sm:py-8 animate-slide-up">
          <Card className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/10 dark:border-white/10 shadow-lg shadow-blue-500/10 dark:shadow-blue-200/10 mx-2 sm:mx-0">
            <CardHeader className="space-y-1 px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl sm:text-2xl font-bold text-[#1A2B4D] dark:text-white">
                  Create an account
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Link href="/">
                    <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="sr-only">Back to home</span>
                  </Link>
                </Button>
              </div>
              <CardDescription className="text-[#344256] dark:text-neutral-300 text-sm sm:text-base">
                Sign up to access all features
              </CardDescription>
            </CardHeader>

            <form action={formAction}>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#344256] dark:text-neutral-300 text-sm sm:text-base"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    required
                    className="bg-background/50 border border-white/10 h-10 sm:h-11 text-sm sm:text-base"
                  />
                  {state?.errors.email && (
                    <p className="text-xs sm:text-sm text-red-500 mt-1">
                      {state.errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-[#344256] dark:text-neutral-300 text-sm sm:text-base"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="bg-background/50 border border-white/10 h-10 sm:h-11 text-sm sm:text-base"
                    placeholder="Create a password"
                  />
                  {state?.errors.password && (
                    <p className="text-xs sm:text-sm text-red-500 mt-1">
                      {state.errors.password}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-[#344256] dark:text-neutral-300 text-sm sm:text-base"
                  >
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="bg-background/50 border border-white/10 h-10 sm:h-11 text-sm sm:text-base"
                    placeholder="Confirm your password"
                  />
                  {state?.errors.confirmPassword && (
                    <p className="text-xs sm:text-sm text-red-500 mt-1">
                      {state.errors.confirmPassword}
                    </p>
                  )}
                </div>
              </CardContent>

              <CardContent className="pt-0 px-4 sm:px-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9] hover:to-[#14B6A8] text-white transition-all duration-300 h-10 sm:h-11 text-sm sm:text-base"
                >
                  Sign Up
                </Button>

                <div className="relative my-4 sm:my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-transparent px-2 text-[#344256] dark:text-neutral-300 text-xs sm:text-sm">
                      Already have an account?
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#3170EE] text-[#3170EE] hover:bg-[#3170EE]/10 hover:text-[#3170EE] h-10 sm:h-11 text-sm sm:text-base"
                  asChild
                >
                  <Link href="/login">Sign In Instead</Link>
                </Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
