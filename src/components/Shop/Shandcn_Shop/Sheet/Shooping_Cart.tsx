import { Button } from "@/components/ui/button";
import { Shooping_Product_Item } from "../Card/Shooping_Product_Item";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function ShoppingCart() {
  return (
    <Sheet>
      {/* Trigger Shooping Cart */}
      <SheetTrigger asChild>
        <Button size="default">
          <svg
            className="absolute top-[50%] left-[13%] -translate-x-[50%] -translate-y-[50%]"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 3C0 2.44772 0.447715 2 1 2H3.67703C4.08593 2 4.45364 2.24895 4.6055 2.62861L5.15407 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H8.21106L6.87255 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.63088 18 4.29178 17.7967 4.1179 17.4711C3.94402 17.1455 3.96365 16.7506 4.16895 16.4438L6.55276 12.8819L3 4H1C0.447715 4 0 3.55228 0 3ZM8.35407 12H17.6459L20.0459 6H5.95407L8.35407 12Z"
              fill="white"
            ></path>
            <path
              d="M7.5 21.25C7.5 22.2165 6.7165 23 5.75 23C4.7835 23 4 22.2165 4 21.25C4 20.2835 4.7835 19.5 5.75 19.5C6.7165 19.5 7.5 20.2835 7.5 21.25Z"
              fill="white"
            ></path>
            <path
              d="M18.25 23C19.2165 23 20 22.2165 20 21.25C20 20.2835 19.2165 19.5 18.25 19.5C17.2835 19.5 16.5 20.2835 16.5 21.25C16.5 22.2165 17.2835 23 18.25 23Z"
              fill="white"
            ></path>
          </svg>
          Revisar Carrito
        </Button>
      </SheetTrigger>
      {/* Content Shooping Cart */}
      <SheetContent>
        {/* Header Shooping Cart */}
        <SheetHeader className="p-4">
          <SheetTitle className="text-3xl font-semibold">Carrito</SheetTitle>
          <SheetDescription className="text-lg">
            Aqui encontraras todos tus productos añadidos al carrito.
          </SheetDescription>
        </SheetHeader>
        {/* Body Shooping Cart */}
        <div
          id="Shooping_Cart_Container"
          aria-label="Shooping_Cart_Container"
          className="flex flex-col items-center" 
        >
          {/* Products Added to the Shooping Cart */}
          <ul className="z-10 w-full overflow-y-auto h-96">
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
            <li>
              <Shooping_Product_Item />
            </li>
          </ul>
        </div>
        {/* Footer Shooping Cart */}
        <div className="absolute bottom-0 z-20 w-full p-4 bg-white"> 
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Descuento</p>
            <p>20%</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p className="font-bold text-blue-500">$314.40</p>
          </div>
          <p className="my-1 text-sm text-gray-500">
            Envío e impuestos calculados al finalizar la compra.
          </p>
          <div className="my-3">
            <Button className="w-full">Finalizar Compra</Button>
          </div>
          <div className="flex justify-center my-3 text-sm text-center text-gray-500">
            <p className="px-1">o</p>
            <SheetClose className="font-semibold text-blue-500 text-md">
              Continuar Comprando
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ShoppingCart;
