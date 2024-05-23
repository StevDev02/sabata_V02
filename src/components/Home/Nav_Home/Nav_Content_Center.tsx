"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import "./styles_intro_nav_menu.css"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tienda</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul  className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap" >
            <ListItem className="bg-transparent -ml-10"  href="/docs/primitives/typography" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo S</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs">
              <div className="flex flex-col items-center justify-center"> 
                <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                </div>
                <h2 className="text-[17px] font-medium ">Modelo X</h2>
                <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
              </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs/installation">
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo L</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs/primitives/typography" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]"  src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo M</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs/primitives/typography" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo SM</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs/primitives/typography" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo XL</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography" >
                <ul className=" border-l pl-10 h-[280px] justify-center  flex flex-col gap-5 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] " >
                    <li className="text_link_lateral_inline relative">Mas Vendidos</li>
                    <li className="text_link_lateral_inline relative">Populares </li>
                    <li className="text_link_lateral_inline relative">Descuentos </li>
                    <li className="text_link_lateral_inline relative">Productos nuevos</li>
                    <li className="text_link_lateral_inline relative">Recientes</li>
                    <li className="text_link_lateral_inline relative">Favoritos</li>
                </ul>
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Accesorios</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul  className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap" >
            <ListItem className="bg-transparent -ml-10"  href="/docs/primitives/typography" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo S</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs">
              <div className="flex flex-col items-center justify-center"> 
                <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                </div>
                <h2 className="text-[17px] font-medium ">Modelo X</h2>
                <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
              </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs/installation">
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo L</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs/primitives/typography" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]"  src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo M</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography" >
                <ul className=" border-l pl-10 h-[280px] justify-center  flex flex-col gap-8 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] " >
                    <li className="text_link_lateral_inline relative">Bolsos</li>
                    <li className="text_link_lateral_inline relative">Carteras </li>
                    <li className="text_link_lateral_inline relative">Relojes </li>
                    <li className="text_link_lateral_inline relative">Anillos</li>
                    <li className="text_link_lateral_inline relative">Tobilleras</li>
                </ul>
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Ofertas</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul  className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap" >
            <ListItem className="bg-transparent -ml-10"  href="/docs/primitives/typography" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo S</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs">
              <div className="flex flex-col items-center justify-center"> 
                <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                </div>
                <h2 className="text-[17px] font-medium ">Modelo X</h2>
                <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
              </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-10" href="/docs/installation">
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Modelo L</h2>
                    <div className="flex gap-4 mt-2">
                    <a href="#" className=" link_visit_and_order_line text-[12px]  text-[#696969] hover:textbl ">Visitar</a>
                    <a href="#" className="text-[12px] link_visit_and_order_line  text-[#696969] hover:textbl ">Ordenar</a>
                </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography" >
                <ul className=" border-l pl-10 h-[180px] justify-center  flex flex-col gap-4 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] " >
                <li className="text_link_lateral_inline relative">Tacones</li>
                    <li className="text_link_lateral_inline relative">Faldas </li>
                    <li className="text_link_lateral_inline relative">Pantalones </li>
                    <li className="text_link_lateral_inline relative">Blusas</li>
                    <li className="text_link_lateral_inline  relative">Lencerias</li>
                </ul>
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tienda</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul  className=" flex cursor-auto items-center relative justify-center pb-8 pt-20 w-[1100px]" >
            <ListItem className="bg-transparent"  href="/ec/shop/" >
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Tacones</h2>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-16" href="/ec/shop/">
              <div className="flex flex-col items-center justify-center"> 
                <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                </div>
                <h2 className="text-[17px] font-medium ">Faldas</h2>
              </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-16" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Pantalones</h2>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-16" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Blusas</h2>
                </div>
              </ListItem>
              <ListItem className="bg-transparent -ml-16" href="/ec/shop/">
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-[220px] h-[123px] " >
                        <img className="box_img_menu_items_navegation w-[100%]" src="/public/img/Intro/tacones_nav_intro.png" alt="" />
                    </div>
                    <h2 className=" text-[17px] font-medium ">Lencerias</h2>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
