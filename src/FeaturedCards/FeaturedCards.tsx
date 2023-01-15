import Link from "next/link";

import styles from "./featuredCards.module.css";
import Data from "../../src/ArticelsData/ArticlesData";

export default function FeaturedCards () {
    return (
        <div className={styles.main}>
            <h2> Featured Articles </h2>
            <div className={styles.sections}>
                <Link href={"/articles/post01"} className={styles.cards}>
                    <h3> {Data[0].Title} </h3>
                    <p> {Data[0].Description} </p>
                    &rarr;
                </Link>
                <Link href={"/articles/post02"} className={styles.cards}>
                    <h3> {Data[1].Title} </h3>
                    <p> {Data[1].Description} </p>
                    &rarr;
                </Link>
                <Link href={"/articles/post03"} className={styles.cards}>
                    <h3> {Data[2].Title} </h3>
                    <p> {Data[2].Description} </p>
                    &rarr;
                </Link>
                <Link href={"/articles/post04"} className={styles.cards}>
                    <h3> {Data[3].Title} </h3>
                    <p> {Data[3].Description} </p>
                    &rarr;
                </Link>
            </div>
            <Link href={"articles/"}> <h5> Read all articles &rarr; </h5> </Link>
        </div>
    )
}