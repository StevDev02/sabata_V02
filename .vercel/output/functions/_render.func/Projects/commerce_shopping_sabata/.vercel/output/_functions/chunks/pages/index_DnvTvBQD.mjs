/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, e as renderComponent } from '../astro_31lkWv_f.mjs';
import { c as cn, $ as $$Layout } from './contact_4IoN-AP3.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useRef } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import '../index.83dd380a_CHlXSEmK.mjs';
import 'clsx';

function IconHamburguesa() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "17px", height: "17px", viewBox: "0 0 48 48", children: /* @__PURE__ */ jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4", d: "M7.95 11.95h32m-32 12h32m-32 12h32" }) }) });
}
function LogoHome() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white flex items-center gap-2 pr-4 justify-center rounded-3xl h-[35px] w-[100px]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center bg-black rounded-full w-[33px] h-[33px]  ", children: /* @__PURE__ */ jsx(IconHamburguesa, {}) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-black text-font_Poppins", children: "MENU" })
  ] });
}

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex w-full flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "flex gap-12 list-none items-center justify-center",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center  justify-center  bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " "
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0  text-black  data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute  bg-white w-[1320px]  -left-[50%] -z-50 -top-[40%] flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-cente  relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden  bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 " })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

function NavigationMenuDemo() {
  return /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: "text-font_Poppins", children: "Productos" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: " flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap", children: [
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "#",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo S" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(ListItem, { className: "-ml-10 bg-transparent", href: "/docs", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md ", children: "Modelo X" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                children: "Visitar"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                children: "Ordenar"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/installation",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo L" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/primitives/typography",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo M" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/primitives/typography",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo SM" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/primitives/typography",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo XL" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs/primitives/typography", children: /* @__PURE__ */ jsxs("ul", { className: " border-l pl-10 h-[280px] justify-center  flex flex-col gap-5 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ", children: [
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Mas Vendidos" }),
          /* @__PURE__ */ jsxs("li", { className: "relative text_link_lateral_inline", children: [
            "Populares",
            " "
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "relative text_link_lateral_inline", children: [
            "Descuentos",
            " "
          ] }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Productos nuevos" }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Recientes" }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Favoritos" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: "text-font_Poppins", children: "Accesorios" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: " flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap", children: [
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/primitives/typography",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo S" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(ListItem, { className: "-ml-10 bg-transparent", href: "/docs", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md ", children: "Modelo X" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                children: "Visitar"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                children: "Ordenar"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/installation",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo L" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/primitives/typography",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo M" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs/primitives/typography", children: /* @__PURE__ */ jsxs("ul", { className: " border-l pl-10 h-[280px] justify-center  flex flex-col gap-8 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ", children: [
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Bolsos" }),
          /* @__PURE__ */ jsxs("li", { className: "relative text_link_lateral_inline", children: [
            "Carteras",
            " "
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "relative text_link_lateral_inline", children: [
            "Relojes",
            " "
          ] }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Anillos" }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Tobilleras" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: "text-font_lemon", children: "sabata" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: " flex cursor-auto items-center relative justify-center pb-8 pt-20 w-[1100px]", children: [
        /* @__PURE__ */ jsx(ListItem, { className: "bg-transparent", href: "/es/shop/", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Tacones" })
        ] }) }),
        /* @__PURE__ */ jsx(ListItem, { className: "-ml-16 bg-transparent", href: "/es/shop/", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md ", children: "Faldas" })
        ] }) }),
        /* @__PURE__ */ jsx(ListItem, { className: "-ml-16 bg-transparent", href: "/es/shop/", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Pantalones" })
        ] }) }),
        /* @__PURE__ */ jsx(ListItem, { className: "-ml-16 bg-transparent", href: "/es/shop/", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Blusas" })
        ] }) }),
        /* @__PURE__ */ jsx(ListItem, { className: "-ml-16 bg-transparent", href: "/es/shop/", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Lencerias" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: "text-font_Poppins", children: "Ofertas" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: " flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap", children: [
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/primitives/typography",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo S" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(ListItem, { className: "-ml-10 bg-transparent", href: "/docs", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full box_img_menu_items_navegation",
              src: "/img/Intro/tacones_nav_intro.png",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-md ", children: "Modelo X" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                children: "Visitar"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                children: "Ordenar"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          ListItem,
          {
            className: "-ml-10 bg-transparent",
            href: "/docs/installation",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: " w-[220px] h-[123px] ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full box_img_menu_items_navegation",
                  src: "/img/Intro/tacones_nav_intro.png",
                  alt: ""
                }
              ) }),
              /* @__PURE__ */ jsx("h2", { className: "font-medium text-md", children: "Modelo L" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: " link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",
                    children: "Visitar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",
                    children: "Ordenar"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs/primitives/typography", children: /* @__PURE__ */ jsxs("ul", { className: " border-l pl-10 h-[180px] justify-center  flex flex-col gap-4 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ", children: [
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Tacones" }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Faldas " }),
          /* @__PURE__ */ jsxs("li", { className: "relative text_link_lateral_inline", children: [
            "Pantalones",
            " "
          ] }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Blusas" }),
          /* @__PURE__ */ jsx("li", { className: "relative text_link_lateral_inline", children: "Lencerias" })
        ] }) })
      ] }) })
    ] })
  ] }) });
}
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    {
      ref,
      className: cn(
        "block select-none bg-white space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-none", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-snug line-clamp-2 text-muted-foreground", children })
      ]
    }
  ) }) });
});
ListItem.displayName = "ListItem";

