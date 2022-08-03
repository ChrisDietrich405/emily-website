import React from "react";

import ContentSlider from "../../components/ContentSlider";
import Banner from "../../components/Banner";

import {breakfastList} from "./slideData"

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const Breakfast = () => {
  return (
    <div>
        <Banner picturePath={bannerPicture}/>
        <div className={styles.breakfast_container}>
            <ContentSlider numOfSlides={2} slideContent={breakfastList}/>
        </div>
    </div>
  )
}

export default Breakfast