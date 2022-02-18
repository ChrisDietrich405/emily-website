//https://kristinademuth.com/

import logo from "./logo.svg";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Cards from "./components/Cards";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main_wrapper}>
      <Header />
      {/* <Slider /> */}
      <Slideshow />
      <Cards />
    </div>
  );
}

export default App;
