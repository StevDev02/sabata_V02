const infoButton = ["Odernar Ahora", "Agregar Carrito"];

export function ButtonsWomenFashion() {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{
            backgroundColor: index === 0 ? "#fafafa" : "#496044",
            color: index === 0 ? "#313131" : "#fafafa",
          }}
          className="w-[247px] py-2 mb-4 ml-1 font-medium rounded-md"
          key={index}
        >
          {item}
        </button>
      ))}
    </>
  );
}
