import { useState } from "react";
import { Link } from "react-router-dom";

import Slideshow from "../../components/Slideshow";
import Cards from "../../components/Cards";
import PictureCards from "../../components/PictureCards";
import styles from "./styles.module.css";
import List from "../../components/List";
import { homeData, homeData2 } from "./homeData";

const EmPicture = window.location.origin + "/assets/images/vegfood.jpg";

export default function Home() {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <Slideshow />
      <section className={`${styles.container} inner-container`}>
        <div className={styles.intro}>
          <img src={EmPicture} alt="Em photo" className={styles.photo} />
          <div>
            <h1>Hi, I'm Em</h1>
            <p>
              I have an immense passion for helping guide others toward a more
              healthful and vibrant life. This passion has led me to pursue a
              career as a Registered Dietitian, to obtain a Master's Degree in
              Nutrition, and to learn as much as I can about balanced nutrition
              and healthy lifestyle practices.
              <a
                href="#some"
                onClick={() => setReadMore((prevState) => !prevState)}
              >
                {readMore ? "show less" : "read more"}
              </a>
            </p>
            {readMore && (
              <p id="some">
                These healthy lifestyle practices I abbreviate as SPARC since
                they are sure to add spark to your life. They are as follows:

                < List data={homeData}/>
                
                
                Early in my career as a Dietitian at
                several nursing homes in Baltimore City, I witnessed what seemed
                like immense suffering and reduced quality of life in men and
                women, some as young as myself at the time (late 20s) due to
                debilitating diseases like stroke, Type 2 Diabetes, kidney
                failure, and others. I felt at a loss of how to help them which
                led me to want to find a way to help prevent others from
                suffering this same fate. Finding a way to help empower,
                educate, and support individuals on their journeys to achieving
                optimal health became my passion and something I feel so
                grateful to be able to do! Plant-based nutrition and other
                healthy lifestyle practices can help us to look and feel our
                best! Research has shown the numerous benefits to eating
                plant-based or moving in that direction and embracing other
                elements of SPARC. A few of the health problems that can be
                lessened or resolved by embracing the SPARC practices include:
                <List data={homeData2}/>
              </p>
            )}
          </div>
        </div>

        <Cards />
        <PictureCards />
      </section>
    </>
  );
}
