import React from "react";
import { offeringsData } from "./offeringsData";

import List from "../../components/List";

import styles from "./styles.module.css";

const offerings = () => {
  return (
    <main className="inner-container">
      <h2 className={styles.offerings_title}>
        Nature’s Wellness Path’s Plant-Powered Weight Loss & Wellness Programs are
        right for you if you are:
      </h2>
      <List data={offeringsData} className={styles.offering_list} />
      <section className={styles.program_info}>
        <h3>
          You deserve to experience abundant energy & optimal health! I am happy
          and humbled to help guide you on your journey to conquer your greatest
          health-related challenge(s)!
        </h3>
        <p className={styles.program_details}>
          What is included in all of the programs:
        </p>
        <ul className={styles.program_details_list}>
          <li>
            Check-ins with Em via email &/or text in between virtual sessions at
            a frequency of your choosing
          </li>
          <li>
            Access to Em via text &/or email for questions, concerns, and advice
            throughout the program
          </li>
          <li>
            Resources including recipes, guide sheets, information regarding
            plant-based events, & more
          </li>
        </ul>
        <img
          className={styles.offerings_img}
          src="https://quotefancy.com/media/wallpaper/3840x2160/1755552-Virgil-Quote-The-greatest-wealth-is-health.jpg"
          alt=""
        />
        <h3 className={styles.path_title}>
          Pick You Plant-Powered Path To Optimal Wellness
        </h3>
        <div className={styles.path}>
          <p>Path #1: 4 Week Plant-Powered Wellness Jumpstart $150</p>
          <p>
            &#x2022; Includes above plus 4 virtual one-hour sessions with your
            Dietitian & guide, Em
          </p>
        </div>
        <div className={styles.path}>
          <p>Path #2: 8 Week Plant-Powered Wellness Program $275</p>
          <p>
            {" "}
            &#x2022; Includes above plus 8 virtual one-hour sessions with your
            Dietitian and guide, Em
          </p>
          <p>
            &#x2022; If desired, 1 of the sessions can be a virtual cook-along
            to increase comfort & fun in the kitchen!
          </p>
        </div>
        <div className={styles.path}>
          <p>Path #3: 12 Week Plant-Powered Wellness Program $425</p>
          <p>
            &#x2022; Includes above plus 12 virtual one-hour sessions with your
            Dietitian and guide, Em
          </p>
          <p>
            &#x2022; If desired, 1 of the sessions can be a virtual cook-along
            to increase comfort & fun in the kitchen!
          </p>
          <p>
            &#x2022;Includes option for more gradual transition to plant-based
            eating as desired
          </p>
        </div>
        <p className={styles.plan_details}>
          <span>Time:</span>
          Consecutive weeks (as your schedule permits) on a day and time that
          works for us both
        </p>
        <p className={styles.plan_details}>
          <span>Location:</span>
          Via Google Meet, in a quiet place of your choosing
        </p>
        <p className={styles.plan_details}>
          <span>Contact me:</span>
          to schedule a free discovery call to discuss your health-related
          challenges, goals, and to learn more about these plant-powered
          programs!
        </p>
        <p className={styles.plan_contact}>
          Cell: (609) 433-9186 or via email:
          <a href="emilyperrymanrd@gmail.com">emilyperrymanrd@gmail.com</a>
        </p>
      </section>
    </main>
  );
};

export default offerings;
