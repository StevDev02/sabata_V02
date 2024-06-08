import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ArrayImages = [
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg", alt: "" },
];

export function CarouselSizeContactFooter() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {ArrayImages.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex w-[395px] h-[415px] items-center justify-center p-6">
                  <img className="w-full cover" src={image.src} alt={image.alt} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
