import styles from "./styles.module.css";

const publicURL = import.meta.env.VITE_PUBLIC_URL;

const Cards = () => {
  console.log(publicURL)
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid_container}>
          <div className={styles.grid}>
            <img
              className={styles.grid_pic}
              src={publicURL + "/assets/images/chickpeas.jpg"}
              alt="grid-pic"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <img
              className={styles.grid_pic}
              src={publicURL + "/assets/images/tofu.png"}
              alt="grid-pic"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <img
              className={styles.grid_pic}
              src={publicURL + "/assets/images/chickpeas.jpg"}
              alt="grid-pic"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <img
              className={styles.grid_pic}
              src={publicURL + "/assets/images/tofu.png"}
              alt="grid-pic"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
