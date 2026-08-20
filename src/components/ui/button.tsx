import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-5 py-2.5 rounded-lg font-medium text-sm border border-white bg-transparent text-white transition-all duration-200 hover:bg-white hover:text-ink",
        className
      )}
      {...props}
    />
  );
}