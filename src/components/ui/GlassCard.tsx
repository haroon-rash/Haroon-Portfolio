import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}

export function GlassCard({
  children,
  className,
  glowColor = "rgba(37, 99, 235, 0.15)", // Default primary glow
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
        }}
      />
      <div className="h-full w-full rounded-2xl p-6">{children}</div>
    </div>
  );
}
