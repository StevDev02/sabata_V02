const infoButton = ["Odernar Ahora"];

export function ButtonsIntro() {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{
            backgroundColor: index === 0 ? "#fafafa" : "#365742",
            color: index === 0 ? "#313131" : "#fafafa",
          }}
          className="px-16 py-2 mb-4 ml-1 font-medium rounded-md"
          key={index}
        >
          {item}
        </button>
      ))}
    </>
  );
}
