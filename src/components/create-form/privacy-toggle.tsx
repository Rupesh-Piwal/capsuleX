import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PrivacyToggleProps {
  isPublic: boolean;
  onToggle: (checked: boolean) => void;
}

export default function PrivacyToggle({
  isPublic,
  onToggle,
}: PrivacyToggleProps) {
  return (
    <>
      <div className="flex items-center space-x-3 mt-4">
        <Switch
          id="public"
          checked={isPublic}
          onCheckedChange={onToggle}
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
    </>
  );
}
