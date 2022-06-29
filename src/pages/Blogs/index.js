import React from "react";

import Banner from "../../components/Banner";
import BlogPosts from "../../components/BlogPosts";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Blogs() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <BlogPosts />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
