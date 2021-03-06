import React from "react";
import DefaultSelect from "./DefaultSelect";
import MultipleSelect from "./MultipleSelect";
import CssCustomizeDemo from "./CssCustomizeDemo";
import ValueCustomizeDemo from "./ValueCustomizeDemo";

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

const Presentation = ({ children }) => <div style={style}>{children}</div>;

export default {
  title: "Components",
  component: Presentation,
};

export const Select = () => (
  <Presentation>
    <DefaultSelect value="Some item" items={items} />
  </Presentation>
);

Select.story = {
  name: "Select",
};

export const Multiple = () => (
  <Presentation>
    <MultipleSelect value="Some item" items={items} />
  </Presentation>
);

Multiple.story = {
  name: "Multiple",
};

export const CssCustomize = () => (
  <Presentation>
    <CssCustomizeDemo items={items} />
  </Presentation>
);

CssCustomize.story = {
  name: "CssCustomize",
};

export const ValueCustomize = () => (
  <Presentation>
    <ValueCustomizeDemo items={items} />
  </Presentation>
);

ValueCustomize.story = {
  name: "ValueCustomize",
};
