import React from "react";

import Banner from "../../components/Banner";
import ContentSlider from "../../components/ContentSlider";

import {blogsList} from "./slideData"

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Blogs() {
  return (
    <>
      <Banner picturePath={bannerPicture} />
        <div className="inner-container">
          <ContentSlider numOfSlides={4} slideContent={blogsList} />
        </div>
    </>
  );
}

export default Blogs;
