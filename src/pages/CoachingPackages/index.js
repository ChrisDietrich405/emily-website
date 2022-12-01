import React from "react";
import Banner from "../../components/Banner";
import List from "../../components/List";
import Text from "../../components/Text";
import { organizationData } from "./organizationData";
import { organizationData2 } from "./organizationData";
import { organizationData3 } from "./organizationData";

import styles from "./styles.module.css"

const bannerPath = `${window.location.origin}/assets/images/vegfood.jpg`;

const CoachingPackages = () => {
  return (
    <>
      <Banner picturePath={bannerPath} />
      <section className="inner-container">
        <h1 className="page_title">
          I am dedicated to helping you achieve your optimal health, let’s work
          together to see how we can help conquer your health-related
          challenges!
        </h1>
        <div className={styles.consultation_package}>
          <h2>Initial consultation plus 1 follow-up session:</h2>
          <List data={organizationData} />
          <p>
            **Sessions to be within a 3- month timeframe from time of initial
            consultation
          </p>
        </div>
        <div className={styles.consultation_package}>
          <h2>Initial consultation plus 3 follow-up sessions</h2>
          <List data={organizationData2} />
        </div>
        <div className={styles.consultation_package}>
          <h2>Initial consultation plus 6 follow-up sessions:</h2>
          <List data={organizationData3} />
          <p>
            **Sessions to be within a 6-month timeframe from time of initial
            consultation
          </p>
        </div>
        Plant-Powered Weight Loss and Wellness Programs Nature’s Wellness Path’s
        Plant-Powered Programs are right for you if you are: ● Sick of dieting,
        counting calories, &amp; cutting portion sizes to try to lose weight? ●
        Fed up with feeling like a failure for falling off track with your diet
        or health-related goals? ● Dreaming of the day when you will have more
        energy and less joint pain to do the activities you enjoy? ● Wanting to
        improve your blood pressure, cholesterol, and blood sugar without
        medications? ● Looking to improve your skin, gut, and brain health? ●
        Curious about trying out a plant-based diet but not sure how to get
        started? ● Ready to take greater control of your health? You deserve to
        experience abundant energy &amp; optimal health! I am happy and humbled
        to help guide you on your journey to achieve such! **Options for 4-, 8-,
        and 12-week programs Book a free discovery call with me today so we can
        discuss your health-related challenges, goals, and how we can work
        together to get you on the path to optimal health!
        {/* <Text data={organizationData} /> */}
      </section>
    </>
  );
};

export default CoachingPackages;
