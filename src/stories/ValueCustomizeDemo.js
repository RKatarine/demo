import React from "react";
import { Select } from "../components/Select";

const selectedStyle = {
  width: "400px",
  height: "50px",
  boxShadow:
    "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#fff",
  borderRadius: "5px",
  paddingLeft: "10px",
};

const imageStyle = {
  width: "40px",
  height: "40px",
};

const Image = () => (
  <img
    src="https://media.moddb.com/images/members/1/473/472723/Star_wars_galactic_empire_emblemsvg.png"
    alt="StarWarsImage"
    style={imageStyle}
  />
);

const AttachMoneyIcon = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    {...style}
  >
    <path d="M9.56 8.1c-1.6-.51-2.66-.71-2.66-1.88 0-.83.72-1.62 2.1-1.62 1.59 0 2.1.88 2.1 1.94H13c0-1.79-1.17-3.09-3-3.44V1H8v2.11c-1.58.32-3 1.37-3 3.12 0 2.25 1.78 2.8 4 3.52 1.88.61 2.25 1.04 2.25 2.09 0 .9-.67 1.56-2.25 1.56-1.2 0-2.25-.84-2.25-2.06h-2c0 1.88 1.38 3.2 3.25 3.56V17h2v-2.07c2.04-.29 3.2-1.49 3.2-3.1 0-1.87-.94-2.87-3.64-3.73z" />
  </svg>
);

const iconStyle = {
  "margin-right": "6px",
};

const valueStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-starts",
  height: "100%",
  width: "100%",
  fontSize: "18px",
};

const ValueComponent = ({ value }) => (
  <div style={valueStyles}>
    <AttachMoneyIcon style={iconStyle} />
    <span>{value}</span>
  </div>
);

export default class ValueCustomizeDemo extends React.Component {
  state = {
    value: this.props.value,
  };

  onChooseItem = (items) => {
    const value = items.join(", ").slice(0, 20);
    this.setState({
      value: value === items.join(", ") ? value : `${value}...`,
    });
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;
    return (
      <Select
        style={selectedStyle}
        items={items}
        multiple
        value={value}
        onChange={this.onChooseItem}
        iconComponent={Image}
        valueComponent={ValueComponent}
      />
    );
  }
}
