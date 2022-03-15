import Slideshow from "../../components/Slideshow";
import Cards from "../../components/Cards";
import PictureCards from "../../components/PictureCards";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Slideshow />
      <Cards />
      <PictureCards />
    </div>
  );
}
