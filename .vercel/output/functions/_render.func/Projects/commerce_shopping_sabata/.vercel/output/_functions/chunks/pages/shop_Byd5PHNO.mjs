/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_31lkWv_f.mjs';
import { c as cn, C as Card, a as CardContent, B as Button$1, $ as $$Layout } from './contact_DFuBl9Wi.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { ChevronRightIcon, DotsHorizontalIcon, CheckIcon, DotFilledIcon, Cross2Icon, MagnifyingGlassIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
/* empty css                         */

const Breadcrumb = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("font-normal text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx(ChevronRightIcon, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(DotsHorizontalIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex  cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "w-4 h-4 ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem]  overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex hover:bg-gray-100 cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "w-4 h-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(DotFilledIcon, { className: "w-4 h-4 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function BreadcrumbDemo() {
  return /* @__PURE__ */ jsx(Breadcrumb, { className: "text-[#555556]", children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/", children: "Inicio" }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(BreadcrumbEllipsis, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle menu" })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "bg-white", align: "start", children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(
          "a",
          {
            title: "Accesorios",
            "aria-label": "Accesorios",
            href: "/es/accesories",
            children: "Accesorios"
          }
        ) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx("a", { title: "Ofertas", "aria-label": "Ofertas", href: "/es/offers", children: "Ofertas" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx("a", { title: "Contacto", "aria-label": "Contacto", href: "/es/contact", children: "Contacto" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { className: "text-black", children: "Tienda" }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { className: "text-black", children: "Todo" }) })
  ] }) });
}

const SearcherShop = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex w-[334px] h-[38px] rounded-md border border-input bg-transparent px-8 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-regular",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
SearcherShop.displayName = "Input";

function Searcher() {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-[340px] h-[38px]", children: [
    /* @__PURE__ */ jsx(
      "svg",
      {
        className: "absolute top-[50%] left-[5%]  -translate-y-[50%] -translate-x-[50%]",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10.502 2.24976C5.9456 2.24976 2.25195 5.94341 2.25195 10.4998C2.25195 15.0561 5.9456 18.7498 10.502 18.7498C12.5098 18.7498 14.351 18.0317 15.7812 16.8397L20.9413 21.9998C21.2342 22.2927 21.7091 22.2927 22.002 21.9998C22.2948 21.7069 22.2948 21.232 22.002 20.9391L16.8419 15.779C18.0339 14.3488 18.752 12.5076 18.752 10.4998C18.752 5.94341 15.0583 2.24976 10.502 2.24976ZM3.75195 10.4998C3.75195 6.77183 6.77403 3.74976 10.502 3.74976C14.2299 3.74976 17.252 6.77183 17.252 10.4998C17.252 12.3639 16.4973 14.0504 15.2749 15.2727C14.0526 16.4951 12.3661 17.2498 10.502 17.2498C6.77403 17.2498 3.75195 14.2277 3.75195 10.4998Z",
            fill: "#71717a"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      SearcherShop,
      {
        className: "absolute",
        type: "text",
        placeholder: "Tacones, blusas, faldas y mas..."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute flex items-center justify-center top-[50%] right-[5%] -translate-y-[50%] -translate-x-[50%] bg-white", children: [
      /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 256 256", children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#71717a",
          d: "M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40"
        }
      ) }),
      /* @__PURE__ */ jsx("span", { className: "text-[#71717a]", children: "B" })
    ] })
  ] });
}

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 bg-gray-200 cursor-pointer items-center rounded-full border-2 border-transparent shadow-inner transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-md ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

function SwitchDemo() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx(Switch, { id: "hot_products" }),
    /* @__PURE__ */ jsx(Label, { children: "Solo tendencias" })
  ] });
}

const MenubarMenu = MenubarPrimitive.Menu;
const Menubar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Root,
  {
    ref,
    className: cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className
    ),
    ...props
  }
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  MenubarPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
const MenubarContent = React.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    MenubarPrimitive.Content,
    {
      ref,
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) })
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  MenubarPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5  items-center justify-center", children: /* @__PURE__ */ jsx(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: " h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  MenubarPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

