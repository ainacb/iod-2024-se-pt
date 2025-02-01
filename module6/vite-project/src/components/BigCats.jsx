import { useState } from "react";
import SingleCat from "./SingleCat";

const starterCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-puma-paul-fell.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://i.pinimg.com/originals/2e/5f/f7/2e5ff79742b7ab7fa5212bc59361f20f.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://th.bing.com/th/id/OIP.ZZXKPJArMDR9SmfMKLcJrgHaIn?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://th.bing.com/th/id/OIP.Mu6VqTI2cXSqf84PWdxxbQHaHa?rs=1&pid=ImgDetMain",
  },

  {
    id: 6,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://th.bing.com/th/id/OIP.n8eCm9LR47m4IJm3NSXe0wHaJ4?w=768&h=1024&rs=1&pid=ImgDetMain",
  },

  {
    id: 7,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/045/494/large_2x/close-up-of-a-snow-leopard-with-blue-eyes-generative-ai-free-photo.jpg",
  },
];

function BigCats() {
  const [cats, setCats] = useState(starterCats);

  const handleAlphabetically = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const handleReverse = () => {
    let newCats = [...cats];
    newCats.reverse();
    setCats(newCats);

    // setCats([...cats].reverse()); // shortcut version, does same I think
  };

  const handleFilterPanthera = () => {
    setCats(starterCats.filter((cat) => cat.latinName.startsWith("Panthera")));
  };

  const handleReset = () => {
    setCats(starterCats);
  };

  return (
    <div className="BigCats componentBox">
      <h1>Big Cats</h1>
      <button onClick={handleAlphabetically}>Sort Alphabetically</button>
      <button onClick={handleReverse}>Reverse Order</button>
      <button onClick={handleFilterPanthera}>Panthera Family</button>
      <button onClick={handleReset}>Reset</button>
      <ul className="catList">
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
