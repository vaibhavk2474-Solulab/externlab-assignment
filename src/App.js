import { useEffect, useState } from "react";
import "./App.css";
import AreaChart from "./components/AreaChart/AreaChart";
import CurrentDayData from "./components/CurrentDayData/CurrentDayData";
import Tabs from "./components/Tabs/Tabs";
import TempContainer from "./components/TempContainer/TempContainer";
import { whetherData } from "./Backend/Data";

function App() {
  const [data] = useState(whetherData);

  const [selected, setSelected] = useState(null);

  const makeSelectedItem = (id) => {
    const selectedDataArr = data.filter((item) => item.id === id);

    const selectedData = selectedDataArr[0];
    setSelected(selectedData);
  };

  useEffect(() => {
    const selectedDataArr = data.filter((item) => item.id === "1");
    makeSelectedItem(selectedDataArr?.[0]?.id);
  }, []);

  return (
    <div className="App">
      {selected !== null && (
        <>
          <div className="data-container-width">
            <CurrentDayData selected={selected} />
            <Tabs />
          </div>

          <AreaChart selected={selected} />
          <TempContainer
            data={data}
            selected={selected}
            makeSelectedItem={makeSelectedItem}
          />
        </>
      )}
    </div>
  );
}

export default App;
