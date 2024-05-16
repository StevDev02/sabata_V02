import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Shooping_Product_Item() {
  return (
    <Card className="flex w-full h-auto p-4 border-0 shadow-none bg-none">
      <CardContent className="flex items-center w-full gap-3">
        <div className="w-24 h-24 border border-gray-200 rounded-md">
          <picture>
            <img
              title=""
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
              alt=""
              aria-label=""
              className="object-cover object-center w-full h-full aspect-auto"
              loading="lazy"
            />
          </picture>
        </div>
        {/* Body Shooping Cart Item */}
        <article className="flex justify-center gap-4 text-base font-medium text-gray-900">
          <div className="flex flex-col">
            <p className="overflow-hidden font-semibold w-28 line-clamp-1">
              Bolso de Mujer de Zara
            </p>
            <div className="text-slate-500">
              <div className="flex items-center gap-1.5">
                <p className="w-auto overflow-hidden text-sm font-normal line-clamp-1">
                  Color:
                </p>
                <div className="w-4 h-4 bg-[#cf6855] rounded-full border border-black"></div>
              </div>
              <p className="w-auto overflow-hidden text-sm font-normal line-clamp-1">
                Talla: <span>Chica</span>
              </p>
              <p className="w-auto overflow-hidden text-sm font-normal line-clamp-1">
                Envio: <span>Gratis</span>
              </p>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-auto overflow-hidden text-lg font-semibold line-clamp-1">
                $90.00
              </p>
              <p>- 1 +</p>
            </div>
          </div>
        </article>
        <div className="flex flex-col flex-1">
          <Button
            variant="Naked"
            size="md"
            className="p-0 text-red-500 text-md"
          >
            Eliminar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Shooping_Product_Item;