function IconCart({ hover }) {
  return /* @__PURE__ */ jsx("a", { className: "cursor-pointer", href: "/es/shop/", children: /* @__PURE__ */ jsxs(
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 3C0 2.58579 0.335787 2.25 0.75 2.25H3.408C3.71468 2.25 3.99046 2.43671 4.10436 2.72146L4.61578 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H7.68142L6.32692 16.25H19.25C19.6642 16.25 20 16.5858 20 17C20 17.4142 19.6642 17.75 19.25 17.75H5C4.7296 17.75 4.48013 17.6044 4.34708 17.369C4.21403 17.1336 4.21799 16.8448 4.35745 16.6132L6.57309 12.9327L3 4H3.00023L2.90023 3.75H0.75C0.335786 3.75 0 3.41421 0 3ZM8.01578 12.5H17.6459C17.8504 12.5 18.0342 12.3755 18.1102 12.1857L20.7845 5.5H5.21578L8.01578 12.5Z",
            fill: hover ? "#000" : "#fff"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M7 20.75C7 21.5784 6.32843 22.25 5.5 22.25C4.67157 22.25 4 21.5784 4 20.75C4 19.9216 4.67157 19.25 5.5 19.25C6.32843 19.25 7 19.9216 7 20.75Z",
            fill: hover ? "#000" : "#fff"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.5 22.25C19.3284 22.25 20 21.5784 20 20.75C20 19.9216 19.3284 19.25 18.5 19.25C17.6716 19.25 17 19.9216 17 20.75C17 21.5784 17.6716 22.25 18.5 22.25Z",
            fill: hover ? "#000" : "#fff"
          }
        )
      ]
    }
  ) });
}
function IconUser({ hover }) {
  return /* @__PURE__ */ jsx("a", { href: "/es/auth/login", "data-astro-prefetch": "tap", className: "cursor-pointer", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.06701 13.933 6.5 12 6.5C10.067 6.5 8.5 8.06701 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z",
            fill: hover ? "#fff" : "#000"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.9776 21.9484C11.3137 21.9825 11.6548 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.4815 2.90389 16.752 4.4004 18.5C5.77451 20.105 7.64823 21.2696 9.78062 21.7528C10.1714 21.8414 10.5709 21.9071 10.9776 21.9484ZM17.4776 18.4999C16.0365 19.7156 14.1856 20.4608 12.1616 20.4985C12.1079 20.4995 12.054 20.5 12 20.5C11.9569 20.5 11.914 20.4997 11.8711 20.499C9.83437 20.4688 7.97122 19.7221 6.52238 18.4999C8.00263 17.2509 9.9131 16.5 12 16.5C14.0869 16.5 15.9973 17.2509 17.4776 18.4999ZM18.5375 17.4327C16.7845 15.9169 14.4993 15 12 15C9.50064 15 7.21545 15.9169 5.46245 17.4327C4.23701 15.9597 3.5 14.0659 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 14.0659 19.763 15.9597 18.5375 17.4327Z",
            fill: hover ? "#fff" : "#000"
          }
        )
      ]
    }
  ) });
}
function CartAndUser({ hover }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-white flex items-center gap-1 justify-center rounded-3xl h-[35px] w-[75px]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center ml-1.5 justify-center", children: /* @__PURE__ */ jsx(IconUser, { hover }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center bg-black rounded-full w-[33px] h-[33px]", children: /* @__PURE__ */ jsx(IconCart, { hover }) })
  ] }) });
}

