import Head from "next/head";

import Header from "@/components/Header/Header";
import styles from "@/styles/articles.module.scss";
import Footer from "@/components/Footer/Footer";

export default function VKT() {
  return (
    <div>
      <Header />
      <Head>
        <title> VKT - An Universe where your dream is happening..</title>
      </Head>
      <div className={styles.articlesSection}>
        <h1> VKT, An Universe where your dream is happening..</h1>
        <p>
          VKT Studio is a media company that aims to bring people's dreams to
          life through various types of content. VKT Studio specializes in
          producing films and digital content that inspire, entertain, and
          inform.
        </p>
        <p>
          At VKT Studio, we believe that everyone has a story to tell, and we
          are committed to producing people's dreams. With our cutting-edge
          technology, we are able to produce high-quality content that is both
          visually stunning and emotionally impactful. Whether it is a short
          film, a web series, or a documentary, we approach each project with
          creativity, passion, and attention to detail.
        </p>
        <p>
          At VKT Studio, we believe that the best stories come from a wide range
          of perspectives and experiences, and we strive to work with
          individuals from all walks of life. Overall, VKT Studio is more than
          just a media company - it is a community of artists, storytellers, and
          dreamers who are passionate about bringing people's dreams to film.
        </p>
        <h3> Stay Connected to VKT through Social Links &rarr; </h3>
        <div
          style={{ display: "flex", gap: "1rem", textDecoration: "underline" }}
        >
          <a href={"https://youtube.com/@VKTStudios"}> YouTube </a>
          <a href={"https://instagram.com/vktstudios"}> Instagram </a>
          <a href={"https://twitter.com/VKTStudios"}> Twitter </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
