import { useState, useEffect } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

import slideshow1 from "../../images/chickpeas.jpg";
import slideshow2 from "../../images/tofu.png";

import "./styles.css";

export default function Slideshow() {
  const imageArray = [slideshow1, slideshow2];

  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);

  console.log(index);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        // clearInterval(interval);
        return;
      }
      if (index === imageArray.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
    console.log("gekki", interval);
    return () => clearInterval(interval);
  }, [index, pause]);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {imageArray.map((image, i) => (
          <img
            className={`${index === i ? "active" : "inactive"} slideshow-image`}
            src={image}
          ></img>
        ))}
      </div>
    </div>
  );
}
