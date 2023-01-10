import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { breakfastList } from "../Breakfast/slideData";
import { desserts } from "../Desserts/slideData";
import { mainCourseList } from "../MainCourse/slideData";

import styles from "./styles.module.css";

const RecipePage = () => {
  const { mealUrl, specificRecipeUrl } = useParams();

  let filterRecipe = null;
  if (mealUrl === "breakfast") {
    filterRecipe = breakfastList.filter((item) => {
      const splitUrl = item.url.split("/");
      return splitUrl[3] === specificRecipeUrl;
    });
  } else if (mealUrl === "desserts") {
    filterRecipe = desserts.filter((item) => {
      const splittedUrl = item.url.split("/");
      return splittedUrl[3] === specificRecipeUrl;
    });
  } else if (mealUrl === "main-course") {
    filterRecipe = mainCourseList.filter((item) => {
      const splittedUrl = item.url.split("/");
      return splittedUrl[3] === specificRecipeUrl;
    });
  } else {
    filterRecipe = [];
  }

  return (
    <>
      <Header />
      <main style={{ marginTop: "100px" }}>
        {filterRecipe.map((item) => {
          return (
            <div className={styles.container}>
              <h1>{item.title}</h1>
              <p className={styles.description}>{item.description}</p>
              <h2>Ingredients</h2>
              <ul>
                {item.ingredients.map((ingredient) => {
                  return <li>{ingredient}</li>;
                })}
              </ul>
              <h2>Instructions</h2>
              <ol>
                {item.instructions.map((instruction) => {
                  return <li>{instruction}</li>;
                })}
              </ol>
              <p>{item.additionalInformation}</p>
            </div>
          );
        })}
      </main>

      <Footer />
    </>
  );
};

export default RecipePage;
