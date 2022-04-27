import React from "react";

import Banner from "../../components/Banner";
import bannerPicture from "../../images/chickpeas.jpg";

import RecipeSlider from "../../components/RecipeSlider";

function Recipes() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <RecipeSlider />
    </div>
  );
}

export default Recipes;
