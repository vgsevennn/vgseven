import Head from "next/head";

import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Social from "../../src/Social/Social";
import styles from "../../styles/siteArticles.module.css";
import ContactForm from "../../src/ContactForm/ContactForm";

export default function Contact () {
  return (
    <div>
      <Header />
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.main}>
        <h1> Contact VG </h1>
          <p>
              If you have any questions and want to talk with me please feel free to contact me through 
              social media (Instagram DM, Twitter DM). But I'll suggest that if you want to reach me 
              quickly please feel free to send me an email at <b>mailteamseven@gmail.com</b> and you can also fill up
              the following form to contact me quickly.
          </p>
          <ContactForm/>
        <Social />
      </div>
      <Footer />
    </div>
  );
};