function NavHome() {
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);
  const handleHoverEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setHover(true);
    }, 210);
  };
  const handleHoverLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setHover(false), 150);
  };
  const handleClickLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHover(!hover);
  };
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      style: {
        backgroundColor: hover ? "#fff" : "transparent",
        color: hover ? "#000" : "#fff"
      },
      className: "z-50 flex items-center justify-between px-10 py-2",
      children: [
        /* @__PURE__ */ jsx(LogoHome, {}),
        /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-between gap-10 p-1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              onMouseEnter: handleHoverEnter,
              onMouseLeave: handleHoverLeave,
              onClick: handleClickLeave,
              children: /* @__PURE__ */ jsx(NavigationMenuDemo, {})
            }
          ),
          /* @__PURE__ */ jsx("a", { className: "z-50 text-sm text-font_Poppins", href: "/es/contact", children: "CONTACTO" })
        ] }),
        /* @__PURE__ */ jsx(CartAndUser, { hover })
      ]
    }
  );
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="z-20 absolute translate-y-[-50%] -bottom-[1%] text-center w-full flex h-[200px] items-center justify-between px-10" data-astro-cid-xtsxbdv5> <div class="flex flex-col items-center justify-center text-center" data-astro-cid-xtsxbdv5> <h4 class="text-lg font-semibold text-black" data-astro-cid-xtsxbdv5>Please Help Me</h4> <a href="/shop/about-contact" class="list_hover" data-astro-cid-xtsxbdv5>CONTACT</a> <a href="/faq.html" class="list_hover" data-astro-cid-xtsxbdv5>FAQ</a> <a href="/shop/store-locator" class="list_hover" data-astro-cid-xtsxbdv5>STORE LOCATOR</a> <a href="/shop/user-registration?URL=" class="list_hover" data-astro-cid-xtsxbdv5>NEW USERS</a> <a href="/shop/order-status" class="list_hover" data-astro-cid-xtsxbdv5>ORDER STATUS</a> </div> <div class="flex flex-col items-center justify-center text-center" data-astro-cid-xtsxbdv5> <h4 class="text-lg font-semibold text-black" data-astro-cid-xtsxbdv5>Please Help Me</h4> <a href="/shop/about-contact" class="list_hover" data-astro-cid-xtsxbdv5>CONTACT</a> <a href="/faq.html" class="list_hover" data-astro-cid-xtsxbdv5>FAQ</a> <a href="/shop/store-locator" class="list_hover" data-astro-cid-xtsxbdv5>STORE LOCATOR</a> <a href="/shop/user-registration?URL=" class="list_hover" data-astro-cid-xtsxbdv5>NEW USERS</a> <a href="/shop/order-status" class="list_hover" data-astro-cid-xtsxbdv5>ORDER STATUS</a> </div> <div class="flex flex-col items-center justify-center text-center" data-astro-cid-xtsxbdv5> <h4 class="text-lg font-semibold text-black" data-astro-cid-xtsxbdv5>Please Help Me</h4> <a href="/shop/about-contact" class="list_hover" data-astro-cid-xtsxbdv5>CONTACT</a> <a href="/faq.html" class="list_hover" data-astro-cid-xtsxbdv5>FAQ</a> <a href="/shop/store-locator" class="list_hover" data-astro-cid-xtsxbdv5>STORE LOCATOR</a> <a href="/shop/user-registration?URL=" class="list_hover" data-astro-cid-xtsxbdv5>NEW USERS</a> <a href="/shop/order-status" class="list_hover" data-astro-cid-xtsxbdv5>ORDER STATUS</a> </div> <div class="flex flex-col items-center justify-center text-center" data-astro-cid-xtsxbdv5> <h4 class="text-lg font-semibold text-black" data-astro-cid-xtsxbdv5>Please Help Me</h4> <a href="/shop/about-contact" class="list_hover" data-astro-cid-xtsxbdv5>CONTACT</a> <a href="/faq.html" class="list_hover" data-astro-cid-xtsxbdv5>FAQ</a> <a href="/shop/store-locator" class="list_hover" data-astro-cid-xtsxbdv5>STORE LOCATOR</a> <a href="/shop/user-registration?URL=" class="list_hover" data-astro-cid-xtsxbdv5>NEW USERS</a> <a href="/shop/order-status" class="list_hover" data-astro-cid-xtsxbdv5>ORDER STATUS</a> </div> </footer> `;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Footer.astro", void 0);

const $$Astro$5 = createAstro("https://sabata.com");
const $$IntroPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$IntroPage;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-dvh"> <div class="absolute top-0 left-0 z-10 w-full bg-black cursor-default h-dvh"> <h2 class="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-8xl font-black z-20">
SABATA
</h2> </div> <!-- <VideoIntro /> --> <div class="text-xs w-full text-white absolute top-[85%] z-20 text-center left-[50%] -translate-x-[50%] -translate-y-[50%]"> <p class="relative block">
*LAS OFERTAS TIENEN TIEMPO LIMITADO O HASTA GASTAR STOCK. NO SE PUEDE
      CANCELAR.
</p> <p class="cursor-pointer border-b hover:border-b-2 border-[#fff] relative inline-block">
MÁS INFORMACIÓN SOBRE NUESTRAS OFERTAS
</p> </div> </section>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Intro/Intro_Page.astro", void 0);

const $$CollectionPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-cover bg-top bg-no-repeat h-[260vh] relative" style="background-image: url(/bg-Collection.webp)" data-astro-cid-gtxi4u7n> <div class="w-full absolute top-[9%] left-[25%] -translate-x-[50%] -translate-y-[50%]" data-astro-cid-gtxi4u7n> <div class="relative flex flex-col items-center justify-center text-center text-black" data-astro-cid-gtxi4u7n> <h2 class="z-50 pb-6 mt-20 text-5xl font-black text" data-astro-cid-gtxi4u7n>
¡Llegaron las ofertas de<br data-astro-cid-gtxi4u7n> verano!
</h2> <div class="z-50 mt-8" data-astro-cid-gtxi4u7n> <p class="text-base" data-astro-cid-gtxi4u7n>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, <br data-astro-cid-gtxi4u7n> Lorem ipsum dolor sit amet.
</p> </div> </div> </div> <div class="z-20 absolute top-[3%] -right-[6%] translate-y-[50%] text-black -translate-x-[50%]" data-astro-cid-gtxi4u7n> <p class="font-medium text-center" data-astro-cid-gtxi4u7n>WWW.SABATA</p> <p class="text-4xl font-black -tracking-[3px]" data-astro-cid-gtxi4u7n>
E-COMMERCE
</p> </div> <div class="flex items-center pl-10 justify-between w-full z-20 -translate-x-[0%] absolute -translate-y-[50%] top-[45%] left-[0%]" data-astro-cid-gtxi4u7n> <div class="flex flex-col gap-4 text-center" data-astro-cid-gtxi4u7n> <h3 class="text-xl font-semibold text-black " data-astro-cid-gtxi4u7n>
Colección de moda femenina
</h3> <ul class="flex flex-col gap-4" data-astro-cid-gtxi4u7n> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Explora vestidos elegantes y versátiles</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Descubre las últimas tendencias</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Encuentra tu ajuste perfecto</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Completa tu look con nuestros accesorios</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n> ¡Compra ahora!</a></li> </ul> </div> <div class="flex flex-col gap-4 text-center" data-astro-cid-gtxi4u7n> <h3 class="text-xl font-semibold text-black " data-astro-cid-gtxi4u7n>
Descubre quiénes somos
</h3> <ul class="flex flex-col gap-4" data-astro-cid-gtxi4u7n> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Nuestra historia: Cómo empezó...</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Nuestro equipo: Conoce a las personas...</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Nuestra misión: Descubre nuestra visión...</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Nuestra comunidad: Una comunidad femenina</a></li> <li data-astro-cid-gtxi4u7n><a class="list_hover" href="#" data-astro-prefetch="tap" title="" aria-label="" data-astro-cid-gtxi4u7n>Contáctanos: ¿Tienes alguna o comentario?</a></li> </ul> </div> </div> </section> `;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Collection/Collection_Page.astro", void 0);

