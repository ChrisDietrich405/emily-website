import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ imageHeight, listItem }) => {
  return (
    <div className={styles.card_container}>
      {listItem.url ? (
        <Link to={listItem.url}>
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
        </Link>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Card;
