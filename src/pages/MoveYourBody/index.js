import React from "react";
import Banner from "../../components/Banner";
import ContentSlider from "../../components/ContentSlider";

import { moveYourBody } from "./slideData";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const MoveYourBody = () => {
  return (
    <>
      <Banner picturePath={bannerPicture} />
      <section className="inner_container">
        <ContentSlider
          childrenImageHeight="medium"
          numOfSlides={3}
          slideContent={moveYourBody}
        />
      </section>
    </>
  );
};

export default MoveYourBody;
