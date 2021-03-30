import React from "react";
import "../styles/Results.css";

export function Results(props) {
  return (
    <>
      <h2>Compare your Selections</h2>
      <div className="results">
        {props.schools.map((school) => (
          <div className="result">
            <div className="result-fact result-name">{school.name}</div>
            <div className="result-fact result-location">{school.location}</div>
            <div className="result-fact result-description">
              {school.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
