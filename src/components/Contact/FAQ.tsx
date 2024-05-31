import { Accordion_Contact } from "@/components/Contact/Accordion_Contact";

export function FAQ() {
  return (
    <>
      <section className="w-full p-10 h-dvh">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-4xl font-bold text-white ">
            Preguntas frecuentes
          </h2>
          <div></div>
          <div>
            <p className="font-medium text-[#b5b6b7] text-sm ">
              Ya sea que busque un sitio web vibrante o una aplicación móvil
              mínima, servimos a
            </p>
            <p className="font-medium text-[#b5b6b7] text-sm ">
              fundadores, nuevas empresas y agencias con una calidad
              inigualable.
            </p>
          </div>
        </div>
        <ul className="flex gap-20 p-6">
          <li className="w-[521px] flex flex-col gap-4 items-center justify-center">
            <Accordion_Contact />
          </li>
          <li className="w-[621px] flex flex-col gap-4 items-center justify-center bg-white rounded-2xl ">
            <div className="w-[284px] bg-white h-[187px]"></div>
            <h2 className="text-[#2b2b31] text-lg font-semibold ">
              ¿Todavía tienes dudas? ¡Te tenemos cubierto!
            </h2>
            <button className="py-2 px-6 border max-w-[274px] border-[#e51c50] text-[#e51c50] font-medium rounded-md ml-1 mb-4">
              Reservar una llamada
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default FAQ;