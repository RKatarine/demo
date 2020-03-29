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

export default class CssCustomizeDemo extends React.Component {
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
      />
    );
  }
}
