const infoButton = [
    'Odernar Ahora',
    'Agregar Carrito'
  ]

export function ButtonsDiscountProducts () {
    return (
      <>
        {infoButton.map((item, index) => (
          <button
            style={{ backgroundColor: index === 0 ? '#fafafa' : '#bf5e23', color: index === 0 ? '#313131' : '#fafafa' }}
            className='py-2 font-medium px-14 rounded-md text-[15px] ml-1 mb-4'
            key={index}
          >{item}
          </button>
        ))}
      </>
    )
}