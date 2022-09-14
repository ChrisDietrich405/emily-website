import React from "react";

import ContentSlider from "../../components/ContentSlider";
import Banner from "../../components/Banner";

import {breakfastList} from "./slideData"

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const Breakfast = () => {
  return (
    <>
        <Banner picturePath={bannerPicture}/>
        <section className="inner_container">
            <ContentSlider childrenImageHeight="large" numOfSlides={2} slideContent={breakfastList}/>
        </section>
    </>
  )
}

export default Breakfast