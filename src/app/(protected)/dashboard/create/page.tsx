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
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#0A0A0A] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4 background-animate bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent">
            Create Time Capsule
          </h1>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            Preserve your most cherished memories for the future.
          </p>
        </div>

        <Card className="shadow-2xl rounded-2xl border-none bg-[#1E1E1E]/80 backdrop-blur-xl">
          <form onSubmit={handleSubmit}>
            <CardHeader className="px-6 pt-6 pb-4 bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] rounded-t-2xl border-b border-gray-800">
              <CardTitle className="text-2xl text-white">
                Capsule Details
              </CardTitle>
              <CardDescription className="text-gray-400 mt-1">
                Craft your memory's journey with care and intention.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 p-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-200 font-medium">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="My Time Capsule"
                  required
                  className="bg-[#2A2A2A] border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-200 font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write a heartfelt message to your future self..."
                  className="min-h-[150px] bg-[#2A2A2A] border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6] transition-all duration-300 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file" className="text-gray-200 font-medium">
                  Upload File (Optional)
                </Label>
                <div className="mt-2">
                  {!selectedFile ? (
                    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-700 p-8 text-center bg-[#2A2A2A]/30 hover:bg-[#2A2A2A]/50 transition-all duration-300 ease-in-out">
                      <Upload className="mb-3 h-10 w-10 text-[#6EE7B7]" />
                      <div className="mb-2 text-sm font-medium text-gray-300">
                        <span className="text-[#3B82F6] hover:text-[#6EE7B7]">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </div>
                      <p className="text-xs text-gray-500 mb-4">
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
                        className="text-[#3B82F6] border-gray-700 bg-transparent hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] transition-all duration-300"
                        onClick={() => document.getElementById("file")?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between rounded-lg border border-gray-700 p-4 bg-[#2A2A2A] shadow-md">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-md bg-[#3B82F6]/20 p-3">
                          <File className="h-8 w-8 text-[#3B82F6]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {selectedFile.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={removeFile}
                        className="text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300"
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
                  className="text-gray-200 font-medium"
                >
                  Unlock Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-[#2A2A2A] border-gray-700 text-white hover:border-[#3B82F6] transition-all duration-300",
                        !date && "text-gray-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-[#6EE7B7]" />
                      {date
                        ? format(date, "PPP")
                        : "Choose your capsule's future date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-[#1E1E1E] border-gray-700">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="rounded-lg border border-gray-700"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center space-x-3 mt-4">
                <Switch
                  id="public"
                  checked={isPublic}
                  onCheckedChange={setIsPublic}
                  className="data-[state=checked]:bg-[#3B82F6] data-[state=unchecked]:bg-gray-700"
                />
                <Label htmlFor="public" className="text-gray-200">
                  Make this capsule public
                </Label>
              </div>
              <div className="text-sm text-gray-400 mt-2">
                {isPublic
                  ? "Public capsules can be shared with others via a secure link."
                  : "Private capsules remain exclusively yours, hidden from the world."}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-2 border-t border-gray-800 p-6 bg-[#1A1A1A]/50">
              <Button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#6EE7B7] text-white transition-colors duration-300 ease-in-out"
                disabled={isLoading || !date}
              >
                {isLoading ? "Creating Capsule..." : "Seal Your Memory"}
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Your capsule will remain locked until the chosen unlock date.
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
