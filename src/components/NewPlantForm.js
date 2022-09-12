import React, { useState } from "react";

function NewPlantForm({ handleAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newPlant) => handleAddPlant(newPlant))
    setFormData({name: "", image: "", price: ""})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
