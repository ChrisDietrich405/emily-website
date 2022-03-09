import grid1 from "../../images/chickpeas.jpg";
import grid2 from "../../images/tofu.png";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid_container}>
          <div className={styles.footer_container}>
            <div>
              <img
                src={grid1}
                className={styles.footer_pic}
                alt="picture of dietician"
              ></img>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                accusantium, sit modi debitis repellat culpa.
              </p>
            </div>
            <div className={styles.meatless_monday_logo}>
              <img src={grid1} alt="picture of dietician"></img>
            </div>
            <div className={styles.credentials}>
              {" "}
              <img src={grid1} alt="picture of dietician"></img>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                accusantium, sit modi debitis repellat culpa.
              </p>
            </div>
          </div>
          {/* <div>
            <ul className={styles.social_icons_list}>
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
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
