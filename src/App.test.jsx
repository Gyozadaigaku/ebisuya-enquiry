import App from "./App";
import React from "react";
import renderer from "react-test-renderer";

it("matches to the snapshot", () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
