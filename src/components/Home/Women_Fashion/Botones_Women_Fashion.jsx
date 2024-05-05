const infoButton = [
    'Odernar Ahora',
    'Agregar Carrito'
  ]

export function ButtonsWomenFashion () {
    return (
      <>
        {infoButton.map((item, index) => (
          <button
            style={{ backgroundColor: index === 0 ? '#e8e8e8' : '#a29898', color: index === 0 ? '#313131' : '#fafafa' }}
            className='py-2 font-medium px-14 rounded-md text-[15px] ml-5 mb-4'
            key={index}
          >{item}
          </button>
        ))}
      </>
    )
}