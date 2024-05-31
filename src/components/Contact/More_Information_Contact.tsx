export function More_Information_Contact() {
  return (
    <>
      <section className="w-full px-10 mt-4">
        <div className=" flex flex-col items-center justify-center h-[190vh] rounded-[90px] bg-white">
          <div className="flex flex-col items-center justify-center gap-5 mt-4 text-center">
            <h2 className="text-4xl text-[#17181e] font-semibold ">
              Otros trabajos
            </h2>
            <div></div>
            <div>
              <p className="text-[#7a7b7e] text-sm ">
                Ayudamos a las pequeñas y medianas empresas y a las nuevas
                empresas a causar
              </p>
              <p className="text-[#7a7b7e] text-sm ">
                sensación proporcionando una visión centrada en el usuario y
                orientada al negocio.
              </p>
            </div>
            <button className="py-2 bg-[#e51c50] text-white font-medium px-12 rounded-md ml-1 mb-4">
              Trabaja con nosotros
            </button>
          </div>
          <ul className="grid grid-cols-2 gap-4 mt-12">
            <li className="rounded-xl w-[550px] h-[390px] bg-[#eee] "></li>
            <li className="rounded-xl w-[550px] h-[390px] bg-[#eee] "></li>
            <li className="rounded-xl w-[550px] h-[390px] bg-[#eee] "></li>
            <li className="rounded-xl w-[550px] h-[390px] bg-[#eee] "></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default More_Information_Contact;
