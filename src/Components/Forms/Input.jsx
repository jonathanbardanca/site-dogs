import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={label}></label>
      <input className={styles.input} type={type} />
      <p className={styles.error}>Error</p>
    </div>
)};

export default Input;
