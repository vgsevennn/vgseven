import Link from "next/link";

import styles from "./Footer.module.scss";
import Social from "@/components/Social/Social";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.mainOne}>
        <div>
          <Link href="/">
            <h1> V G S E V E N </h1>
          </Link>
        </div>
        <div>
          <b>
            Copyright &copy;
            {new Date().getFullYear()}. All rights reserved.
          </b>{" "}
        </div>
      </div>

      <div className={styles.mainTwo}>
        <div>
          <Social />
        </div>

        <div>
          <Link href="/site/about"> About </Link>
          <Link href="/site/contact"> Contact </Link>
          <Link href="/site/terms-and-policy"> Terms and Policy </Link>
        </div>
      </div>
    </div>
  );
}
