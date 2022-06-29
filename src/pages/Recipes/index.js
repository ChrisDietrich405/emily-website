import React from "react";
import RecipeSlider from "../../components/RecipeSlider";

import Banner from "../../components/Banner";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Recipes() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <div className={styles.recipes_container}>
        <RecipeSlider />
      </div>
    </div>
  );
}

export default Recipes;
