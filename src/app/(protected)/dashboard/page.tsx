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
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#0A0A0A] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl font-bold tracking-tight background-animate bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
              Your Time Capsules
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Manage and view your time capsules. Create new ones or unlock
              those that are ready.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {capsules.map((capsule) => (
              <Card
                key={capsule.id}
                className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10 border border-gray-800 bg-[#1E1E1E]/80 backdrop-blur-sm"
              >
                <CardHeader className="flex flex-col space-y-1.5 p-6 pb-4 bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] border-b border-gray-800">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl line-clamp-1 text-white">
                      {capsule.title}
                    </CardTitle>
                    <Badge
                      variant={capsule.isLocked ? "secondary" : "default"}
                      className={`ml-2 shrink-0 ${
                        !capsule.isLocked
                          ? "bg-[#6EE7B7]/20 text-[#6EE7B7] hover:bg-[#6EE7B7]/30"
                          : "bg-[#3B82F6]/20 text-[#3B82F6] hover:bg-[#3B82F6]/30"
                      }`}
                    >
                      {capsule.isLocked ? "Locked" : "Unlocked"}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2 pt-1 text-gray-400">
                    {capsule.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-0 pt-4 flex-grow">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="mr-1.5 h-4 w-4 shrink-0 text-[#6EE7B7]" />
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
                <CardFooter className="p-6 pt-4 mt-auto">
                  <Button
                    variant={capsule.isLocked ? "secondary" : "default"}
                    className={`w-full ${
                      !capsule.isLocked
                        ? "bg-[#6EE7B7] hover:bg-[#6EE7B7]/90"
                        : "bg-[#3B82F6] hover:bg-[#3B82F6]/90"
                    } text-white transition-colors duration-300`}
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

            <Card className="flex flex-col items-center justify-center border-2 border-dashed border-[#3B82F6]/30 p-6 text-center h-full bg-[#1E1E1E]/50 hover:bg-[#1E1E1E]/70 transition-colors backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="rounded-full bg-[#3B82F6]/20 p-3">
                  <Plus className="h-6 w-6 text-[#3B82F6]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white">
                    Create New Capsule
                  </h3>
                  <p className="text-sm text-gray-400">
                    Store memories, messages, and files to be opened in the
                    future.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#6EE7B7] text-white transition-colors duration-300"
                >
                  <Link href="/dashboard/create">Create Capsule</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Floating action button for mobile */}
        <div className="fixed bottom-6 right-6 md:hidden">
          <Button
            size="lg"
            className="h-14 w-14 rounded-full shadow-lg bg-[#3B82F6] hover:bg-[#6EE7B7] text-white transition-colors duration-300"
            asChild
          >
            <Link href="/dashboard/create">
              <Plus className="h-6 w-6" />
              <span className="sr-only">Create Capsule</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
