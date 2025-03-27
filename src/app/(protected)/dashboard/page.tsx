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
    <div className="min-h-screen flex flex-col bg-[#F5F7FF]">
      <div className="max-w-6xl mx-auto w-full flex-1 py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1A2B4D]">
            Your Time
            <span className="bg-gradient-to-r from-[#2465E9] to-[#14B6A8] text-transparent bg-clip-text ml-2">
              Capsules
            </span>
          </h1>
          <p className="text-lg text-[#344256] max-w-2xl mx-auto">
            Manage and view your time capsules. Create new ones or unlock those
            that are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capsules.map((capsule) => (
            <Card
              key={capsule.id}
              className="bg-white rounded-xl border border-[#2465E9]/10 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="border-b border-[#2465E9]/10 pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-[#1A2B4D] line-clamp-1">
                    {capsule.title}
                  </CardTitle>
                  <Badge
                    variant={capsule.isLocked ? "secondary" : "default"}
                    className={`ml-2 ${
                      capsule.isLocked
                        ? "bg-[#2465E9]/10 text-[#2465E9]"
                        : "bg-[#14B6A8]/10 text-[#14B6A8]"
                    }`}
                  >
                    {capsule.isLocked ? "Locked" : "Unlocked"}
                  </Badge>
                </div>
                <CardDescription className="text-[#344256] line-clamp-2 pt-2">
                  {capsule.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-4">
                <div className="flex items-center text-sm text-[#344256]">
                  <Clock className="mr-2 h-4 w-4 text-[#2465E9]" />
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
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9]/90 hover:to-[#14B6A8]/90 text-white"
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

          {/* Create New Capsule Card */}
          <Card className="border-2 border-dashed border-[#2465E9]/30 bg-[#F5F7FF] hover:bg-[#F5F7FF]/70 transition-colors flex flex-col items-center justify-center text-center p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2465E9]/10 to-[#14B6A8]/10 flex items-center justify-center">
                <Plus className="h-6 w-6 text-[#2465E9]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2B4D] mb-2">
                  Create New Capsule
                </h3>
                <p className="text-sm text-[#344256] max-w-xs">
                  Store memories, messages, and files to be opened in the
                  future.
                </p>
              </div>
              <Button
                asChild
                className="mt-4 bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9]/90 hover:to-[#14B6A8]/90 text-white"
              >
                <Link href="/dashboard/create">Create Capsule</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <Button
          size="lg"
          asChild
          className="rounded-full w-14 h-14 bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9]/90 hover:to-[#14B6A8]/90 text-white shadow-lg"
        >
          <Link href="/dashboard/create">
            <Plus className="h-6 w-6" />
            <span className="sr-only">Create Capsule</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