function MenubarDemo() {
  return /* @__PURE__ */ jsxs(Menubar, { className: "bg-gray-100 ", children: [
    /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { className: "bg-[#fff] rounded-md cursor-pointer", children: "Todo" }) }),
    /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { className: "hover:bg-[#fff] rounded-md cursor-pointer", children: "Tacones" }) }),
    /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { className: "hover:bg-[#fff] rounded-md cursor-pointer", children: "Faldas" }) }),
    /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { className: "hover:bg-[#fff] rounded-md cursor-pointer", children: "Pantalones" }) }),
    /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { className: "hover:bg-[#fff] rounded-md cursor-pointer", children: "Blusas" }) }),
    /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { className: "hover:bg-[#fff] rounded-md cursor-pointer", children: "Lencerias" }) })
  ] });
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  useState(false);
  const [showPanel, setShowPanel] = useState(false);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        className: "flex items-center justify-between gap-1 border shadow-none",
        children: [
          "Filtro",
          /* @__PURE__ */ jsxs(
            "svg",
            {
              width: "17",
              height: "17",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M3 7.24976C3 6.83554 3.33579 6.49976 3.75 6.49976H20.25C20.6642 6.49976 21 6.83554 21 7.24976C21 7.66397 20.6642 7.99976 20.25 7.99976H3.75C3.33579 7.99976 3 7.66397 3 7.24976Z",
                    fill: "black"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M6 11.9997C6 11.5855 6.33579 11.2497 6.75 11.2497H17.25C17.6642 11.2497 18 11.5855 18 11.9997C18 12.4139 17.6642 12.7497 17.25 12.7497H6.75C6.33579 12.7497 6 12.4139 6 11.9997Z",
                    fill: "black"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M9.75 15.9998C9.33579 15.9998 9 16.3355 9 16.7498C9 17.164 9.33579 17.4998 9.75 17.4998H14.25C14.6642 17.4998 15 17.164 15 16.7498C15 16.3355 14.6642 15.9998 14.25 15.9998H9.75Z",
                    fill: "black"
                  }
                )
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-40 bg-white", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Fitrar por" }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx(
        DropdownMenuCheckboxItem,
        {
          checked: showPanel,
          onCheckedChange: setShowPanel,
          children: "Todos"
        }
      ),
      /* @__PURE__ */ jsx(
        DropdownMenuCheckboxItem,
        {
          checked: showStatusBar,
          onCheckedChange: setShowStatusBar,
          children: "Mas vendidos"
        }
      ),
      /* @__PURE__ */ jsx(
        DropdownMenuCheckboxItem,
        {
          checked: showStatusBar,
          onCheckedChange: setShowStatusBar,
          children: "Mas destacados"
        }
      )
    ] })
  ] });
}

const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Cross2Icon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Dialog, { ...props, children: /* @__PURE__ */ jsx(DialogContent, { className: "p-0 overflow-hidden", children: /* @__PURE__ */ jsx(Command, { className: "bg-white [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center px-3 border-b", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(MagnifyingGlassIcon, { className: "w-4 h-4 mr-2 opacity-50 shrink-0" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  Command$1.Empty,
  {
    ref,
    className: "py-6 text-sm text-center font-regular",
    ...props
  }
));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;

function Command_searcher_shop() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open2) => !open2);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(CommandDialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsx(CommandInput, { placeholder: "Escribe el producto que deseas encontrar..." }) }) });
}

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(Cross2Icon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = DialogPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

function Shooping_Product_Item() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Card, { className: "flex w-full h-auto px-4 py-2 border-0 shadow-none bg-none", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center w-full gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-md", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
      "img",
      {
        title: "[Product]",
        src: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
        alt: "[Product]",
        "aria-label": "[Product]",
        className: "object-cover object-center w-full h-full aspect-auto",
        loading: "lazy"
      }
    ) }) }),
    /* @__PURE__ */ jsx("article", { className: "flex justify-center gap-4 text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("p", { className: "overflow-hidden font-semibold w-28 line-clamp-1", children: "Bolso de Mujer de Zara" }),
      /* @__PURE__ */ jsxs("div", { className: "text-slate-500", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("p", { className: "w-auto overflow-hidden font-normal line-clamp-1", children: "Color:" }),
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-[#cf6855] rounded-full border border-gray-300" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "w-auto overflow-hidden font-normal line-clamp-1", children: [
          "Talla: ",
          /* @__PURE__ */ jsx("span", { children: "Chica" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "w-auto overflow-hidden font-normal line-clamp-1", children: [
          "Envio: ",
          /* @__PURE__ */ jsx("span", { children: "Gratis" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "w-auto overflow-hidden font-semibold line-clamp-1", children: "$90.00" }),
        /* @__PURE__ */ jsx("p", { children: "- 1 +" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-1", children: /* @__PURE__ */ jsx(
      Button$1,
      {
        variant: "Naked",
        size: "md",
        className: "p-0 text-red-500 text-md",
        children: "Eliminar"
      }
    ) })
  ] }) }) });
}

