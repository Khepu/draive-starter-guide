import React from "react";
import styles from "./logo.module.css";

const Logo = (): JSX.Element => (
  <img className={styles.logo} src="img/logo.png" alt="draive's logo" />
);

export default Logo;
