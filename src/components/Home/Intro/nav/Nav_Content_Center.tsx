import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// Styles
import "@/components/Home/Intro/Intro.module.css";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_Poppins">Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap">
              <ListItem
                className="-ml-10 bg-transparent"
                href="#"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo S</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className="link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem className="-ml-10 bg-transparent" href="/docs">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Modelo X</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/installation"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo L</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo M</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo SM</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo XL</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography">
                <ul className=" border-l pl-10 h-[280px] justify-center  flex flex-col gap-5 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ">
                  <li className="relative text_link_lateral_inline">
                    Mas Vendidos
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Populares{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Descuentos{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Productos nuevos
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Recientes
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Favoritos
                  </li>
                </ul>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_Poppins">Accesorios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap">
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo S</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem className="-ml-10 bg-transparent" href="/docs">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Modelo X</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/installation"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo L</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo M</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography">
                <ul className=" border-l pl-10 h-[280px] justify-center  flex flex-col gap-8 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ">
                  <li className="relative text_link_lateral_inline">Bolsos</li>
                  <li className="relative text_link_lateral_inline">
                    Carteras{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Relojes{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">Anillos</li>
                  <li className="relative text_link_lateral_inline">
                    Tobilleras
                  </li>
                </ul>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_lemon">sabata</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-center pb-8 pt-20 w-[1100px]">
              <ListItem className="bg-transparent" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Tacones</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Faldas</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Pantalones</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Blusas</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Lencerias</h2>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_Poppins">Ofertas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap">
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo S</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem className="-ml-10 bg-transparent" href="/docs">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Modelo X</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/installation"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo L</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography">
                <ul className=" border-l pl-10 h-[180px] justify-center  flex flex-col gap-4 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ">
                  <li className="relative text_link_lateral_inline">Tacones</li>
                  <li className="relative text_link_lateral_inline">Faldas </li>
                  <li className="relative text_link_lateral_inline">
                    Pantalones{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">Blusas</li>
                  <li className="relative text_link_lateral_inline">
                    Lencerias
                  </li>
                </ul>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none bg-white space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
