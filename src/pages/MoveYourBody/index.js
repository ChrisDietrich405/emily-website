import React from "react";
import Banner from "../../components/Banner";
import ContentSlider from "../../components/ContentSlider";

import { moveYourBody } from "./slideData";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const MoveYourBody = () => {
  return (
    <div className={styles.move_your_body_container}>
      <Banner picturePath={bannerPicture} />
      <ContentSlider
        childrenImageHeight="medium"
        numOfSlides={3}
        slideContent={moveYourBody}
      />
    </div>
  );
};

export default MoveYourBody;