const infoButton$3 = ["Odernar Ahora", "Agregar Carrito"];
function ButtonsDiscountProducts() {
  return /* @__PURE__ */ jsx(Fragment, { children: infoButton$3.map((item, index) => /* @__PURE__ */ jsx(
    "button",
    {
      style: {
        backgroundColor: index === 0 ? "#fafafa" : "#d6872a",
        color: index === 0 ? "#313131" : "#fafafa"
      },
      className: "py-2 mb-4 ml-1 font-medium rounded-md w-[247px] ",
      children: item
    },
    index
  )) });
}

const $$TextMenuDiscountProduct = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full absolute top-[47.5%] z-20 left-[75%] -translate-x-[50%] -translate-y-[50%] text-black"> <div class="text-center relative flex flex-col items-center justify-center text-white"> <h2 class="z-50 mt-20 pb-6 text-5xl  font-black text">
¡Llegaron las ofertas de<br> verano!
</h2> <div class="z-50 mt-8 "> <p class="text-base">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, <br> Lorem ipsum dolor sit amet.
</p> </div> <div class="z-50 mt-12 flex items-center justify-center gap-6"> ${renderComponent($$result, "ButtonsDiscountProducts", ButtonsDiscountProducts, {})} </div> <div class="z-50 mt-8 text-sm"> <p class="relative block text-xs ">
*LAS OFERTAS TIENEN TIEMPO LIMITADO O HASTA GASTAR STOCK. NO SE PUEDE
        CANCELAR.
