const infoButton = [
    'Odernar Ahora',
    'Agregar Carrito'
  ]

export function ButtonsLifeStyle () {
    return (
      <>
        {infoButton.map((item, index) => (
          <button
            style={{ backgroundColor: index === 0 ? '#434a5f' : '#fafafa', color: index === 0 ? '#fafafa' : '#313131' }}
            className='py-2 mb-4 ml-5 font-medium rounded-md px-14'
            key={index}
          >{item}
          </button>
        ))}
      </>
    )
}