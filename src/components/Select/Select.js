import React from "react";
import styles from "./Select.module.css";
import ArrowIcon from "./ArrowIcon";
import DefaultValueComponent from "./DefaultValueComponent";
import DefaultItemComponent from "./DefaultItemComponent";

export default class Select extends React.Component {
  static defaultProps = {
    valueComponent: DefaultValueComponent,
    iconComponent: ArrowIcon,
    itemComponent: DefaultItemComponent,
    items: [],
    onChange: () => {},
    multiple: false,
  };

  state = {
    itemsContainerBox: {},
    opened: false,
    selected: [],
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

  select = (item) => {
    const hasSelected = this.state.selected.includes(item);
    this.setState((state) => ({
      selected: hasSelected
        ? state.selected.filter((i) => i !== item)
        : [...state.selected, item],
    }));
  };

  onItemChoose = (item) => (event) => {
    if (this.props.multiple) {
      event.preventDefault();
      event.stopPropagation();
      this.select(item);
    } else {
      this.props.onChange(item);
    }
  };

  isActive = (item) => {
    if (this.props.multiple) {
      return this.state.selected.includes(item);
    } else {
      return this.props.value === item;
    }
  };

  renderItemsContainer = () => {
    const { itemComponent: ItemComponent } = this.props;
    return (
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
                  this.isActive(item) ? styles.itemActive : styles.item
                }
                onClick={this.onItemChoose(item)}
              >
                <ItemComponent value={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

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

    if (this.props.multiple) {
      this.props.onChange(this.state.selected);
    }
  };

  render() {
    const {
      style,
      value,
      valueComponent: ValueComponent,
      iconComponent: IconComponent,
    } = this.props;
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
            <IconComponent />
          </button>
        </div>
        {opened && this.renderItemsContainer()}
      </React.Fragment>
    );
  }
}
