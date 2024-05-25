export function IntroLanding() {
    return ( 
        <>
            <header className="flex gap-4 items-center justify-center">
                <div className="w-[105px] h-[45px] flex items-center justify-center">
                <img src="https://assets-global.website-files.com/6224aa6c300dce954e57c798/63607e710c518851ea18aadb_upworklogo.svg" alt="#" />
                </div>
                <div className="h-[35px] w-[1px] bg-[#6e6e6e]  " />
                <div className="flex items-center justify-center">
                <svg className="-ml-1.5" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#c69a26" d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"/></svg>
                <svg className="-ml-1.5" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#c69a26" d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"/></svg>
                <svg className="-ml-1.5" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#c69a26" d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"/></svg>
                <svg className="-ml-1.5" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#c69a26" d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"/></svg>
                <svg className="-ml-1.5" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#c69a26" d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"/></svg>
                </div>
            </header>
            <h2 className="text-[#6d6f72] text-base -mt-7 font-semibold " >La Mejor Tienda de Moda Femenina Sabata!</h2>
            <section className="text-white transform scale-y-110 text-6xl line font-semibold flex flex-col items-center justify-center">
                <h1 cl> ¡Transformando tu <span>Estilo</span> de</h1>
                <h1>Vida con Nuestra Moda <span>Femenina</span>!</h1> 
            </section>
            <section className="flex flex-col items-center justify-center text-[#bcbdbe] text-xl font-normal ">
                <p>¡Se acabaron las contrataciones de talento y los contratos largos!</p>
                <p>¡Simplemente compre nuestros servicios por una tarifa mensual fija y</p>
                <p>obtenga un trabajo excepcional!</p>
            </section>
            <footer className="text-white flex gap-4 items-center justify-center">
                <button className="py-2 bg-[#8d46c8] font-medium px-12 rounded-md text-[15px] ml-1 mb-4" >Trabaja con nosotros</button>
                <button className="py-2 bg-[#3a4455] font-medium px-12 rounded-md text-[15px] ml-1 mb-4">Reservar una llamada</button>
            </footer>
        </>
     )
}
