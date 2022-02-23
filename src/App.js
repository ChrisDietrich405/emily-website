//https://kristinademuth.com/

import logo from "./logo.svg";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import PictureCards from "./components/PictureCards";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main_wrapper}>
      <Header />
      {/* <Slider /> */}
      <Slideshow />
      <Cards />
      <PictureCards />
      <Footer />
    </div>
  );
}

export default App;
