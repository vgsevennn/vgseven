import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header/Header";
import styles from "@/styles/articles.module.scss";
import Footer from "@/components/Footer/Footer";
import UpdatesForm from "@/components/UpdatesForm/UpdatesForm";
import Social from "@/components/Social/Social";
import Cards from "@/components/Cards/Cards";
import articlesData from "@/components/Data/ArticlesData";

export default function PostTwo() {
  return (
    <div>
      <Header />
      <Head>
        <title> Is Our Brain Controlling Our Life? - VGSEVEN </title>
      </Head>
      <div className={styles.articlesSection}>
        <h1> Is Our Brain Controlling Our Life? </h1>
        <span> last edit : 21 Feb 2023 BY VGSEVEN </span>
        <h3>
          {" "}
          <i> Is Our Brain Controlling Our Life? </i>{" "}
        </h3>
        <p>
          Yes, our life is controlled by our brain and the biggest proof of that
          is a weird quote from Marcus Aurelius,{" "}
          <i> “Our Life is What Our Thoughts Make It.” </i> This quote may seem
          strange at times, but it is a hard truth of our life that is difficult
          to accept. As I have experienced so many times in my life, and I am
          sure that you have also experienced it many times, but have not
          thought about it yet.
        </p>
        <p>
          According to science, our body works under the control of our brain's
          instructions, and the brain has the information which we always
          provide through our eyes and ears mainly. This information is then
          used by the brain to process every request and provide the
          instructions to our body to perform any specific task. Therefore, what
          we think depends on what we have experienced and what we have in our
          brain system. If we think positively, that will happen because our
          mind is always receiving information about that positive thinking and
          always thinking about it. And as a result, our brain provides the same
          instructions to our body to work in that way.
        </p>
        <p>
          <i>
            "If you think positive, that will happen, and if you think negative,
            that will happen."
          </i>{" "}
          <i> (Quotes credit goes to the writer) </i> Another weird quote, but
          there are so many quotes or thoughts written by many authors,
          philosophers, and writers about the same idea that our brain has the
          power to control our life. As the brain has the power to control and
          shape life, we can say that our life totally depends on our thoughts
          or thought process. If we can control our thoughts or thinking
          process, we can control our life by default. This has been proven
          through the work and experience of many people, including you and me.
          So, control your thoughts, and by default, you can control your life.
        </p>
        <p>
          Now it is clear that our brain is controlling our life, but the main
          problem is that we are always unable to control our thinking system.
          In the modern world, the mind is also known as the "Monkey" because
          the mind always thinks like a monkey jumping from one thought to
          another thought too frequently. And what we need to control that
          monkey mind is <i> "meditation"</i>, <i> "journaling"</i>,
          <i>"reading"</i>, and{" "}
          <i> "spending time alone to think clearly and in-depth"</i>.
        </p>
        <h4>Let's explore these one by one: </h4>
        <p>
          <i> "Meditation" </i> is a powerful practice used to calm the mind and
          body and to help us become more aware of our thoughts and emotions. It
          is a great tool for managing stress, developing emotional intelligence
          and gaining insight into our lives. Regular meditation can also
          increase our capacity to focus and improve our well-being and overall
          quality of life. Practiced regularly, it can help us to become more
          mindful and to gain greater control over our thoughts and emotions.
        </p>
        <p>
          There are several techniques for starting meditation. The first is to
          find a comfortable and quiet place to sit, which must be on the
          ground. Then, close your eyes and focus on your breathing. Take slow,
          deep breaths and pay attention to the feeling of the air going in and
          out, which helps to stay focused. Another technique to focus is a
          mantra or phrase, repeating it with each breath which can help to stay
          focused and mindful of the present moment.
        </p>
        <p>
          <i> "Journaling" </i> is a great way to express thoughts and emotions
          and to reflect on our experiences. It can help us to gain clarity and
          insight into our lives, and to gain a better understanding of
          ourselves and our situation. It can also help to reduce stress and
          anxiety by providing an outlet for our thoughts and feelings. Writing
          down our thoughts and feelings can help to make sense of difficult
          situations and provide perspective on past experiences. Journaling can
          also help to boost our creativity, as it encourages us to explore our
          thoughts and ideas in a safe and productive way. In addition,
          journaling can be a great tool for self-improvement, helping us to set
          goals, track our progress, and take action to move forward.
        </p>
        <p>
          Here are some steps and techniques to help you get started with
          journaling. Find a place where you feel relaxed and comfortable when
          journaling. It can be a corner of your living room, a park bench, or
          anywhere else where you will not be disturbed. Choose a time to
          journal, which will help you create a habit of journaling and make it
          easier to stick to it. Once you are finished, take a few moments to
          reflect on what you wrote.
        </p>
        <p>
          Journaling has many ways as per your choice, which you can modify as
          per your requirements and process of thinking. In which{" "}
          <i> "Morning Briefing" </i> is used as "Day Scheduling" (As per the
          working process and day, in the morning, the whole day's tasks and
          activities are scheduled to get the most out of the day, we’ll discuss
          that in our upcoming article.) and <i> "Day Journaling" </i> is used
          as "Overview of Day" (Mostly done at the end of the day, which
          consists of a complete overview and experience of that day, we’ll also
          discuss that in upcoming articles).
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UpdatesForm />
        </div>
        <p>
          <i> "Reading" </i> is an essential part of our lives that always
          returns better results. Reading enhances imagination power, makes us
          more knowledgeable, and also improves vocabulary and language
          proficiency. Reading makes us better decision-makers, as we understand
          things more deeply and can consider them from a different perspective.
          It also enhances communication skills and makes us socially a good
          person. With reading, we can acquire knowledge in different areas like
          culture, arts, history, regions, and much more.
        </p>{" "}
        <p>
          {" "}
          Reading books and other stuff always increases creativity and enhances
          understanding about life. Reading also inspires us to write, and one
          can fall in love with writing as well. The most important reason for
          reading is that we experience the situation of the author without
          living that situation in real life at all, in the case of non-fiction
          self-help books. But in other areas of books like fiction, we receive
          tons of new information, and it also helps improve the power of
          imagination. (You can check{" "}
          <Link href={"/articles/the-art-of-living-multiple-lives-in-one"}>
            {" "}
            <u>
              {" "}
              <i> "The Art of Living Multiple Lives at One" </i>{" "}
            </u>
          </Link>
          article to know more about the importance of reading)
        </p>
        <p>
          To start reading, there is no specific path to follow; just start
          reading what you want to read and love to read, which helps you make a
          habit of that reading. Later, you can start reading books about life
          and also fiction and non-fiction specially. In{" "}
          <Link href={"/articles/the-art-of-living-multiple-lives-in-one"}>
            {" "}
            <u>
              {" "}
              <i> "The Art of Living Multiple Lives at One" </i>{" "}
            </u>
          </Link>{" "}
          article, I mentioned top books to start your reading journey, and
          these books help you in your life's different parts and situations.
        </p>
        <p>
          Now the last method, "spending time alone to think clearly in-depth,"
          I personally use this method daily to think deeply and clearly.
          Spending time alone always helps to provide clarity towards life.
          Clear thinking is the process of thinking deeply as per all the real
          information to avoid bad decisions and that monkey mind thinking
          process. But so many times, this technique leads to overthinking, and
          to prevent that, it’s necessary to think with real information and in
          the right direction. "Overthinking is not bad, but it seems to be bad
          when you start thinking with wrong information in the wrong direction"
          (Upcoming Article will cover this Overthinking topic deeply).
        </p>
        <p>
          In conclusion, it is essential to take control of our brain's activity
          and direct it towards positive thoughts and emotions to lead a life
          full of joy, happiness, and success. By practicing techniques like
          meditation, journaling, reading, and spending time alone, we can
          control our thoughts and thinking process, and by default, we can
          control our life.
        </p>
        <h2> Suggested Articles &rarr; </h2>
        <Cards
          Title={articlesData[0].Title}
          Description={articlesData[0].Description}
          Link={articlesData[0].Link}
          Tag={articlesData[0].Tag}
        />
        <p> Social Links &rarr; </p>
        <Social />
      </div>
      <Footer />
    </div>
  );
}
