import React from "react";
import styles from "./Outcome.module.css";

const Outcome = ({ count }) => {
  return <p className={styles.outcome}>Ilość kliknięć: {count}</p>;
};

export default Outcome;
