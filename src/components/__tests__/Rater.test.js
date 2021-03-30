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

  it('check to see if first school displays on initial load', () => {
    const { getByText } = render(<Rater schools={testSchools} />)
    const schoolElement = getByText(new RegExp(testSchools[0].name));
    expect(schoolElement).toBeInTheDocument();
  });

  // write a test that will check to see if the 2nd school displays when the next button is pressed

  it('check to see if the 2nd school displays when next btn is pressed', () => {
    const { getByText } = render(<Rater schools={testSchools} />)
    const nextbutton = getByText(/Next/i)
    nextbutton.click()
    const schoolElement = getByText(new RegExp(testSchools[1].name));
    expect(schoolElement).toBeInTheDocument();
  })

  // write a test that will check to see if the 1st school displays when the previous button is pressed
});

it('check to see if previous school displays when btn is pressed', () => {
  const realUseSTate = React.useState
  const schoolIndex = 1

  jest.spyOn(React, "useState").mockImplementationOnce(() => {
    return realUseSTate(schoolIndex)
  })
  const { getByText } = render(<Rater schools={testSchools} />)
  const prevButton = getByText(/Previous/i);
  prevButton.click();
  const schoolElement = getByText(new RegExp(testSchools[0].name));
  expect(schoolElement).toBeInTheDocument();
})