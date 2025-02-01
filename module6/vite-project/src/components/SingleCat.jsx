import React from "react";

function SingleCat({ cat, onDelete }) {
  return (
    <li className="catItem">
      <img src={cat.image} alt={cat.name} className="catImage" />
      <h2>{cat.name}</h2>
      <p>
        <em>{cat.latinName}</em>
      </p>
      <button onClick={() => onDelete(cat.id)}>❌ Delete</button>
    </li>
  );
}

export default SingleCat;
