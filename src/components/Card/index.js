import React from "react";
import styles from "./styles.module.css";

const Card = ({ imageHeight, title, image, category }) => {
  return (
    <div className={styles.card_container}>
      <div
        className={`${styles.image_container} ${styles[imageHeight]} `}
        style={{ backgroundImage: `url(${image})` }}
      >
        <img className={styles.image} src={image} alt={title} title={title} />
      </div>
      <p>{category}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
