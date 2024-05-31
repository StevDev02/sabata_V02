const infoButton = ["Odernar Ahora", "Agregar Carrito"];

export function ButtonsDiscountProducts() {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{
            backgroundColor: index === 0 ? "#fafafa" : "#bf5e23",
            color: index === 0 ? "#313131" : "#fafafa",
          }}
          className="py-2 mb-4 ml-1 font-medium rounded-md px-14"
          key={index}
        >
          {item}
        </button>
      ))}
    </>
  );
}
