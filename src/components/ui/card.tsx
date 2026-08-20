import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export default function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white bg-transparent p-6 transition-colors duration-200 hover:bg-white/5",
        className
      )}
      {...props}
    />
  );
}