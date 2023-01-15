import Image from "next/image";
import Head from "next/head";
import Link from "next/link"

import styles from "./Header.module.css"
import vgProfile from "../../public/vg.png"
import newMenu from "../../public/newmenu.png"

export const Header = () => {
    return (
        <div className={styles.main}>
            <Head>
                <title> Vaibhav Gosavi </title>
                <meta name="description" content="Official VGSEVEN Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className={styles.heading}>
                <Link href={"/"} >
                    <h1> V G S E V E N </h1>
                </Link>
            </div>

            <div className={styles.navigation}>
                <Link href={"/articles"}> Articles </Link>
                <Link href={"/projects"}> Projects </Link>
                <Link href={"/site/about"}> About </Link>
            </div>
        </div>
    )
}

export default Header;