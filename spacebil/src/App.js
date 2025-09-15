import { useState } from "react";
import "./App.css";

function App() {
  const [original, setOriginal] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (original && discount) {
      const discounted = original - (original * discount) / 100;
      setResult(discounted.toFixed(2));
    } else {
      setResult("Enter valid values!");
    }
  };

  return (
    <div className="app-container">
      <h1>💫 Space Discount Calculator</h1>
      <div className="calculator">
        <label>Original Price ($)</label>
        <input
          type="number"
          value={original}
          onChange={(e) => setOriginal(e.target.value)}
          placeholder="Enter original price"
        />

        <label>Discount (%)</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Enter discount percentage"
        />

        <button onClick={handleCalculate}>Calculate</button>

        <div className="result">
          {result !== null && `Discounted Price: $${result}`}
        </div>
      </div>
    </div>
  );
}

export default App;

