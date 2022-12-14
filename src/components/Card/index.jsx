import React from "react";
import styles from "./styles.module.css";

shoes = {
  nike: "33",
  adidas: "333"
}




const Card = ({ imageHeight, listItem }) => {
  console.log(styles);
  return (
    <div className={styles.card_container}>
      <div
        className={`${styles.image_container} ${styles[imageHeight]} `}
        style={{ backgroundImage: `url(${listItem.img})` }}
      >
        <img
          className={styles.image}
          src={listItem.img}
          alt={listItem.title}
          title={listItem.title}
        />
      </div>
      <p>{listItem.category}</p>
      <h3>{listItem.title}</h3>
    </div>
  );
};

export default Card;
