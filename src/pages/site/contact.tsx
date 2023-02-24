import Head from "next/head";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Social from "@/components/Social/Social";
import styles from "@/styles/articles.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div>
      <Header />
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.articlesSection}>
        <h1> Contact Me </h1>
        <p>
          Thank you for visiting my website! I am thrilled to have you here and
          appreciate your interest in my work. Whether you have a question,
          feedback, or just want to say hello, I am always open to hearing from
          my audience.
        </p>
        <h2>Email</h2>
        <p>
          The best way to reach me is through email at
          <u>
            <a href={"mailto:mailteamseven@gmail.com"}>
              {" "}
              mailteamseven@gmail.com{" "}
            </a>{" "}
          </u>
          . As an entrepreneur and content creator, I am often on the go, but I
          will do my best to respond within 24-48 hours. If you have a specific
          question or request, please be as detailed as possible in your email
          so that I can provide you with the most accurate information.
        </p>
        <h2> Contact Page </h2>
        <p>
          If you prefer to use a form, you can fill out the contact form here. I
          designed this form to be user-friendly and easy to navigate, so please
          feel free to include any relevant details or attachments that may help
          me better understand your inquiry. Once you submit the form, I will do
          my best to respond as soon as possible.
        </p>
        <ContactForm />
        <h2> Social Media </h2>{" "}
        <p>
          {" "}
          In addition to email and my website's contact form, you can also reach
          me through social media. I am active on various platforms, including
          Twitter, Instagram, and LinkedIn. While I cannot guarantee an
          immediate response, I do my best to engage with my followers and
          respond to direct messages and mentions.
        </p>
        <Social />
        <h2> Collaborations </h2>
        <p>
          If you are interested in collaborating with me on a project, please
          include as many details as possible in your initial inquiry. This may
          include your budget, timeline, and any other relevant information
          about the project. I am always open to new opportunities and
          collaborations, but I want to ensure that any partnership aligns with
          my values and goals as a creator. Thank you again for your interest in
          my work. I look forward to hearing from you and connecting with you in
          the future!
        </p>
      </div>
      <Footer />
    </div>
  );
}
