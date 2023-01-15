import Link from "next/link";
import Head from "next/head";

import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Cards from "../../src/Cards/Cards";
import styles from "../../src/Cards/cards.module.css";

export const Articles = () => {
    return (
        <div>
            <Header />
            <Head>
                <title> Articles - VGSEVEN </title>
            </Head>
            <div className={styles.main}>
                <h2> All Articles </h2>
                <Cards />
            </div>
            <Footer />
        </div>
    )
}

export default Articles;