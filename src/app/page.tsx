import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 text-center md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Time Capsule
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          Preserve your memories today, rediscover them tomorrow. Create digital
          time capsules to be opened at a future date.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/login">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
