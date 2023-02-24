import Head from "next/head";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/home.module.scss";
import Cards from "@/components/Cards/Cards";
import Data from "@/components/Data/ProjectsData";

export default function Projects() {
  return (
    <div>
      <Header />
      <Head>
        <title> Projects - VGSEVEN </title>
      </Head>

      <div className={styles.main}>
        <h1> Projects </h1>
        <div className={styles.featuredCards}>
          {Data.map((data) => (
            <Cards
              key={data.Title}
              Title={data.Title}
              Description={data.Description}
              Link={data.Link}
              Tag={data.Tag}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
