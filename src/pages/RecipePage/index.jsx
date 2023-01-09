import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { breakfastList } from "../Breakfast/slideData";
import { desserts } from "../Desserts/slideData";

const RecipePage = () => {
  const { mealUrl, url } = useParams();

  let filterRecipe = null;
  if (mealUrl === "breakfast") {
    filterRecipe = breakfastList.filter((item) => {
      const splittedUrl = item.url.split("/");
      console.log(splittedUrl);
      return splittedUrl[3] === url;
    });
  } else if (mealUrl === "desserts") {
    filterRecipe = desserts.filter((item) => {
      const splittedUrl = item.url.split("/");
      return splittedUrl[3] === url;
    });
  } else {
    filterRecipe = null;
  }

  return (
    <>
      <Header />
      <div style={{ marginTop: "200px" }}>
        {filterRecipe.map((item) => {
          return <h1>{item.content}</h1>;
        })}
      </div>

      <Footer />
    </>
  );
};

export default RecipePage;
