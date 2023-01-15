import Head from "next/head";

import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Social from "../../src/Social/Social";
import styles from "../../styles/articles.module.css";

export default function Post03 () {
  return (
    <div>
      <Header />
      <Head>
        <title> Is Our Brain Controlling Our Life ?. - VGSEVEN </title>
      </Head>
      <div className={styles.main}>
        <h1>
          Is Our Brain Controlling Our Life ?
        </h1>
        <span> last edit : 16 Nov 2022 </span>
        <article>
          <p>
            These quotes feel weird sometimes, but it's a hard truth of our lives and even harder to accept it. 
            But as I've experienced so many times in my life and I'm sure that you're also experienced this 
            so many times in your life, but don't think and notice anything about it yet.
          </p>
          <p>
            According to science, our body works under the control of our brain's instructions and the 
            brain has the information which we always provide, which is used as information by the brain 
            to process every request and provide the instructions to our body to perform any specific task. 
            So think about it, what we think depends on what we experience and what we feed into our brain system 
            and then if you think positively that will happen because your mind is always receiving information 
            about that positive thinking and always thinking about it. And as a result our brain provides the same 
            instructions to our body to work in that way.
          </p>
          <p> 
            <b> "If you think positive that will happen and If you think negative that will happen." </b>
          </p>
          <p> 
            <b> "Law of Attraction" by The Secret Book. </b>
          </p>
          <p>
            And so many quotes or thoughts are written by so many authors, philosophers and writers 
            about that same stuff that our brain has the power to control our lives. As the brain has 
            the power to control and shape life, we can say that our life totally depends on our thoughts 
            and thought process. If you're able to control your thoughts by default you're controlling your life. 
            It's work and experience by so many people including you and me also. So control your thoughts and by default 
            you're able to control your life.
          </p>
          <p>
            But the main problem is we're always unable to control our thoughts and thoughts system or brain thinking system. 
            The mind is also known as "Monkey" just because the mind always thinks like a monkey which is jumping from one 
            thought to another thoughts frequently. And what we need is to control that monkey's mind by thinking clearly.
          </p>
          <p>
            Now let's explore how we can think clearly ? Clear Thinking is the process of thinking deeply as per all the 
            real information to avoid bad decisions and that monkey mind. What we need to think about clearly is just collecting 
            more information about that particular thing as much as the information your brain has to process that request. 
            They work clearly and provide better decisions.
          </p>
          <p>
            So note that <b> "Our life is what our thoughts make it." </b>
          </p>
        </article>
        <Social />
      </div>
      <Footer />
    </div>
  );
};