</p> <p class="relative inline-block text-xs cursor-pointer">
MÁS INFORMACIÓN SOBRE NUESTRAS OFERTAS
</p> </div> <img class=" rotate-180  absolute top-[80%] z-20 left-[60%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_DiscountProductsPage.png" alt=""> <img class=" rotate-90  absolute top-[80%] z-20 left-[50%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_DiscountProductsPage.png" alt=""> <img class="absolute top-[80%] z-20 left-[70%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_DiscountProductsPage.png" alt=""> </div> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Discount_Products/Text_Menu_Discount_product.astro", void 0);

const $$Astro$4 = createAstro("https://sabata.com");
const $$DiscountProductsPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DiscountProductsPage;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full bg-center bg-no-repeat bg-cover h-dvh" style="background-image: url(/bg-Discount_Products.webp)"> ${renderComponent($$result, "TextMenuDiscountProduct", $$TextMenuDiscountProduct, {})} </section>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Discount_Products/Discount_Products_Page.astro", void 0);

const infoButton$2 = [
  "Odernar Ahora",
  "Agregar Carrito"
];
function ButtonsLifeStyle() {
  return /* @__PURE__ */ jsx(Fragment, { children: infoButton$2.map((item, index) => /* @__PURE__ */ jsx(
    "button",
    {
      style: { backgroundColor: index === 0 ? "#3a596c" : "#fafafa", color: index === 0 ? "#fafafa" : "#313131" },
      className: "w-[247px] py-2 mb-4 ml-1 font-medium rounded-md",
      children: item
    },
    index
  )) });
}

const $$ContentLifeStyle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full absolute top-[47.5%] left-[25%] -translate-x-[50%] -translate-y-[50%] text-black"> <div class="text-center relative flex flex-col items-center justify-center text-white"> <h2 class="z-50 mt-20 pb-6 text-5xl  font-black text">
¡Llegaron las ofertas de<br> verano!
</h2> <div class="z-50 mt-8 "> <p class="text-base">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, <br> Lorem ipsum dolor sit amet.
</p> </div> <div class="z-50 mt-12 flex items-center justify-center gap-6"> ${renderComponent($$result, "ButtonsLifeStyle", ButtonsLifeStyle, {})} </div> <div class="z-50 mt-8 text-sm"> <p class="relative block text-xs ">
*LAS OFERTAS TIENEN TIEMPO LIMITADO O HASTA GASTAR STOCK. NO SE PUEDE
        CANCELAR.
