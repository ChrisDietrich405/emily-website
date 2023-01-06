import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { breakfastList } from "../Breakfast/slideData";

const RecipePage = () => {
  const { url } = useParams();
  
  const filterBreakfastRecipe = breakfastList.filter((item) => {
    const splittedUrl = item.url.split("/")
    return splittedUrl[1] === url
  })

  // const filterRecipe = breakfastList.filter((item) => item.title === "socks") 
  
  return (
    <>
      <Header />
      <div style={{ marginTop: "200px" }}>
          {filterBreakfastRecipe.map((item) => {
            return (
              <h1>{item.url}</h1>
            )
          })}
      </div>
      {JSON.stringify(filterBreakfastRecipe)}
      <Footer />
    </>
  );
};

export default RecipePage;
