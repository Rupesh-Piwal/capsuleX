"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, File, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CreateCapsulePage() {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [isPublic, setIsPublic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F7FF] items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1A2B4D]">
            Create
            <span className="bg-gradient-to-r from-[#2465E9] to-[#14B6A8] text-transparent bg-clip-text ml-2">
              Time Capsule
            </span>
          </h1>
          <p className="text-lg text-[#344256] max-w-md mx-auto">
            Preserve your most cherished memories for the future.
          </p>
        </div>

        <Card className="rounded-xl border border-[#2465E9]/10 shadow-md">
          <form onSubmit={handleSubmit}>
            <CardHeader className="border-b border-[#2465E9]/10 pb-4">
              <CardTitle className="text-2xl text-[#1A2B4D]">
                Capsule Details
              </CardTitle>
              <CardDescription className="text-[#344256] mt-1">
                Craft your memory's journey with care and intention.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 p-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-[#1A2B4D] font-medium">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="My Time Capsule"
                  required
                  className="border-[#2465E9]/30 focus:border-[#2465E9] focus:ring-[#2465E9]/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#1A2B4D] font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write a heartfelt message to your future self..."
                  className="min-h-[150px] border-[#2465E9]/30 focus:border-[#2465E9] focus:ring-[#2465E9]/30 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file" className="text-[#1A2B4D] font-medium">
                  Upload File (Optional)
                </Label>
                <div className="mt-2">
                  {!selectedFile ? (
                    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#2465E9]/30 p-8 text-center bg-white/50 hover:bg-[#2465E9]/5 transition-all duration-300">
                      <Upload className="mb-3 h-10 w-10 text-[#2465E9]" />
                      <div className="mb-2 text-sm font-medium text-[#344256]">
                        <span className="text-[#2465E9] hover:text-[#2465E9]/90">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </div>
                      <p className="text-xs text-[#344256]/70 mb-4">
                        Images, videos, documents (max 50MB)
                      </p>
                      <Input
                        id="file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="text-[#2465E9] border-[#2465E9]/30 hover:bg-[#2465E9]/10"
                        onClick={() => document.getElementById("file")?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between rounded-lg border border-[#2465E9]/20 p-4 bg-white shadow-sm">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-md bg-[#2465E9]/10 p-3">
                          <File className="h-8 w-8 text-[#2465E9]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1A2B4D]">
                            {selectedFile.name}
                          </p>
                          <p className="text-xs text-[#344256]">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={removeFile}
                        className="text-[#344256] hover:text-red-500 hover:bg-red-500/10"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="unlock-date"
                  className="text-[#1A2B4D] font-medium"
                >
                  Unlock Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-[#2465E9]/30 hover:border-[#2465E9]",
                        !date && "text-[#344256]"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-[#2465E9]" />
                      {date
                        ? format(date, "PPP")
                        : "Choose your capsule's future date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border-[#2465E9]/20">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="rounded-lg"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center space-x-3 mt-4">
                <Switch
                  id="public"
                  checked={isPublic}
                  onCheckedChange={setIsPublic}
                  className="data-[state=checked]:bg-[#2465E9] data-[state=unchecked]:bg-[#344256]/30"
                />
                <Label htmlFor="public" className="text-[#1A2B4D]">
                  Make this capsule public
                </Label>
              </div>
              <div className="text-sm text-[#344256]/70 mt-2">
                {isPublic
                  ? "Public capsules can be shared with others via a secure link."
                  : "Private capsules remain exclusively yours, hidden from the world."}
              </div>
            </CardContent>

            <CardFooter className="border-t border-[#2465E9]/10 p-6">
              <Button
                type="submit"
                className="w-full bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9]/90 hover:to-[#14B6A8]/90 text-white"
                disabled={isLoading || !date}
              >
                {isLoading ? "Creating Capsule..." : "Seal Your Memory"}
              </Button>
              <p className="text-xs text-center text-[#344256]/70 mt-3">
                Your capsule will remain locked until the chosen unlock date.
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
