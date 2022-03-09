import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.social_icons}>
        <div className={styles.inner}>
          <SocialIcons />
          {/* <ul className={styles.social_icons_list}>
            <li>
              <a href="#">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className={styles.header_content}>
        <div className={styles.inner}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.nav_menu}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
