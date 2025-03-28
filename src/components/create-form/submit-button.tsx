import React from "react";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isLoading: boolean;
  disabled: boolean;
}

export default function SubmitButton({
  isLoading,
  disabled,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full bg-gradient-to-br from-[#3170EE] to-[#304EBA] hover:from-[#2465E9]/90 hover:to-[#14B6A8]/90 text-white"
      disabled={disabled}
    >
      {isLoading ? "Creating Capsule..." : "Seal Your Memory"}
    </Button>
  );
}
