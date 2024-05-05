import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md text-md font-medium transition-colors",
  {
    variants: {
      variant: {

        // Palette Buttons
        Nyanza: "bg-[#E4FDE1] text-black shadow-md",
        Purpureus: "bg-[##dda9ff] text-black shadow-md",
        Russian_Violet: "bg-[#330036] text-white shadow-md",
        Accept: "bg-[#91FF8F] text-black shadow-md",
        Delete: "bg-[#ef7674] text-black shadow-md",
        Powder_Blue: "bg-[#AAC7E6] text-black shadow-md",
        Platinum: "bg-[#e8e8e8] text-black shadow-md",
        Timberwolf: "bg-[#D3CCCC] text-black shadow-md",
        Charcoal: "bg-[#40424E] text-white shadow-md",
        Ash_Gray: "bg-[#C4CCBC] text-black shadow-md",

        // Nav Home
        Nav_Home_Btn_Login:"",
        Nav_:"",

        // Nav Login & Register
        

        // Custom Variants
        LogOn: "w-[300px] text-base border py-2 rounded-none border-zinc-500 hover:bg-black hover:text-white mt-3",
        SocialNetBtn: "border bg-white shadow-md"

      },
      size: {
        // Normal Sizes
        md: "h-10 rounded-md px-4",
        lg: "h-10 rounded-md px-8",
        xl: "h-10 rounded-md px-20",
        //Custom Sizes
        SocialNetSize: "h-auto w-auto px-7 py-2 rounded-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "Platinum",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };