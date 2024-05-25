import { AccordionDemoContact } from "./subComponent/Accordion_Information_for_Quetions";



export function Question_Clients_Contact () {
    return ( 
        <>
            <section class="mt-[180px] h-[110vh] w-[100%] px-4  ">
                    <div className="-mt-2 flex flex-col gap-5 text-center items-center justify-center">
                        <h2 className="text-4xl text-[#fff] font-bold ">Preguntas frecuentes</h2>
                        <div></div>
                        <div>
                            <p className="font-medium text-[#b5b6b7] text-sm ">Ya sea que busque un sitio web vibrante o una aplicación móvil mínima, servimos a</p>
                            <p className="font-medium text-[#b5b6b7] text-sm ">fundadores, nuevas empresas y agencias con una calidad inigualable.</p>
                        </div>
                    </div>
                    <ul className="mt-20 flex px-[37px] gap-20 ">
                        <li className="w-[521px] flex flex-col gap-4 items-center justify-center">
                            <AccordionDemoContact />
                        </li>
                        <li className="w-[621px] flex flex-col gap-4 items-center justify-center bg-white rounded-2xl ">
                            <div className="w-[284px] bg-white h-[187px]  ">
                            </div>
                            <h2 className="text-[#2b2b31] text-lg font-semibold ">¿Todavía tienes dudas? ¡Te tenemos cubierto!</h2>
                            <button className="py-2 px-6 border max-w-[274px] border-[#e51c50] text-[#e51c50] font-medium rounded-md text-[15px] ml-1 mb-4" >Reservar una llamada</button>
                        </li>
                    </ul>
            </section>
        </>
     )
}
