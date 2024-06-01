const infoButton = ["Odernar Ahora", "Agregar Carrito"];

export function ButtonsDiscountProducts() {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{
            backgroundColor: index === 0 ? "#fafafa" : "#d6872a",
            color: index === 0 ? "#313131" : "#fafafa",
          }}
          className="py-2 mb-4 ml-1 font-medium rounded-md w-[247px] "
          key={index}
        >
          {item}
        </button>
      ))}
    </>
  );
}
