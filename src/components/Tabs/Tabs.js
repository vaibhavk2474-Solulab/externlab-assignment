import React, { useState } from "react";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("1");

  const makeTabSelected = (tabNumber) => {
    setSelectedTab(tabNumber);
  };
  return (
    <div className="tabs">
      <ul className="tabs-ul">
        <li
          className={`tabs-li border-right ${
            selectedTab === "1" && "text-decor"
          }`}
          onClick={() => {
            makeTabSelected("1");
          }}
        >
          Temprature
        </li>
        <li
          className={`tabs-li border-right ${
            selectedTab === "2" && "text-decor"
          }`}
          onClick={() => {
            makeTabSelected("2");
          }}
        >
          Precipitation
        </li>
        <li
          className={`tabs-li  ${selectedTab === "3" && "text-decor"}`}
          onClick={() => {
            makeTabSelected("3");
          }}
        >
          Wind
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
