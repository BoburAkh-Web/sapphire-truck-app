import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "outline";
  size?: "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const baseClasses =
  "group relative isolate inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl font-bold text-white transition duration-300 before:pointer-events-none before:absolute before:inset-y-0 before:-left-1/2 before:-z-10 before:w-1/3 before:-skew-x-20 before:bg-white/25 before:transition-[left] before:duration-700 hover:-translate-y-0.5 hover:before:left-[130%] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses = {
  primary:
    "bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue",
  accent:
    "bg-brand-red shadow-[0_12px_40px_-12px] shadow-brand-red/70 hover:bg-brand-red/90 focus-visible:outline-brand-red",
  outline:
    "border border-white/15 bg-black/30 hover:bg-white/10 focus-visible:outline-white",
};

const sizeClasses = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4.5 text-base",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export default Button;
