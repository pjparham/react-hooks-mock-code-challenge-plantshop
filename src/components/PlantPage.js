import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then ((r => r.json()))
    .then((plantData) => setPlants(plantData))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  })
  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <PlantList plants={displayedPlants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
