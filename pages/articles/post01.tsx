import Head from "next/head";

import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Social from "../../src/Social/Social";
import styles from "../../styles/articles.module.css";

export default function post01 () {
    return (
        <div>
            <Header />
                <Head>
                    <title> The Art of Living Multiple Life’s in One - VGSEVEN </title>
                </Head>
            <div className={styles.main}>
                <h1> The Art of Living Multiple Life’s in One. </h1>
                    <span> last edit : 26 Nov 2022 </span>
                <article> 
                    <p>
                        A single quote is enough to explain the importance of reading.
                        In books every author always includes their perspective towards that particular topic and
                        shares their thinking process, experience, information, vision, view about that topic and many more
                        things regarding that particular topic. And as we know our life has limited time to live and due to
                        limited time we can’t test every situation in our life to collect our own information and perspective
                        towards that particular topic and situations.
                    </p>
                    <p>
                        Hence, we need to read books and articles about not only that problematic particular topic but
                        every topic that is in your interest and you’ll read it. Because it always consists of a new perspective
                        and experience of the author which we'll get if we read books.
                        And hence "If you read books you live multiple lives' ', because you have the perspective and experience,
                        information about that particular situation which you can’t experience and live but you have that
                        information because you read about it. And you can also apply this information as per your needs in your
                        life to make better decisions and no need to test that situation again and again to waste our limited time.
                    </p>
                    <p>
                        Reading is an essential part of our life which always returns us some better results.
                        Reading enhances your imagination power, reading makes you more knowledgeable and also improves your vocabulary
                        and language proficiency. Reading makes you a better decision-maker as you can understand things more deeply and can
                        consider them from a different perspective. It also enhances your communication skills and makes you socially a good person.
                        With reading, you can acquire knowledge in different areas like culture, arts, history, regions and much more.
                    </p>
                    <p>
                        Reading books and other stuff always increases creativity and enhances your understanding towards life.
                        Reading also inspires you to write and one can fall in love with writing as well.
                        The most important reason for reading is that we gain knowledge. Books are a rich source of information and knowledge.
                        Reading books in diverse genres increases information on diverse topics and gives you a deep insight into the topic
                        you read about. You always learn something new when you read. It is a proven fact that those who have good reading
                        habits show signs of higher intelligence. With diverse and bountiful genres books open up the mind and enhance the
                        creative ability and language skills.
                    </p>
                    <p>
                        Reading helps you to become strong not only creatively but also imaginatively and also, mentally.
                        The habit of reading is considered one of the good habits because by reading you'll not only get knowledge but also
                        get new vocabulary, new perspective, some affirmations, and much more if you find it.
                        Books always develop positive thinking and give you a better perspective towards life.
                        Reading enhances your knowledge, improves your concentration and makes you more confident and debate ready.
                        The more you read the wiser you become and the more you will be recognized and appreciated.
                    </p>
                    <p>
                        Books have so many topics and genres, including most important Fiction and Nonfiction which again consist of so
                        many topics like Relationships, Self-Help, Philosophy, Psychology, Stories, Health, History, Space, Imagination,
                        etc. etc. But from all of that topics and genre Non-Fiction Self-Help & Relationships books are the most read
                        books every year.
                    </p>
                    <p>
                        Fiction is books which provide a true side, thinking, experience and perspective of authors on that
                        particular topic and Non-Fiction means imaginary. Reading fiction develops empathy and helps to build and
                        maintain better relationships with others. Reading autobiographies can also encourage us to work hard and
                        stay dedicated to achieving our goals. It helps us become a better person in life.
                        Reading makes your mind function efficiently and gives you the strength to handle every situation in a
                        better direction. For reading there are so many topics through which you can start to read and also you have
                        the options to read virtually through your computers or phones and physically by the way of hard copy,
                        paperback versions of books.
                    </p>
                    <p>
                        As of 2020, there are so many great books and great authors. "The Subtle art of giving F*ck, by Mark Manson",
                        "Atomic Habits by James Clear", "Psychology of Money by Morgan Housel", "Zero to One by Peter Theil",
                        "Meditation by Marcus Aurelius", "Thinking Fast and Slow", "Start with Why", "Do Epic Shit by Ankur Warikoo",
                        "8 Rules of Love by Jay Shetty"..
                        Etc etc there are so many books you can read and that'll always deliver a great return to your life.
                        In Books the author always wrote about his experience and perspective which'll always help you to make a
                        better decision in your life.
                    </p>
                </article>
                <Social/>
            </div>
            <Footer/>
        </div>
    )
};