import { Button } from "@/components/ui/button";

const Login_Form = () => {
  return (
    <>
      <form className='flex flex-col gap-4 pt-10 text-xs text-zinc-600' action=''>
        <h2 className='text-base text-black font-extralight'>ACCEDE A TU CUENTA</h2>
        <input
          type='email'
          placeholder='EMAIL'
          x-data='{ focused: false }'
          className='w-[300px] placeholder-up focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300 inputLogin'
        />
        <div className='-mt-3'>
          <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Introduce una dirección de email válida.</p>
          {/* <IconAlert /> */}
        </div>

        <input
          type='password'
          placeholder='CONTRASEÑA'
          className='inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300'
        />
        <div className='-mt-3'>
          <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Este campo es obligatorio.</p>
          {/* <IconAlert /> */}
        </div>

        <div />

        <button className='w-[300px] border py-2 rounded-sm border-zinc-500 hover:text-zinc-400 mt-3'>INICIAR SESION</button>

        <div className='flex items-center justify-center gap-2 pt-5 pb-5'>
          <div className='w-[110px] h-[1px] bg-[#00000018] ' /> <label className='text-xs text-[#00000080] '>O inicia con</label><div className='w-[110px] h-[1px] bg-[#00000018] ' />
        </div>
        <div className='flex items-center justify-center gap-5'>
          {/* <img className='px-6 py-2 border rounded-lg ' src={google} alt='' />
          <img className='px-6 py-2 border rounded-lg ' src={iphone} alt='' />
          <img className='px-6 py-2 border rounded-lg ' src={facebook} alt='' /> */}
        </div>

      </form>
    </>
  );
};

export default Login_Form;
