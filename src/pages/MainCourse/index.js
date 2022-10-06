import React from "react";

import ContentSlider from "../../components/ContentSlider";
import Banner from "../../components/Banner";

import { mainCourseList } from "./slideData";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/vegfood.jpg";

const MainCourse = () => {
  return (
    <>
      <Banner picturePath={bannerPicture} />
      <section className="inner-container">
        <ContentSlider
          childrenImageHeight="medium"
          numOfSlides={3}
          slideContent={mainCourseList}
        />
      </section>
    </>
  );
};

export default MainCourse;
