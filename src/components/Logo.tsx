import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: 'auto' | 'light' | 'dark';
}

export function Logo({ className = "w-10 h-10", variant = 'auto' }: LogoProps) {
  // Variant 'auto' uses tailwind dark: modifiers
  // Variant 'light' is always the green background version
  // Variant 'dark' is always the white background version
  
  const containerClasses = cn(
    "relative rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden border-2",
    variant === 'auto' && "bg-primary dark:bg-white border-white dark:border-primary",
    variant === 'light' && "bg-primary border-white",
    variant === 'dark' && "bg-white border-primary",
    className
  );

  const iconClasses = cn(
    "w-[70%] h-[70%] transition-colors duration-500",
    variant === 'auto' && "fill-white dark:fill-primary",
    variant === 'light' && "fill-white",
    variant === 'dark' && "fill-primary"
  );

  return (
    <div className={containerClasses}>
      {/* Inner thin border/line effect from the image */}
      <div className={cn(
        "absolute inset-1 rounded-[calc(1rem-4px)] border pointer-events-none opacity-30",
        variant === 'auto' && "border-white dark:border-primary",
        variant === 'light' && "border-white",
        variant === 'dark' && "border-primary"
      )} />
      
      <svg viewBox="0 0 100 100" className={iconClasses}>
        {/* Stylized Italic T */}
        <path d="M22 20 H78 L74 35 H56 L46 80 H30 L40 35 H22 Z" />
        {/* The Dot */}
        <circle cx="78" cy="74" r="10" />
      </svg>
    </div>
  );
}
