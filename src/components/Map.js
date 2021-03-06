export default function Map() {
  const data = [
    {
      name: "Banana",
    },
    {
      name: "Apple",
    },
    {
      name: "Orange",
    },
    {
      name: "Watermelon",
    },
  ];
  return (
    <div>
      {data.map((fruit, index) => {
        return (
          <div key={index}>
            {" "}
            <p>{fruit.name}</p>
          </div>
        );
      })}
    </div>
  );
}