</p> <p class="relative inline-block text-xs cursor-pointer">
MÁS INFORMACIÓN SOBRE NUESTRAS OFERTAS
</p> </div> <img class=" rotate-180  absolute top-[80%] z-20 left-[60%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_LifeStylePage.png" alt=""> <img class=" rotate-90  absolute top-[80%] z-20 left-[50%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_LifeStylePage.png" alt=""> <img class="absolute top-[80%] z-20 left-[70%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_LifeStylePage.png" alt=""> <img class=" rotate-180  absolute top-[80%] z-20 left-[40%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_LifeStylePage.png" alt=""> <img class=" rotate-90  absolute top-[80%] z-20 left-[30%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_LifeStylePage.png" alt=""> <img class="absolute top-[80%] z-20 left-[50%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_LifeStylePage.png" alt=""> </div> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Life_Style/Content_Life_Style.astro", void 0);

const $$Astro$3 = createAstro("https://sabata.com");
const $$LifeStylePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LifeStylePage;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full bg-center bg-no-repeat bg-cover h-dvh" style="background-image: url(/bg-LifeStyle.webp)"> ${renderComponent($$result, "Content_Life_Style", $$ContentLifeStyle, {})} </section>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Life_Style/Life_Style_Page.astro", void 0);

const infoButton$1 = ["Odernar Ahora", "Agregar Carrito"];
function ButtonsSummerOffer() {
  return /* @__PURE__ */ jsx(Fragment, { children: infoButton$1.map((item, index) => /* @__PURE__ */ jsx(
    "button",
    {
      style: {
        backgroundColor: index === 0 ? "#f5c7c9" : "#fff",
        color: index === 0 ? "#313131" : "#313131"
      },
      className: "py-2 mb-4 ml-1 font-medium rounded-md w-[247px] ",
      children: item
    },
    index
  )) });
}

const $$ContentSummerOffer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Discount Link -->${maybeRenderHead()}<div class="w-full absolute top-[47.5%] z-20 left-[25%] -translate-x-[50%] -translate-y-[50%] text-black"> <div class="text-center relative flex flex-col items-center justify-center text-white"> <h2 class="z-50 mt-20 pb-6 text-5xl  font-black text">
¡Llegaron las ofertas de<br> verano!
</h2> <div class="z-50 mt-8 "> <p class="text-base">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, <br> Lorem ipsum dolor sit amet.
</p> </div> <div class="z-50 mt-12 flex items-center justify-center gap-6"> ${renderComponent($$result, "ButtonsSummerOffer", ButtonsSummerOffer, {})} </div> <div class="z-50 mt-8 text-sm"> <p class="relative block text-xs ">
*LAS OFERTAS TIENEN TIEMPO LIMITADO O HASTA GASTAR STOCK. NO SE PUEDE
        CANCELAR.
</p> <p class="relative inline-block text-xs cursor-pointer">
MÁS INFORMACIÓN SOBRE NUESTRAS OFERTAS
</p> </div> <img class="rotate-180  absolute top-[80%] z-20 left-[60%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_SummerOfferPage.png" alt=""> <img class="  absolute top-[80%] z-20 left-[60%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_SummerOfferPage.png" alt=""> <img class="  absolute top-[80%] z-20 left-[60%] -translate-x-[50%] -translate-y-[50%] " src="/Background_Text_SummerOfferPage.png" alt=""> </div> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Summer_Offers/Content_SummerOffer.astro", void 0);

const $$Astro$2 = createAstro("https://sabata.com");
const $$SummerOfferPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SummerOfferPage;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full bg-center bg-no-repeat bg-cover h-dvh" style="background-image: url(/bg-SummerOffer.webp)"> ${renderComponent($$result, "Content_SummerOffer", $$ContentSummerOffer, {})} </section>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Summer_Offers/Summer_Offer_Page.astro", void 0);

