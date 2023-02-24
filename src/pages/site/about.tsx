import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Social from "@/components/Social/Social";
import styles from "@/styles/home.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function About() {
  return (
    <div>
      <Header />
      <Head>
        <title> About VGSEVEN </title>
      </Head>

      <div className={styles.main}>
        <h1> About </h1>
        <div className={styles.about}>
          <h2> Hey there! </h2>
          <p>
            My name is VGSEVEN (Vaibhav Gosavi), and I am the founder of Silvi
            and Justine Studio, as well as a producer at VKT Studio. I love
            writing about various topics, but mainly about life.
          </p>
          <p>
            My journey into the creative industry began with my passion for
            writing. I have always been fascinated by the power of words and how
            they can be used to express ideas and emotions. This led me to
            become a writer and develop my skills as a storyteller.
          </p>
          <p>
            As my career progressed, I realized that the industry needed more
            diverse voices. This inspired me to start my own startups, Silvi and
            Justine Studio. Silvi is currently in the development stage
            (pre-alpha), and you can learn more about it here. Justine Studio is
            on its way to reaching your timeline, and you can find out more
            about it here. Through these businesses, I have been able to work
            with a diverse range of people and create content that has resonated
            with audiences around the world.
          </p>
          <p>
            In addition to my work as a founder, I also work as a producer at
            VKT Studio. In this role, I oversee the production of various types
            of content, including films and digital content. This has allowed me
            to gain valuable experience in management and leadership, as well as
            learn how to work effectively with different teams.
          </p>
          <p>
            Overall, I am an individual who is passionate about the creative
            industry and always looking for new opportunities to learn and grow.
          </p>
          <h2> Contact Me </h2>
          <p>
            Contact Page If you prefer to use a form, you can fill out the
            contact form on my website here. I designed this form to be
            user-friendly and easy to navigate, so please feel free to include
            any relevant details or attachments that may help me better
            understand your inquiry. Once you submit the form, I will do my best
            to respond as soon as possible.
          </p>
          <ContactForm />
          <h2> Social Media </h2>
          <p>
            In addition to email and my website's contact form, you can also
            reach me through social media. I am active on various platforms,
            including Twitter, Instagram, and LinkedIn. While I cannot guarantee
            an immediate response, I do my best to engage with my followers and
            respond to direct messages and mentions.
          </p>
          <Social />
        </div>
      </div>
      <Footer />
    </div>
  );
}
