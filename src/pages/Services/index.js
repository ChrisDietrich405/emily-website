import React from "react";

import Banner from "../../components/Banner";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Services() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <div className={styles.services_container}>
        <div className={styles.inner_container}>
          <div className={styles.services_info_container}>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              illum nihil labore quaerat ea ipsum.
            </p>
          </div>
          <div className={styles.services_info_container}>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              illum nihil labore quaerat ea ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
