const infoButton = [
    'Odernar Ahora',
    'Agregar Carrito'
  ]

export function ButtonsLifeStyle () {
    return (
      <>
        {infoButton.map((item, index) => (
          <button
            style={{ backgroundColor: index === 0 ? '#3a596c' : '#fafafa', color: index === 0 ? '#fafafa' : '#313131' }}
            className='w-[247px] py-2 mb-4 ml-1 font-medium rounded-md'
            key={index}
          >{item}
          </button>
        ))}
      </>
    )
}