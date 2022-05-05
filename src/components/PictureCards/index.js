// import grid1 from "../../images/chickpeas.jpg";
// import grid2 from "../../images/tofu.png";

import styles from "./styles.module.css";

const PictureCards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid_container}>
          <div className={styles.grid}>
            <img
              className={styles.grid_pic}
              src={process.env.PUBLIC_URL + "/assets/images/tofu.png"}
              alt="grid-pic"
            ></img>
          </div>
          <div className={styles.grid}>
            <img
              className={styles.grid_pic}
              src={process.env.PUBLIC_URL + "/assets/images/chickpeas.jpg"}
              alt="grid-pic"
            ></img>
          </div>
          <div className={styles.grid}>
            <img
              className={styles.grid_pic}
              src={process.env.PUBLIC_URL + "/assets/images/tofu.png"}
              alt="grid-pic"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureCards;
