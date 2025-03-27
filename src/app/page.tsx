import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Archive, Calendar, Shield } from "lucide-react";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <GridBackground>
        <Navbar />
        <section className="flex-1 flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
          <div className="max-w-6xl py-20 md:py-32 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Preserve Today's Memories for{" "}
              <span className="text-primary">Tomorrow's Discovery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Create digital time capsules to store your thoughts, photos, and
              memories, set to unlock at a future date of your choosing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="px-8">
                <Link href="/auth/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="how-it-works" className="py-20 bg-muted/30 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  className="bg-card rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Create Your First Time Capsule?
              </h2>
              <p className="text-muted-foreground max-w-2xl mb-8">
                Join thousands of people preserving their memories for future
                rediscovery.
              </p>
              <Button size="lg" asChild>
                <Link href="/auth/signup">Create Your Free Account</Link>
              </Button>
            </div>
          </div>
        </section>
      </GridBackground>

      {/* Footer */}
      <footer className="py-8 border-t bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-semibold">TimeCapsule</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TimeCapsule. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