const Shooping_Cart_Products = Array.from({ length: 2 }, (_, index) => /* @__PURE__ */ jsx(Shooping_Product_Item, {}, index));
function Shooping_Container_Products$1() {
  return /* @__PURE__ */ jsx(ScrollArea, { className: "absolute flex flex-col w-full p-1 h-96 flex-nowrap", children: Shooping_Cart_Products });
}

function ShoppingCart() {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button$1, { size: "default", children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          className: "absolute top-[50%] left-[13%] -translate-x-[50%] -translate-y-[50%]",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M0 3C0 2.44772 0.447715 2 1 2H3.67703C4.08593 2 4.45364 2.24895 4.6055 2.62861L5.15407 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H8.21106L6.87255 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.63088 18 4.29178 17.7967 4.1179 17.4711C3.94402 17.1455 3.96365 16.7506 4.16895 16.4438L6.55276 12.8819L3 4H1C0.447715 4 0 3.55228 0 3ZM8.35407 12H17.6459L20.0459 6H5.95407L8.35407 12Z",
                fill: "white"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M7.5 21.25C7.5 22.2165 6.7165 23 5.75 23C4.7835 23 4 22.2165 4 21.25C4 20.2835 4.7835 19.5 5.75 19.5C6.7165 19.5 7.5 20.2835 7.5 21.25Z",
                fill: "white"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M18.25 23C19.2165 23 20 22.2165 20 21.25C20 20.2835 19.2165 19.5 18.25 19.5C17.2835 19.5 16.5 20.2835 16.5 21.25C16.5 22.2165 17.2835 23 18.25 23Z",
                fill: "white"
              }
            )
          ]
        }
      ),
      "Revisar Carrito"
    ] }) }),
    /* @__PURE__ */ jsxs(SheetContent, { children: [
      /* @__PURE__ */ jsx(SheetHeader, { className: "p-4", children: /* @__PURE__ */ jsx(SheetTitle, { className: "text-2xl font-semibold", children: "Carrito de Compras" }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          id: "Shooping_Cart_Container",
          "aria-label": "Shooping_Cart_Container",
          className: "flex flex-col items-center",
          children: /* @__PURE__ */ jsx(Shooping_Container_Products$1, {})
        }
      ),
      /* @__PURE__ */ jsx(SheetFooter, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full h-40 gap-1 px-4 text-sm font-medium bg-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-900", children: [
          /* @__PURE__ */ jsx("p", { children: "Duracion del Envio" }),
          /* @__PURE__ */ jsx("span", { children: "10 Dias" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-900", children: [
          /* @__PURE__ */ jsx("p", { children: "Envio" }),
          /* @__PURE__ */ jsx("span", { children: "$0.00" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-900", children: [
          /* @__PURE__ */ jsx("p", { children: "IVA" }),
          /* @__PURE__ */ jsx("span", { children: "16%" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-900", children: [
          /* @__PURE__ */ jsx("p", { children: "Descuento" }),
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "-$100.00" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-900", children: [
          /* @__PURE__ */ jsx("p", { children: "Subtotal" }),
          /* @__PURE__ */ jsx("span", { children: "$314.40" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-900", children: [
          /* @__PURE__ */ jsx("p", { children: "Total" }),
          /* @__PURE__ */ jsx("span", { className: "text-blue-500 ", children: "$214.40" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-normal text-center text-gray-500", children: "Siempre revisa tu carrito antes de finalizar tu compra." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button$1, { className: "w-full", children: "Finalizar Compra" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center text-center text-gray-500", children: [
          /* @__PURE__ */ jsx("p", { className: "px-1", children: "o" }),
          /* @__PURE__ */ jsx(SheetClose, { className: "font-semibold text-blue-500 text-md", children: "Continuar Comprando" })
        ] })
      ] }) })
    ] })
  ] });
}

function Product_Item() {
  return /* @__PURE__ */ jsxs(Card, { className: "flex flex-col items-center justify-start gap-2 border-0 shadow-none w-fit h-52", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "object-cover object-center w-40 h-40",
        src: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
        loading: "lazy",
        alt: "[Product]",
        "aria-label": "[Product]",
        title: "[Product]"
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { className: "flex justify-between text-sm", children: [
      /* @__PURE__ */ jsx("p", {}),
      /* @__PURE__ */ jsx("span", {})
    ] })
  ] });
}

