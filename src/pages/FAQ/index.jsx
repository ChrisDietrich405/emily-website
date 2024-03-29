import React from "react";

import Banner from "../../components/Banner";
import Accordion from "../../components/Accordion";

import { questions } from "./questions";
import styles from "./styles.module.css";

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const FAQ = () => {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <div className={styles.faq_container}>
        <h1>Frequently Asked Questions</h1>
        <div className={styles.accordion_container}>
          <Accordion questions={questions} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
