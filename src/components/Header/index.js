import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";
const logo = window.location.origin + "/assets/images/logo.png";


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
          <div className={styles.logo}>
            <img src={logo} style={{width: "60px"}} alt="" />
          </div>
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
                    <Link to="/appetizers-snacks">Appetizers & Snacks</Link>
                    <Link to="/smoothies-drinks">Smoothies & Drinks</Link>
                    <Link to="/move-your-body">Move Your Body</Link>
                    <Link>Travel</Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">
                  Services
                  <div className={styles.dropdown_content}>
                    <Link to="/organizations">Organizations</Link>
                    <Link to="/offerings">What we offer</Link>

                    <Link to="/photography">Photography</Link>
                  </div>
                </Link>
              </li>
              
              <li>
                <Link to="/blogs">
                  Blogs
                  <div className={styles.dropdown_content}>
                    <Link to="/nutrition">Nutrition</Link>

                    <Link to="/move-your-body">Move Your Body</Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
