import grid1 from "../../images/chickpeas.jpg";
import grid2 from "../../images/tofu.png";

import styles from "./styles.module.css";

const PictureCards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid_container}>
          <div className={styles.grid}>
            <img className={styles.grid_pic} src={grid1} alt="grid-pic"></img>
          </div>
          <div className={styles.grid}>
            <img className={styles.grid_pic} src={grid2} alt="grid-pic"></img>
          </div>
          <div className={styles.grid}>
            <img className={styles.grid_pic} src={grid1} alt="grid-pic"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureCards;
