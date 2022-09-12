import React, { useState } from "react";

function PlantCard({ plant }) {
  const {name, image, price} = plant
  const [inStock, setInStock] = useState(true)

  function handleStockClick(){
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
