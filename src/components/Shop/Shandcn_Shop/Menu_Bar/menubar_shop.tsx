import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export function MenubarDemo() {
    return (
      <Menubar className="bg-[#f4f4f5] " >
        <MenubarMenu>
          <MenubarTrigger className="bg-white rounded-md" >Populares</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-white rounded-md" >Tacones</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-white rounded-md" >Faldas</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-white rounded-md" >Pantalones</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-white rounded-md" >Blusas</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-white rounded-md" >Lencerias</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
  }
  