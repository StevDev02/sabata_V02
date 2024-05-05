
export function RegisterForm () {
  return (
    

<form className='grid text-xs gap-4 text-zinc-600 pt-10' action=''>
    <h2 className='text-base font-extralight text-black'>DATOS PERSONALES</h2>

    {/* Correo de usuario */}
    <input
      type='email'
      placeholder='EMAIL'
      x-data='{ focused: false }'
      className='w-[300px] placeholder-up focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300 inputLogin'
    />
    <div className='-mt-3'>
      <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Introduce una dirección de email válida.</p>
      {/* <!-- <IconAlert /> --> */}
    </div>

    {/* Contraseña de usuario */}
    <input
      type='password'
      placeholder='CONTRASEÑA'
      className='inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300'
    />
    <div className='-mt-3'>
      <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Este campo es obligatorio.</p>
      {/* <!-- <IconAlert /> --> */}
    </div>

    {/* Nombre de usuario */}
    <input
      type='text'
      placeholder='NOMBRE'
      className='inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300'
    />
    <div className='-mt-3'>
      <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Este campo es obligatorio.</p>
      {/* <!-- <IconAlert /> --> */}
    </div>

    {/* Apellido de usuario */}
    <input
      type='text'
      placeholder='APELLIDO'
      className='inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300'
    />
    <div className='-mt-3'>
      <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Este campo es obligatorio.</p>
      {/* <!-- <IconAlert /> --> */}
    </div>

    {/* Numero de usuario */}
    <input
      type='number'
      placeholder='TELEFONO'
      className='inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300'
    />
    <div className='-mt-3'>
      <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Este campo es obligatorio.</p>
      {/* <!-- <IconAlert /> --> */}
    </div>

    {/* Aceptar Comerciales */}
    <div className='flex items-center gap-1 pt-3'>
      <input
        type='checkbox'
        className='w-[14px] h-[14px]'
      />
      <div className=''>
        <p className='text-[10px] ml-[5px] mt-[12px] text-[#000000b7] '>Quiero recibir comunicaciones comerciales personalizadas de <br /><span className='text-black'>SABATA</span> a través del email.</p>
      </div>
    </div>

    {/* Politicas de usuario */}
    <div className='flex items-center gap-1'>
      <input
        type='checkbox'
        className='w-[14px] h-[14px]'
      />
      <div className=''>
        <p className='text-[10px] ml-[5px] mt-[2px] text-[#000000b7] '>He podido leer y entiendo la <span className='underline'>Política de Privacidad y Cookies</span></p>
      </div>
    </div>

    <div />

    <button className='w-[300px] border py-2 rounded-sm border-zinc-500 hover:text-zinc-400 mt-3'>CREAR CUENTA</button>

  </form>
  )
}