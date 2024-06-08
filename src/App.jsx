import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    // prevent submitting to the server
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Logic for message
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div className="wei">
              <label>Weight(lbs)</label>
              <input
                type="text"
                // placeholder="Enter Weight Value"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="hei">
              <label>Height(inches)</label>
              <input
                type="text"
                // placeholder="Enter Height Value"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="btn">
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" className="reload-btn" onClick={reload}>
                Reload
              </button>
            </div>
          </form>
          <div className="center">
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
