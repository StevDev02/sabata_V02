import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemoContact() {
    return (
      <Accordion type="single" collapsible className="w-full text-base flex flex-col gap-4 text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Cómo funcionará todo esto?</AccordionTrigger>
          <AccordionContent className="text-[#8b8c8f] ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>¿Cuántas revisiones recibo?</AccordionTrigger>
          <AccordionContent className="text-[#8b8c8f] ">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Qué pasa si solo necesito un logotipo, o solo necesito diseñar una sola página de destino?</AccordionTrigger>
          <AccordionContent className="text-[#8b8c8f] ">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>¿Por qué no debería contratar a un diseñador a tiempo completo?</AccordionTrigger>
          <AccordionContent className="text-[#8b8c8f] ">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>¿Ofrecen un reembolso?</AccordionTrigger>
          <AccordionContent className="text-[#8b8c8f] ">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>¿Hay ciertos proyectos en los que no trabajas?</AccordionTrigger>
          <AccordionContent className="text-[#8b8c8f] ">
          Yes, we don't work on projects that promote profanity (dating apps, porn), interest related products (banking, insurance), music or the entertainment industry, gambling, or liquor.
Why? Check that out in our about page in detail.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  