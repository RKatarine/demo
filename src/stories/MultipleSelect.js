import React from "react";
import { Select } from "../components/Select";

export default class DefaultSelect extends React.Component {
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
        items={items}
        multiple
        value={value}
        onChange={this.onChooseItem}
      />
    );
  }
}
