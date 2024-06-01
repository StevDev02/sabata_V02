function IconHamburguesa() {
  return ( 
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>
    </>
   )
}

function LogoHome() {
  return (
    <div className="bg-white flex items-center gap-2 pr-4 justify-center rounded-3xl h-[35px] w-[100px]">
      <div className="flex items-center justify-center bg-black rounded-full w-[33px] h-[33px]  " ><IconHamburguesa /></div>
      <p className="font-bold text-font_Poppins text-sm text-black">MENU</p>
    </div>
  );
}

export default LogoHome;
