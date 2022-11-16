import React from "react";
import TempCard from "./TempCard/TempCard";

function TempContainer({ data, selected, makeSelectedItem }) {
  return (
    <div className="temp-container">
      {data.map((item) => {
        return (
          <TempCard
            key={item.day}
            item={item}
            selected={selected}
            makeSelectedItem={makeSelectedItem}
          />
        );
      })}
    </div>
  );
}

export default TempContainer;
