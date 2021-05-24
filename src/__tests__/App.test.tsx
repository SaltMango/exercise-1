import App from "../App";
import React from "react";
import TestRenderer from "react-test-renderer";

Date.now = jest.fn(() => new Date("2020-05-25T12:20:30Z").getTime());
test("time renders correctly", () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});