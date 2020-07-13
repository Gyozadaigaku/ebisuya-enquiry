import Answer from "./Answer";
import renderer from "react-test-renderer";
import React from "react";

const selectAnswer = () => {};

test("matches to the snapshot", () => {
  const component = renderer.create(
    <Answer
      content={"予約したい"}
      key={1}
      nextId={"makeReservation"}
      select={selectAnswer}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
