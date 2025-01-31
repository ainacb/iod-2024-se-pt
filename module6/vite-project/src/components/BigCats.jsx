const cats = [
  { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus" },
  { id: 2, name: "Cougar", latinName: "Puma concolor" },
  { id: 3, name: "Jaguar", latinName: "Panthera onca" },
  { id: 4, name: "Leopard", latinName: "Panthera pardus" },
  { id: 5, name: "Lion", latinName: "Panthera leo" },
  { id: 6, name: "Snow leopard", latinName: "Panthera uncia" },
  { id: 7, name: "Tiger", latinName: "Panthera tigris" },
];

function SingleCat() {
  return (
    <>
      <h1>Info about individual cat that will be mapped over</h1>
    </>
  );
}

export function BigCats() {
  return (
    <div className="BigCats componentBox">
      <h1>Cat List</h1>
      <ul>
        {cats.map((cat) => (
          <li>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}
