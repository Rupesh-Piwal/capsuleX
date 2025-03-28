"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, File, Upload, X } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import PageHeader from "@/components/create-form/page-header";
import FileUploader from "@/components/create-form/file-uploader";
import DatePicker from "@/components/create-form/date-picker";
import PrivacyToggle from "@/components/create-form/privacy-toggle";
import SubmitButton from "@/components/create-form/submit-button";

export default function CreateCapsulePage() {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [isPublic, setIsPublic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
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
    <div className="min-h-screen w-full flex flex-col bg-[#F5F7FF] items-center justify-center md:px-4 py-16">
      <div className="w-full max-w-xl ">
        <PageHeader
          title="Create Time Capsule"
          subtitle="Preserve your most cherished memories for the future."
        />

        <Card className="rounded-xl border border-[#2465E9]/10 shadow-md bg-[#fafbfc]">
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
                  Title<span className="text-red-500">*</span>
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
                  Message<span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write a heartfelt message to your future self..."
                  className="min-h-[150px] border-[#2465E9]/30 focus:border-[#2465E9] focus:ring-[#2465E9]/30 resize-none"
                  required
                />
              </div>

              <FileUploader
                selectedFile={selectedFile}
                onFileChange={handleFileChange}
              />

              <DatePicker date={date} onDateChange={setDate} />

              <PrivacyToggle isPublic={isPublic} onToggle={setIsPublic} />
            </CardContent>

            <CardFooter className="border-t border-[#2465E9]/10 p-6 flex flex-col">
              <SubmitButton isLoading={isLoading} disabled={!date} />
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
