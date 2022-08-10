import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.social_icons}>
        <div className={styles.inner}>
          <SocialIcons />
        </div>
      </div>
      <div className={styles.header_content}>
        <div className={styles.inner}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.nav_menu}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/recipes">
                  Recipes
                  <div className={styles.dropdown_content}>
                    <Link to="/breakfast">Breakfast</Link>
                    <Link to="/main-course">Main Course</Link>
                    <Link>Move your body</Link>
                    <Link>Travel</Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">
                  Services{" "}
                  <div className={styles.dropdown_content}>
                    <Link>stuff</Link>
                    <Link>some other stuff</Link>
                    <Link>more stuff</Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/blogs">
                  Blogs{" "}
                  <div className={styles.dropdown_content}>
                    <Link to="/nutrition">Nutrition</Link>
                    <Link>Move your body</Link>
                    <Link>Travel</Link>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
