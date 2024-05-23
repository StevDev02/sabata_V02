const infoButton = [
    'Odernar Ahora'
  ]

export function ButtonsIntro() {
    return (
      <>
        {infoButton.map((item, index) => (
          <button
            style={{ backgroundColor: index === 0 ? '#fafafa' : '#365742', color: index === 0 ? '#313131' : '#fafafa' }}
            className='py-2 font-medium px-16 rounded-md text-[15px] ml-1 mb-4'
            key={index}
          >{item}
          </button>
        ))}
      </>
    )
}