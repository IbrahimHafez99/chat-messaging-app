import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/";
const buttonVairants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-small font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        large: "h-11 px-8",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVairants> {
  isLoading?: boolean;
}

const Button = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVairants({
          variant,
          size,
          className,
        })
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
