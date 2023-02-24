import Head from "next/head";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Cards from "@/components/Cards/Cards";
import styles from "@/styles/home.module.scss";
import Data from "@/components/Data/ArticlesData";

export default function Articles() {
  return (
    <div>
      <Header />
      <Head>
        <title> Articles - VGSEVEN </title>
      </Head>

      <div className={styles.main}>
        <h1> Articles </h1>
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
