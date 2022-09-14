import Slideshow from "../../components/Slideshow";
import Cards from "../../components/Cards";
import PictureCards from "../../components/PictureCards";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <Slideshow />
      <section className={`${styles.container} inner_container`}>
        <Cards />
        <PictureCards />
      </section>
    </>
  );
}