const Products = Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ jsx(Product_Item, {}, index));
function Shooping_Container_Products() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center flex-1 gap-6", children: Products });
}

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b border-b-[#313138] ", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center text-left justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDownIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

function Filters_Everything() {
  return /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "w-full pr-2 ", children: [
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: " py-[9.5px] font-normal text-sm text-[#000]", children: "Precio" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-2", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Disponibilidad" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-3", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Descuentos y Promociones" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-4", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Popularidad" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-5", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Color" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It adheres to the WAI-ARIA design pattern." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-6", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Categoria" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It comes with default styles that matches the other components' aesthetic." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-7", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Talla" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-8", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Material" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-9", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Estilo" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-10", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Ocasion" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-11", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Patron" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-12", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-normal text-sm text-[#000]", children: "Disponibilidad" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })
    ] })
  ] });
}

const $$ShopPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="border-b">  <nav class="flex items-center justify-between z-50 px-[24px] py-[16px]">  ${renderComponent($$result, "BreadcrumbDemo", BreadcrumbDemo, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Breadcrumb/breadcrumb_shop", "client:component-export": "BreadcrumbDemo" })} <div class="flex items-center justify-between">  ${renderComponent($$result, "Searcher", Searcher, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Input/Input_shop", "client:component-export": "Searcher" })}  ${renderComponent($$result, "Avatar", Avatar, {})} </div> </nav> </header> <header class="sticky w-full py-4 bg-white border-b"> <nav class="flex items-center justify-between px-6"> <h1 class="text-2xl font-semibold">Tienda</h1>  ${renderComponent($$result, "MenubarDemo", MenubarDemo, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Menu_Bar/menubar_shop", "client:component-export": "MenubarDemo" })} <div class="flex items-center justify-center gap-4">  ${renderComponent($$result, "DropdownMenuCheckboxes", DropdownMenuCheckboxes, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Drop_Menu/drop_menu_filters_shop", "client:component-export": "DropdownMenuCheckboxes" })}  ${renderComponent($$result, "Button", Button$1, { "className": "h-9 px-1 border", "variant": "Naked" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="transition-colors fill-gray-300 hover:fill-black" d="M2 6.21c0-1.984 0-2.977.659-3.593C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.617C11 3.233 11 4.226 11 6.21v11.58c0 1.984 0 2.977-.659 3.593C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.617C2 20.767 2 19.774 2 17.79zm11 9.19c0-2.074 0-3.111.659-3.756C14.318 11 15.379 11 17.5 11c2.121 0 3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756c-.659.644-1.72.644-3.841.644c-2.121 0-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zm0-9.9c0-1.087 0-1.63.171-2.06a2.293 2.293 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06c0 1.087 0 1.63-.171 2.06a2.293 2.293 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.293 2.293 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"></path></svg>` })}  ${renderComponent($$result, "SwitchDemo", SwitchDemo, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Switch/switch_shop", "client:component-export": "SwitchDemo" })}  <div class="relative inline-block cursor-pointer"> ${renderComponent($$result, "ShoppingCart", ShoppingCart, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Sheet/Shooping_Cart", "client:component-export": "default" })} </div> </div> </nav> </header>  <main class="px-6">  <section class="flex w-full">  <aside class="flex mt-2 border-r pr-2 max-w-[224px] flex-1"> ${renderComponent($$result, "Filters_Everything", Filters_Everything, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Sidebar/Filters_everything", "client:component-export": "default" })} </aside>  <div class="flex flex-1 w-full py-6"> ${renderComponent($$result, "Container_Products", Shooping_Container_Products, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Containers_Scroll_Area/Container_Products", "client:component-export": "default" })} </div> </section> </main>  ${renderComponent($$result, "Command_searcher_shop", Command_searcher_shop, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Shop/Shadcn_Shop/Command/Command_searcher_shop", "client:component-export": "default" })}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Shop/Shop_Page.astro", void 0);

const $$Shop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Shop_Layout", $$Layout, { "title_page": "Tienda", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""], "data-astro-cid-z623rpon": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shop_Page", $$ShopPage, { "data-astro-cid-z623rpon": true })} ` })} `;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/shop.astro", void 0);

const $$file = "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/shop.astro";
const $$url = "/es/shop";

export { $$Shop as default, $$file as file, $$url as url };
