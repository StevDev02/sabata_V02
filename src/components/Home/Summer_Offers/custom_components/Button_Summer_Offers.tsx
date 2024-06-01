const infoButton = ["Odernar Ahora", "Agregar Carrito"];

export function ButtonsSummerOffer() {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{
            backgroundColor: index === 0 ? "#f5c7c9" : "#fff",
            color: index === 0 ? "#313131" : "#313131",
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
