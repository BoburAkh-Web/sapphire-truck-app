import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "accent";
  href?: string;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses = {
  primary:
    "bg-brand-blue hover:bg-brand-blue/90 focus-visible:outline-brand-blue",
  accent: "bg-brand-red hover:bg-brand-red/90 focus-visible:outline-brand-red",
};

function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
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
