import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./AreaChart.css";

const AreaChart = ({ selected }) => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: selected.wholeDayTemp.time,
      },
    },
    series: [
      {
        name: "series-1",
        data: selected.wholeDayTemp.temp,
      },
    ],
  });
  useEffect(() => {
    if (selected.wholeDayTemp.time && selected.wholeDayTemp.temp) {
      setState({
        options: {
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: selected.wholeDayTemp.time,
          },
        },
        series: [
          {
            name: "series-1",
            data: selected.wholeDayTemp.temp,
          },
        ],
      });
    }
  }, [selected.wholeDayTemp.time, selected.wholeDayTemp.temp]);
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="area"
      width={900}
      height={320}
    />
  );
};

export default AreaChart;