const infoButton = ["Odernar Ahora", "Agregar Carrito"];
function ButtonsWomenFashion() {
  return /* @__PURE__ */ jsx(Fragment, { children: infoButton.map((item, index) => /* @__PURE__ */ jsx(
    "button",
    {
      style: {
        backgroundColor: index === 0 ? "#fafafa" : "#496044",
        color: index === 0 ? "#313131" : "#fafafa"
      },
      className: "w-[247px] py-2 mb-4 ml-1 font-medium rounded-md",
      children: item
    },
    index
  )) });
}

const $$TextWomenFashion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Discount Link -->${maybeRenderHead()}<div class="w-full absolute top-[47.5%] z-20 left-[75%] -translate-x-[50%] -translate-y-[50%] text-black"> <div class="text-center relative flex flex-col items-center justify-center text-[#f5f5f0] "> <div class="z-50 mt-20 pb-6"> <h2 class=" text-5xl font-black text">
¡Llegaron las ofertas de<br> verano!
</h2> </div> <div class="z-50 mt-8 "> <p class="text-base">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, <br> Lorem ipsum dolor sit amet.
</p> </div> <div class="z-50 mt-12 flex items-center justify-center gap-6"> ${renderComponent($$result, "ButtonsWomenFashion", ButtonsWomenFashion, {})} </div> <div class="z-50 mt-8 text-sm"> <p class="relative block text-xs ">
*LAS OFERTAS TIENEN TIEMPO LIMITADO O HASTA GASTAR STOCK. NO SE PUEDE
        CANCELAR.
</p> <p class="relative inline-block text-xs cursor-pointer">
MÁS INFORMACIÓN SOBRE NUESTRAS OFERTAS
</p> </div> <img class=" rotate-180  absolute top-[95%] z-20 left-[60%] -translate-x-[50%] -translate-y-[50%] " src="/Background.png" alt=""> <!-- <img class=" rotate-180  absolute top-[95%] z-20 left-[50%] -translate-x-[50%] -translate-y-[50%] " src="/Background.png" alt="" /> --> <img class=" rotate-180  absolute top-[95%] z-20 left-[70%] -translate-x-[50%] -translate-y-[50%] " src="/Background.png" alt=""> <img class=" rotate-180  absolute top-[95%] z-20 left-[40%] -translate-x-[50%] -translate-y-[50%] " src="/Background.png" alt=""> </div> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Women_Fashion/TextWomenFashion.astro", void 0);

const $$Astro$1 = createAstro("https://sabata.com");
const $$WomenFashionPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WomenFashionPage;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full bg-center bg-no-repeat bg-cover h-dvh" style="background-image: url(/bg-Women_Fashion.webp)"> ${renderComponent($$result, "TextWomenFashion", $$TextWomenFashion, {})} </section>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Home/Women_Fashion/Women_Fashion_Page.astro", void 0);

const $$Astro = createAstro("https://sabata.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Home", $$Layout, { "title_page": "Inicio", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""], "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="fixed top-0 left-0 z-50 w-full px-0 text-sm font-medium text-white navegacion_home" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "NavHome", NavHome, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Home/Intro/nav/Nav_Home", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </header> <main class="relative" data-astro-cid-j7pv25f6> <section class="bg-black header_scroll_home cards_scroll_home" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "IntroPage", $$IntroPage, { "data-astro-cid-j7pv25f6": true })} </section> <section class="w-full bg-black cards_scroll_home h-dvh" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "WomenFashionPage", $$WomenFashionPage, { "data-astro-cid-j7pv25f6": true })} </section> <section class="w-full bg-black cards_scroll_home h-dvh" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SummerOfferPage", $$SummerOfferPage, { "data-astro-cid-j7pv25f6": true })} </section> <section class="w-full bg-black cards_scroll_home h-dvh" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "DiscountProductsPage", $$DiscountProductsPage, { "data-astro-cid-j7pv25f6": true })} </section> <section class="w-full bg-black cards_scroll_home h-dvh" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LifeStylePage", $$LifeStylePage, { "data-astro-cid-j7pv25f6": true })} </section> <section class="bg-black footer_scroll_home" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CollectionPage", $$CollectionPage, { "data-astro-cid-j7pv25f6": true })} </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </main> ` })}  `;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
