import React, { useEffect } from "react";
import "./App.css";
import { Rater } from "./components/Rater";
import { Results } from "./components/Results";
import data from "./db.json";

function App() {
  const [step, setStep] = React.useState("rater");
  const [schools, setSchools] = React.useState([]);
  const selectedSchools = schools.length >= 4 ? schools.slice(0, 4) : [];

  const goToRater = () => {
    setStep("rater");
  };
  const goToResults = () => {
    setStep("results");
  };

  const mainContent = (
    <main>
      {step === "rater" ? <Rater schools={schools} /> : ""}
      {step === "results" ? <Results schools={selectedSchools} /> : ""}
      {step !== "rater" ? (
        <button className="large-button" onClick={goToRater}>
          Change Selections
        </button>
      ) : (
        ""
      )}
      {step !== "results" ? (
        <button className="large-button" onClick={goToResults}>
          See Results
        </button>
      ) : (
        ""
      )}
    </main>
  );

  useEffect(() => {
    setSchools(data.colleges);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>School Picker</h1>
      </header>
      {schools.length > 0 ? mainContent : "loading..."}
    </div>
  );
}

export default App;
