import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Archive, Calendar, Shield } from "lucide-react";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { CiTimer } from "react-icons/ci";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FF]">
      <GridBackground>
        <Navbar />
        <section className="flex-1 flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
          <div className="absolute inset-0  -z-10"></div>
          <div className="max-w-6xl py-20 md:py-32 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#1A2B4D]">
              Preserve Today's Memories for{" "}
              <span className="bg-gradient-to-r from-[#2465E9] to-[#14B6A8] text-transparent bg-clip-text">
                Tomorrow's Discovery
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#344256] max-w-3xl mx-auto mb-10">
              Create digital time capsules to store your thoughts, photos, and
              memories, set to unlock at a future date of your choosing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="w-[80%] mx-auto md:w-[20%] bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9]/90 hover:to-[#14B6A8]/90 text-white "
              >
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-[#1A2B4D]">
                How It Works?
              </h2>
              <p className="text-[#344256] max-w-2xl mx-auto">
                Create, store, and rediscover your memories with just a few
                simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Archive,
                  title: "Create Your Capsule",
                  text: "Add messages, photos, videos, and other digital mementos to your time capsule.",
                },
                {
                  icon: Calendar,
                  title: "Set Unlock Date",
                  text: "Choose when your capsule will unlock - from days to decades in the future.",
                },
                {
                  icon: Shield,
                  title: "Secure Storage",
                  text: "Your memories are securely stored until the unlock date arrives.",
                },
              ].map(({ icon: Icon, title, text }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-[#2465E9]/10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2465E9]/10 to-[#14B6A8]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#2465E9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A2B4D]">
                    {title}
                  </h3>
                  <p className="text-[#344256]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#3170EE] to-[#304EBA] border border-[#2465E9]/20 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#fafafa]">
                Ready to Create Your First Time Capsule?
              </h2>
              <p className="text-[#ffffff] max-w-2xl mb-8">
                Join thousands of people preserving their memories for future
                rediscovery.
              </p>
              <Button size="lg" asChild className="bg-[#fafafa] text-[#3157C7]">
                <Link href="/auth/signup">Create Your Free Account</Link>
              </Button>
            </div>
          </div>
        </section>
      </GridBackground>

      {/* Footer */}
      <footer className="py-8 border-t bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center gap-1 md:gap-2">
            <CiTimer className="h-6 w-6" />
            <p className="text-[#1A2B4D]">
              Capsule
              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#3170EE] to-[#304EBA]">
                X
              </span>
            </p>
          </Link>
          <div className="text-sm text-[#344256]">
            © {new Date().getFullYear()} TimeCapsule. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
