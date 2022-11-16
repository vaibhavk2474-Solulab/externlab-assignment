import React from "react";
import { SUNNY, CLOUDY, FOGGY } from "../../assets";

function CurrentDayData({ selected }) {
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
    <div className="d-flex align-items-start">
      <img
        src={getPic(selected.pic)}
        alt="img"
        width={125}
        height={100}
        className="img-temp-card"
      />
      <div className="mx-2 d-flex align-items-start">
        <div className="temp-font">{selected.currentTemp}</div>
        <div className="degree-font">
          <span className="degree-c">&deg;C</span>
          <span className="degree-f">|&deg;F</span>
        </div>
      </div>
      <div className="mx-2">
        <div className="text-color">
          Precipitation: {selected.precipitation}%
        </div>
        <div className="text-color">Humadity: {selected.humadity}%</div>
        <div className="text-color">Wind: {selected.wind} Km/h</div>
      </div>
    </div>
  );
}

export default CurrentDayData;
