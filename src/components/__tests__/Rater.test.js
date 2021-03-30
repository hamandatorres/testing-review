import React from "react";
import { render } from "@testing-library/react";
import { Rater } from "../Rater";

describe("<Rater />", () => {
  const testSchools = [
    { name: "School 1" },
    { name: "School 2" },
    { name: "School 3" },
  ];

  // write a test that will check to see if the first school displays on initial load

  it("shows the first school on initial load", () => {
    const { getByText } = render(<Rater schools={testSchools} />);
    const schoolElement = getByText(new RegExp(testSchools[0].name));
    expect(schoolElement).toBeInTheDocument();
  });

  // write a test that will check to see if the 2nd school displays when the next button is pressed

  it("shows the second school after next is pressed", () => {
    const { getByText } = render(<Rater schools={testSchools} />);
    const nextButton = getByText(/Next/i);
    nextButton.click();
    const schoolElement = getByText(new RegExp(testSchools[1].name));
    expect(schoolElement).toBeInTheDocument();
  });

  // write a test that will check to see if the 1st school displays when the previous button is pressed
  it("shows the first school when currentSchool is set to 2 in the state and previous is selected", () => {
    const realUseState = React.useState;
    const currentSchool = 2;
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => realUseState(currentSchool));
    const { getByText } = render(<Rater schools={testSchools} />);
    const previousButton = getByText(/Previous/i);
    previousButton.click();
    const schoolElement = getByText(new RegExp(testSchools[1].name));
    expect(schoolElement).toBeInTheDocument();
  });
});
