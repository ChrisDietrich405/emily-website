import React from "react";
import Slider from "react-slick";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "../RecipeCard";

const RecipeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  const recipesList = [
    {
      img: "../images/tofu.png",
      title: "quinoa dinner",
      category: "main course",
    },
    {
      img: "bye",
      title: "food dinner",
      category: "dessert",
    },
    {
      img: "opa",
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
