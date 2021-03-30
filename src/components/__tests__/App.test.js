import React from "react";
import { render } from "@testing-library/react";
import App from "../../App.js";

// write a test that will check to see if the App title is 'School Picker'
test("renders page title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/School Picker/i);
  expect(titleElement).toBeInTheDocument();
});
