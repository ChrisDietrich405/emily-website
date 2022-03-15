import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link onClick={(e) => setIsActive(!isActive)} to="/blogs">
                  Blogs
                </Link>

                {isActive && (
                  <div className="dropdown-content">
                    <div>stuff</div>
                    <div>some other stuff</div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
