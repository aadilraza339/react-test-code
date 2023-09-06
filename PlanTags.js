import React, { useState } from "react";

const PlantTags = ({ plantData }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const filteredPlants = selectedTag
    ? plantData.filter((plant) => plant.tag === selectedTag)
    : plantData;

  return (
    <div className="plant_container">
      <h2>Plant Tags</h2>
      <div className="tags">
        <button
          className="plan_button"
          style={
            selectedTag === "production"
              ? { background: "green", color: "white" }
              : {}
          }
          onClick={() => setSelectedTag("production")}
        >
          Production
        </button>
        <button
          style={selectedTag === "warehouse" ? { background: "green" } : {}}
          onClick={() => setSelectedTag("warehouse")}
        >
          Warehouse
        </button>
      </div>
      <div id="plantButtonContainer">
        {filteredPlants.map((plant) => (
          <button key={plant.plant_name}>{plant.plant_name}</button>
        ))}
      </div>
    </div>
  );
};

export default PlantTags;
