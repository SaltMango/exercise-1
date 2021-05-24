import App from "../App";
import React from "react";
import TestRenderer from "react-test-renderer";

test("time renders correctly", () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
