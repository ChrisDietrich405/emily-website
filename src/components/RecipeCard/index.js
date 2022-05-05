import React from "react";

const RecipeCard = ({ title, image, category }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
