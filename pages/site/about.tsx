import Head from "next/head";

import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Social from "../../src/Social/Social";
import styles from "../../styles/siteArticles.module.css";
import ContactForm from "../../src/ContactForm/ContactForm";

export default function About () {
  return (
    <div>
      <Header />
      <Head>
        <title> About Me </title>
      </Head>

      <div className={styles.main}>
        <h1> About VG </h1>
        <p>
            Alright, this is VG aka VGSEVEN.
            Computer Science Student and also learning Quantum Mechanics, ML, AI, Philosophy, Psychology and
            love to write..
        </p>
          <p> You can contact me through following social links and also the contact form..</p>
          <ContactForm />
        <Social />
      </div>
      <Footer />
    </div>
  );
};
