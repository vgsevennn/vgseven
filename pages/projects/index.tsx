import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import styles from "../../styles/projects.module.css"

import Head from "next/head";

export default function Projects () {
    return (
        <div>
            <Header/>
            <Head>
                <title> Projects - VGSEVEN </title>
            </Head>
            <div className={styles.main}>
                <h2> <b> VGSEVEN Projects </b></h2>
                <div className={styles.sections}>
                    <div className={styles.cards}>
                        <h3> CSLAB </h3>
                        <p> Introducing CSLAB, One Place to learn everything about Computer Science..</p>
                        <p> Coming Soon..</p>
                        &rarr;
                    </div>
                    <div className={styles.cards}>
                        <h3> Vector </h3>
                        <p> Introducing Vector, Coming to shape your dream website.</p>
                        <p> Coming Soon..</p>
                        &rarr;
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};