import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-matcha disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-yellow text-brand-navy border-2 border-brand-yellow font-semibold shadow-md shadow-brand-yellow/30 hover:bg-white hover:text-brand-navy hover:shadow-brand-yellow/50',
        secondary: 'bg-white text-brand-navy border border-brand-matcha/30 shadow-sm hover:bg-brand-matcha-light/40 hover:border-brand-matcha',
        outline: 'border-2 border-brand-matcha text-brand-matcha bg-transparent hover:bg-brand-matcha/10',
        ghost: 'hover:bg-brand-matcha-light/40 text-brand-navy hover:text-brand-matcha',
      },
      size: {
        default: 'h-11 px-8 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-10 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const combinedClassName = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
      return React.cloneElement(child, {
        className: cn(combinedClassName, child.props.className),
        ...props,
      });
    }

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
