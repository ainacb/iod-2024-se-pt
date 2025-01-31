import React from "react";

function SingleCat({ cat }) {
  return (
    <li className="catItem">
      <img src={cat.image} alt={cat.name} className="catImage" />
      <h2>{cat.name}</h2>
      <p>
        <em>{cat.latinName}</em>
      </p>
    </li>
  );
}

export default SingleCat;
