import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState(170); // Initial height in cm
  const [weight, setWeight] = useState(70); // Initial weight in kg

  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }
    return 0;
  };

  return (
    <main className="mainclass">
      <h1> BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-op">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="48"
          max="200"
          value={weight}
          onChange={onWeightChange}
        />
        <p className="slider-op">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="120"
          max="220"
          value={height}
          onChange={onHeightChange}
        />
        <div className="bmi-result">
          <p>Your BMI is: {calculateBMI()}</p>
        </div>
      </div>
    </main>
  );
};

export default App;
