import React from "react";

import ContentSlider from "../../components/ContentSlider";
import Banner from "../../components/Banner";

import {recipesList} from "./slideData"

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Recipes() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <div className={styles.recipes_container}>
        <ContentSlider numOfSlides={3} slideContent={recipesList}/>
      </div>
    </div>
  );
}

export default Recipes;
