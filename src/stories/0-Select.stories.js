import React from "react";
import DefaultSelect from "./DefaultSelect";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // height: "-webkit-fill-available",
  height: "160vh",
  top: "400px",
};

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const Presentation = () => (
  <div style={style}>
    <DefaultSelect value="Some item" items={items} />
  </div>
);

export default {
  title: "Components",
  component: Presentation,
};

export const ToStorybook = () => <Presentation />;

ToStorybook.story = {
  name: "Select",
};
