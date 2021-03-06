import React from "react";
import { Select } from "../components/Select";

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
