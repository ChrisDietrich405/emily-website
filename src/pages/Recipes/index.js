import React from "react";
import ContentSlider from "../../components/ContentSlider";

import Banner from "../../components/Banner";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Recipes() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <div className={styles.recipes_container}>
        <ContentSlider />
      </div>
    </div>
  );
}

export default Recipes;
