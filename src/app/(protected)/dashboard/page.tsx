import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Lock, Plus } from "lucide-react";

export default function DashboardPage() {
  // Sample data for capsules
  const capsules = [
    {
      id: "1",
      title: "Graduation Memories",
      description: "Photos and messages from graduation day",
      unlockDate: "2024-12-31",
      isLocked: true,
      createdAt: "2023-06-15",
    },
    {
      id: "2",
      title: "Wedding Wishes",
      description: "Messages from friends and family on our wedding day",
      unlockDate: "2025-05-20",
      isLocked: true,
      createdAt: "2023-05-20",
    },
    {
      id: "3",
      title: "2023 Reflections",
      description: "My thoughts and goals at the end of 2023",
      unlockDate: "2024-01-01",
      isLocked: false,
      createdAt: "2023-12-31",
    },
    {
      id: "4",
      title: "Birthday Surprise",
      description: "A special message for my future self",
      unlockDate: "2024-08-15",
      isLocked: true,
      createdAt: "2023-08-15",
    },
  ];

  return (
    <div className="container py-6 md:py-8 lg:py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Your Time Capsules
          </h1>
          <p className="text-muted-foreground">
            Manage and view your time capsules. Create new ones or unlock those
            that are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capsules.map((capsule) => (
            <Card
              key={capsule.id}
              className="flex flex-col overflow-hidden transition-all hover:shadow-md hover:shadow-primary/5 border border-border/50"
            >
              <CardHeader className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl line-clamp-1">
                    {capsule.title}
                  </CardTitle>
                  <Badge
                    variant={capsule.isLocked ? "secondary" : "default"}
                    className={`ml-2 shrink-0 ${
                      !capsule.isLocked
                        ? "bg-primary/20 text-primary hover:bg-primary/30"
                        : ""
                    }`}
                  >
                    {capsule.isLocked ? "Locked" : "Unlocked"}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2 pt-1">
                  {capsule.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-0 pt-0 flex-grow">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1.5 h-4 w-4 shrink-0 text-primary/70" />
                  {capsule.isLocked ? (
                    <span>
                      Unlocks on{" "}
                      {new Date(capsule.unlockDate).toLocaleDateString()}
                    </span>
                  ) : (
                    <span>
                      Unlocked on{" "}
                      {new Date(capsule.unlockDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-6 mt-auto">
                <Button
                  variant={capsule.isLocked ? "secondary" : "default"}
                  className={`w-full ${
                    !capsule.isLocked ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  asChild
                >
                  <Link href={`/dashboard/capsules/${capsule.id}`}>
                    {capsule.isLocked ? (
                      <>
                        <Lock className="mr-2 h-4 w-4" /> View Details
                      </>
                    ) : (
                      <>
                        <Eye className="mr-2 h-4 w-4" /> Open Capsule
                      </>
                    )}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Card className="flex flex-col items-center justify-center border border-dashed border-primary/20 p-6 text-center h-full bg-primary/[0.03] hover:bg-primary/[0.05] transition-colors">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Create New Capsule</h3>
                <p className="text-sm text-muted-foreground">
                  Store memories, messages, and files to be opened in the
                  future.
                </p>
              </div>
              <Button asChild>
                <Link href="/dashboard/create">Create Capsule</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Floating action button for mobile */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <Button size="lg" className="h-14 w-14 rounded-full shadow-lg" asChild>
          <Link href="/dashboard/create">
            <Plus className="h-6 w-6" />
            <span className="sr-only">Create Capsule</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
