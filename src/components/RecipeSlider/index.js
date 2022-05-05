import React from "react";
import Slider from "react-slick";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "../RecipeCard";

const slideshow1 = window.location.origin + "/assets/images/tofu.png";
const slideshow2 = window.location.origin + "/assets/images/chickpeas.jpg";

const RecipeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
  ];
  return (
    <Slider {...settings}>
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
