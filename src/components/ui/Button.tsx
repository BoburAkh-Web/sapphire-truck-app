import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "outline";
  size?: "md" | "lg";
  href?: string;
};

const baseClasses =
  "inline-flex items-center justify-center gap-3 rounded-xl font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

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
    <button type="button" className={classes}>
      {children}
    </button>
  );
}

export default Button;
