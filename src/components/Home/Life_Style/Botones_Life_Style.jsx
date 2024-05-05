const infoButton = [
    'Odernar Ahora',
    'Agregar Carrito'
  ]

export function ButtonsLifeStyle () {
    return (
      <>
        {infoButton.map((item, index) => (
          <button
            style={{ backgroundColor: index === 0 ? '#c1cdb8' : '#fafafa', color: index === 0 ? '#fafafa' : '#313131' }}
            className='py-2 font-medium px-14 rounded-md text-[15px] ml-5 mb-4'
            key={index}
          >{item}
          </button>
        ))}
      </>
    )
}