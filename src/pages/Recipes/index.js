import React from "react";
import RecipeSlider from "../../components/RecipeSlider";

import Banner from "../../components/Banner";
// import bannerPicture from "../../images/chickpeas.jpg";
const bannerPicture = window.location.origin + "/assets/images/tofu.png";

function Recipes() {
  return (
    <div>
      <Banner picturePath={bannerPicture} />
      <RecipeSlider />
    </div>
  );
}

export default Recipes;
