import React from "react";
import "../styles/Rater.css";

export function Rater(props) {
  const [currentSchoolIndex, setCurrentSchoolIndex] = React.useState(0);
  const { schools } = props;
  const gotoNextSchool = () => {
    setCurrentSchoolIndex(currentSchoolIndex + 1);
  };
  const gotoPreviousSchool = () => {
    setCurrentSchoolIndex(currentSchoolIndex - 1);
  };
  const content = schools[currentSchoolIndex].name ? (
    <div className="rater">
      <div className="rater-question">
        Would you consider {schools[currentSchoolIndex].name}?
      </div>
      <div className="rater-buttons">
        <button onClick={gotoNextSchool}>
          <img className="thumbs-up" src="thumbs-up.svg" />
        </button>
        <button onClick={gotoNextSchool}>
          <img className="thumbs-down" src="thumbs-down.svg" />
        </button>
      </div>
      <div className="rater-navigation">
        <button className="navigation-button" onClick={gotoPreviousSchool}>
          &lt; Previous
        </button>
        <button className="navigation-button" onClick={gotoNextSchool}>
          Next &gt;
        </button>
      </div>
    </div>
  ) : (
    ""
  );
  console.log(schools[currentSchoolIndex].name, currentSchoolIndex);
  //   console.log(currentSchoolIndex);

  return (
    <>
      <h2>Make your Selections</h2>
      {content}
    </>
  );
}
