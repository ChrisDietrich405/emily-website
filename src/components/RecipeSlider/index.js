import React from "react";
import Slider from "react-slick";

import RecipeCard from "../RecipeCard";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideshow1 = window.location.origin + "/assets/images/tofu.png";
const slideshow2 = window.location.origin + "/assets/images/chickpeas.jpg";

const RecipeSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "25px", display: "block", width: "50px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          zIndex: 1,
          left: "25px",
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          <RecipeCard
            title={recipeListItem.title}
            image={recipeListItem.img}
            category={recipeListItem.category}
          />
        );
      })}
    </Slider>
  );
};

export default RecipeSlider;
