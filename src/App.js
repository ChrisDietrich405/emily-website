//https://kristinademuth.com/
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Routes from "./components/Routes";

import styles from "./Global.module.css";

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
