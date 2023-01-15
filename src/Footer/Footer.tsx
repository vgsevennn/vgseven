import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
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
              <Link href="/site/about">
                {" "}
                About{" "}
              </Link>
              <Link href="/site/contact">
                {" "}
                Contact{" "}
              </Link>
              <Link href="/site/privacy-policy">
                {" "}
                Privacy Policy{" "}
              </Link>
              <Link href="/site/terms-and-conditions">
                {" "}
                Terms & Conditions{" "}
              </Link>
              <Link href="/site/disclaimers">
                {" "}
                Disclaimers{" "}
              </Link>
            </div>
        </div>
  );
};

export default Footer;
