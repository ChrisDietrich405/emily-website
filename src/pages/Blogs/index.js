import React from "react";

import Banner from "../../components/Banner";
import ContentSlider from "../../components/ContentSlider";

import {blogsList} from "./slideData"

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Blogs() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <ContentSlider numOfSlides={4} slideContent={blogsList} />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
