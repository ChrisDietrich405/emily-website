import React from "react";
import Banner from "../../components/Banner";
import Text from "../../components/Text";
import { photographyData } from "./data";

const bannerPicture = `${window.location.origin}/assets/images/vegfood.jpg`;

const Photography = () => {
  return (
    <>
      <Banner picturePath={bannerPicture} />
      <section className="inner-container">
        <Text data={photographyData} />
      </section>
    </>
  );
};

export default Photography;
