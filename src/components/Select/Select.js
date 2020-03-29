import React from "react";
import styles from "./Select.module.css";
import ArrowIcon from "./ArrowIcon";
import DefaultValueComponent from "./DefaultValueComponent";

export default class Select extends React.Component {
  static defaultProps = {
    valueComponent: DefaultValueComponent,
    items: [],
    onChange: () => {},
  };

  state = {
    itemsContainerBox: {},
    opened: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.setItemContainerBox);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.setItemContainerBox);
  }

  getItemsContainerBox = () => {
    if (
      this.rootElement === undefined ||
      this.rootElement === null ||
      this.itemsContainerElement === undefined ||
      this.itemsContainerElement === null
    ) {
      return;
    }
    const rootElementBoundary = this.rootElement.getBoundingClientRect();
    const left = rootElementBoundary.left;
    const bottom =
      rootElementBoundary.top + this.itemsContainerElement.offsetHeight;
    const top =
      bottom > window.innerHeight
        ? rootElementBoundary.bottom - this.itemsContainerElement.offsetHeight
        : rootElementBoundary.top;
    return {
      width: `${this.rootElement.offsetWidth}px`,
      left: `${left}px`,
      top: `${top}px`,
    };
  };

  setItemContainerBox = () => {
    const itemsContainerBox = this.getItemsContainerBox();
    this.setState({ itemsContainerBox });
  };

  renderItemsContainer = () => (
    <div className={styles.wrapper} onClick={this.closeItemsContainer}>
      <div
        className={styles.container}
        ref={(itemsContainer) => {
          this.itemsContainerElement = itemsContainer;
        }}
        style={this.state.itemsContainerBox}
      >
        <ul className={styles.list}>
          {this.props.items.map((item, idx) => (
            <li
              key={idx}
              className={
                item === this.props.value ? styles.itemActive : styles.item
              }
              onClick={() => this.props.onChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  openItemsContainer = () => {
    this.setState(
      (state) => ({
        opened: true,
      }),
      this.setItemContainerBox
    );
  };

  closeItemsContainer = () => {
    this.setState({
      opened: false,
    });
  };

  render() {
    const { style, value, valueComponent: ValueComponent } = this.props;
    const { opened } = this.state;
    return (
      <React.Fragment>
        <div
          className={styles.root}
          style={style}
          ref={(root) => {
            this.rootElement = root;
          }}
        >
          <div className={styles.value} onClick={this.openItemsContainer}>
            <ValueComponent value={value} />
          </div>
          <button className={styles.button} onClick={this.openItemsContainer}>
            <ArrowIcon />
          </button>
        </div>
        {opened && this.renderItemsContainer()}
      </React.Fragment>
    );
  }
}
