import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { breakfastList } from "../Breakfast/slideData";

const RecipePage = () => {
  const { url } = useParams();

  return (
    <>
      <Header />

      <div style={{marginTop: "200px"}}>
        
      </div>
      <Footer />
    </>
  );
};

export default RecipePage;
