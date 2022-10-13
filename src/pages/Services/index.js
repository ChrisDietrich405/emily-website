import React from "react";

import { servicesData } from "./data";

import Banner from "../../components/Banner";
import Text from "../../components/Text";

import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/vegfood.jpg";

function Services() {
  return (
    <>
      <Banner picturePath={bannerPicture} />
      <section className="inner-container">
       <Text servicesData={servicesData}/>
      </section>
    </>
  );
}

export default Services;
