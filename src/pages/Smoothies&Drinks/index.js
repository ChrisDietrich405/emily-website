import React from "react";
import Banner from "../../components/Banner";
import ContentSlider from "../../components/ContentSlider";

import { smoothiesDrinksList } from "./slideData";

import styles from "./styles.module.css";

const bannerPath = window.location.origin + "/assets/images/tofu.png";
const SmoothiesDrinks = () => {
  return (
    <>
      <Banner picturePath={bannerPath} />
      <section className="inner_container">
        <ContentSlider
          childrenImageHeight="large"
          numOfSlides={2}
          slideContent={smoothiesDrinksList}
        />
      </section>
    </>
  );
};

export default SmoothiesDrinks;
