//https://kristinademuth.com/
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
// import Slider from "./components/Slider";
// import Slideshow from "./components/Slideshow";
// import Cards from "./components/Cards";
import Footer from "./components/Footer";
// import PictureCards from "./components/PictureCards";
import Routes from "./components/Routes";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main_wrapper}>
      <Router>
        <Header />
        {/* <Slider /> */}
        <Routes />
        {/* <Slideshow />
        <Cards />
        <PictureCards /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
