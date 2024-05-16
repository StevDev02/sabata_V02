import { Card, CardContent } from "@/components/ui/card";

export function Mini_Product_Item() {
  return (
    <Card className="flex items-center justify-start gap-2">
      <img
        className="object-cover object-center w-14 h-14"
        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
        loading="lazy"
        alt="[Product]"
        aria-label="[Product]"
        title="[Product]"
      />
      <CardContent>
        <span>Bolso de Mujer Rojo</span>
      </CardContent>
    </Card>
  );
}

export default Mini_Product_Item;
