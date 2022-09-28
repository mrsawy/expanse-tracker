import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.js";

function Chart(props) {
  const pointsValue = props.dataPoints.map((e) => e.value);
  const totalMax = Math.max(...pointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((point) => {
        return (
          <ChartBar
            value={point.value}
            maxValue={totalMax}
            label={point.label}
            key={point.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
