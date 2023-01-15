import Header from "../src/Header/Header";
import Footer from "../src/Footer/Footer";
import styles from "../styles/home.module.css";
import FeaturedCards from "../src/FeaturedCards/FeaturedCards";

export default function Home () {
  return (
    <div>
      <Header />
        <FeaturedCards />
        <div className={styles.main}>
            <h2 className={styles.title}> Active Projects </h2>
            <div className={styles.sections}>
                <h3> 1 CSLAB </h3>
                <p> Introducing CSLAB..</p>
            </div>

            <h2 className={styles.title}> Upcoming Projects </h2>
            <div className={styles.sections}>
                <h3> 1 Vector </h3>
                <p> Introducing Vector..</p>
            </div>
        </div>
      <Footer /> 
    </div>
  );
}