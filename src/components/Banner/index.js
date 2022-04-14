import React from "react";

import styles from "./styles.module.css";

const Banner = ({ picturePath }) => {
  return (
    <div className={styles.container}>
      <img src={picturePath} alt="" />
    </div>
  );
};

export default Banner;
