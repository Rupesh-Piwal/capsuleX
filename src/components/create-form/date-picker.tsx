import React from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

interface DatePickerProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export default function DatePicker({
  date,
  onDateChange,
  label = "Unlock Date",
  placeholder = "Choose your date",
  className,
  disabled = false,
}: DatePickerProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor="unlock-date" className="text-[#1A2B4D] font-medium">
        {label}
        <span className="text-red-500">*</span>
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-start text-left font-normal border-[#2465E9]/30 hover:border-[#2465E9]",
              !date && "text-[#344256]",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <CalendarIcon className="mr-2 h-5 w-5 text-[#2465E9]" />
            {date ? format(date, "PPP") : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-white border-[#2465E9]/20"
          align="center"
          sideOffset={5}
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            className="rounded-md border shadow"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
