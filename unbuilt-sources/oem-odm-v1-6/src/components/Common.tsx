import React from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20",
      secondary: "bg-slate-900 text-white hover:bg-black shadow-lg",
      outline: "border-2 border-red-600 text-red-600 hover:bg-red-50",
      ghost: "hover:bg-slate-100 text-slate-600",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  dark = false,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
}) => (
  <div className={cn("max-w-3xl mb-12 sm:mb-20", centered && "mx-auto text-center")}>
    {eyebrow && (
      <span className="inline-block text-red-600 font-bold tracking-widest text-xs uppercase mb-3 px-2 border-l-2 border-red-600">
        {eyebrow}
      </span>
    )}
    <h2 className={cn(
      "text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]",
      dark ? "text-white" : "text-slate-900"
    )}>
      {title}
    </h2>
    {description && (
      <p className={cn(
        "text-lg leading-relaxed",
        dark ? "text-slate-400" : "text-slate-600"
      )}>
        {description}
      </p>
    )}
  </div>
);

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-xl rounded-sm p-6 sm:p-8",
    className
  )}>
    {children}
  </div>
);
