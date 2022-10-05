import React from "react";
import Banner from "../../components/Banner";
import ContentSlider from "../../components/ContentSlider";

import { appetizersSnacks } from "./slideData";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const AppetizersSnacks = () => {
  return (
    <>
      <Banner picturePath={bannerPicture} />
      <section className="inner-container">
        <ContentSlider
          childrenImageHeight="medium"
          numOfSlides={3}
          slideContent={appetizersSnacks}
        />
      </section>
    </>
  );
};

export default AppetizersSnacks;
