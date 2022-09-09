import ContentSlider from "../../components/ContentSlider";
import styles from "./styles.module.css";
import { nutritionList } from "./slideData";


const Nutrition = () => {
  return (
    <ContentSlider
      className={styles.slides}
      slidesShown={3}
      slideContent={nutritionList}
    />
  );
};

export default Nutrition;

// import React from "react";
// import ContentSlider from "../../components/ContentSlider";

// import styles from "./styles.module.css";

// const Nutrition = () => {
//   return (
//     <div className={styles.slider_container}>
//       <h1>hello</h1>
//       <ContentSlider className={styles.slides} slidesShown={3} />
//     </div>
//   );
// };

// export default Nutrition;
