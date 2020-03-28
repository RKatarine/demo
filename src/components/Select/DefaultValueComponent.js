import React from "react";
import styles from "./DefaultValueComponent.module.css";

export default function DefaultValueComponent({ value }) {
  return <div className={styles.root}> {value}</div>;
}
