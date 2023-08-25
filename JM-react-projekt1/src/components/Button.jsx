import React from "react";
import styles from "./Button.module.css";

const Button = ({ setCount }) => {
  return (
    <button
      className={styles.button}
      onClick={() => setCount((count) => count + 1)}
    >
      Dodaj klik
    </button>
  );
};

export default Button;
