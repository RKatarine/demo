import React from "react";
import { Select } from "../components/Select";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "-webkit-fill-available",
};

export default class DefaultSelect extends React.Component {
  state = {
    value: this.props.value,
  };

  onChooseItem = (item) => {
    this.setState({
      value: item,
    });
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;
    return <Select items={items} value={value} onChange={this.onChooseItem} />;
  }
}
