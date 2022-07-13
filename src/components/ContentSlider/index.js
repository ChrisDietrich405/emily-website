import React from "react";
import Slider from "react-slick";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import Card from "../Card";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideshow1 = window.location.origin + "/assets/images/tofu.png";
const slideshow2 = window.location.origin + "/assets/images/chickpeas.jpg";

const ContentSlider = ({ slidesShown }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={styles.next_button} onClick={onClick}>
        <BsFillArrowRightCircleFill className={styles.next_arrow} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={styles.prev_button} onClick={onClick}>
        <BsFillArrowLeftCircleFill className={styles.prev_arrow} />
      </button>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesShown,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const recipesList = [
    {
      img: slideshow1,
      title: "quinoa dinner",
      category: "main course",
    },
    {
      img: slideshow2,
      title: "food dinner",
      category: "dessert",
    },
    {
      img: slideshow1,
      title: "quinoa dinner",
      category: "main course",
    },
    {
      img: slideshow1,
      title: "quinoa dinner",
      category: "main course",
    },
    {
      img: slideshow2,
      title: "food dinner",
      category: "dessert",
    },
    {
      img: slideshow1,
      title: "quinoa dinner",
      category: "main course",
    },
  ];
  return (
    <Slider {...settings} className={styles.slider_container}>
      {recipesList.map((recipeListItem) => {
        return (
          <Card
            title={recipeListItem.title}
            image={recipeListItem.img}
            category={recipeListItem.category}
          />
        );
      })}
    </Slider>
  );
};

export default ContentSlider;
