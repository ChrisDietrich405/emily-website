import React from "react";

const RecipeCard = ({ title, image, category }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="" />
      <p>{category}</p>
    </div>
  );
};

export default RecipeCard;
