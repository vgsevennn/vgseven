import Head from "next/head";
import Link from "next/link";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div>
      <Head>
        <title> VGSEVEN </title>
      </Head>

      <div className={styles.main}>
        <div className={styles.heading}>
          <Link href={"/"}>
            <h1> V G S E V E N </h1>
          </Link>
        </div>

        <div className={styles.navigation}>
          <Link href={"/"}> HOME </Link>
          <Link href={"/articles/"}> ARTICLES </Link>
          <Link href={"/projects"}> PROJECTS </Link>
          <Link href={"/site/about"}> ABOUT </Link>
        </div>
      </div>
    </div>
  );
}
