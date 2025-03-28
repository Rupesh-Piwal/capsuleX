import React from "react";
import { File, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FileUploaderProps {
  selectedFile: File | null;
  onFileChange: (file: File | null) => void;
}

export default function FileUploader({
  selectedFile,
  onFileChange,
}: FileUploaderProps) {
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  const removeFile = () => {
    onFileChange(null);
  };

  return (
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
              onChange={handleFileInputChange}
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
  );
}
