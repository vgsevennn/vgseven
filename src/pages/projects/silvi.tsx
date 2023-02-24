import Head from "next/head";

import styles from "@/styles/articles.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import UpdatesForm from "@/components/UpdatesForm/UpdatesForm";

export default function Silvi() {
  return (
    <div>
      <Header />
      <Head>
        <title> Silvi - News Assistant by VGSEVEN </title>
      </Head>
      <div className={styles.articlesSection}>
        <h1> Introducing Silvi, An AI Personalised News Assistant.. </h1>
        <span> last edit : 21 Feb 2023 BY VGSEVEN </span>
        <p>
          {" "}
          <i>
            “From the World of News we pick top News which you want to know”,
            Silvi An AI Personalised News Assistant..
          </i>
        </p>{" "}
        <p>
          Silvi is an innovative AI-powered news assistant that is
          revolutionizing the way people consume news. With so many news sources
          available online, it can be overwhelming and time-consuming to keep up
          with the latest developments in your areas of interest. Silvi aims to
          simplify this process by providing personalized news updates that
          cater to the unique needs and preferences of individual users.
        </p>
        <p>
          As a virtual assistant, Silvi uses advanced machine learning
          algorithms to understand the news preferences of its users. By
          analyzing users' reading habits, search history, and other data
          points, Silvi can deliver tailored news updates that are highly
          relevant and timely. Whether you're interested in politics, sports,
          business, or any other topic, Silvi can keep you up-to-date with the
          latest news and events from around the world.
        </p>
        <p>
          What sets Silvi apart from other news apps is its ability to deliver
          news updates in a conversational and in short tone, similar to how you
          would receive news from a friend or colleague in short, exact and
          conversational. Silvi's natural language processing capabilities
          enable it to understand the intent behind the user's query and provide
          them with personalized and relevant results. This makes the news
          consumption experience more engaging and interactive.
        </p>{" "}
        <p>
          With its user-friendly interface, advanced news capabilities, and
          natural language processing technology, Silvi is helping people around
          the world stay informed and up-to-date on the topics that matter most
          to them. Whether you're a busy professional, a student, or simply
          someone who wants to stay informed, Silvi is the perfect tool for the
          job.
        </p>
        <p>
          Why not give it a try today and experience the power of personalized
          news updates firsthand? BUT,,
        </p>
        <h2>
          {" "}
          Currently Silvi is in Pre-Alpha Stage and we are making it available
          for Alpha Stage sooner.
        </h2>
        <p>
          {" "}
          For the movement you can submit your mail here an get updates of it..
        </p>
        <UpdatesForm />
      </div>
      <Footer />
    </div>
  );
}
