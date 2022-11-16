import React from "react";
import { SUNNY, CLOUDY, FOGGY } from "../../../assets";

function TempCard({ item, selected, makeSelectedItem }) {
  const getPic = (currentPic) => {
    if (currentPic === "sunny") {
      return SUNNY;
    } else if (currentPic === "cloudy") {
      return CLOUDY;
    } else {
      return FOGGY;
    }
  };
  return (
    <div
      className={`temp-card ${
        selected?.id === item.id ? "card-backgroung-color" : ""
      }`}
      onClick={() => {
        makeSelectedItem(item.id);
      }}
    >
      <div>{item.day}</div>
      <div className="img-container">
        {" "}
        <img
          src={getPic(item.pic)}
          alt="img"
          width={55}
          height={50}
          className="img-temp-card"
        />
      </div>
      <div className="temp-degree">
        <div>{item.high}&deg;</div>
        <div>{item.low}&deg;</div>
      </div>
    </div>
  );
}

export default TempCard;
