import React from "react";
import ContentSlider from "../../components/ContentSlider";

import styles from "./styles.module.css";

const Nutrition = () => {
  return (
    <div className={styles.slider_container}>
      
      <ContentSlider className={styles.slides} slidesShown={3} />
    </div>
  );
};

export default Nutrition;
