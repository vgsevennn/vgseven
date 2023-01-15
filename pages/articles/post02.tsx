import Head from "next/head";

import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Social from "../../src/Social/Social";
import styles from "../../styles/articles.module.css";

export default function Post02 () {
    return (
        <div>
            <Header />
            <Head>
                <title> Thought's of the Week #01 - VGSEVEN </title>
            </Head>
            <div className={styles.main}>
                <h1>
                    Thought's of the Week #01.
                </h1>
                <span> last edit : 11 Nov 2022 </span> <br/> &nbsp;
                <article> 
                    <p>
                        <b> Alright, this is VG and Welcome to Thoughts of the week where
                            I talk a little bit about week 3 most influencing quotes I noticed.
                        </b>
                    </p>
                    <p>
                       <b> "Remind & Reward" </b>
                    </p>
                    <p>
                        "Remind and Reward", The best and most powerful techniques to make and break any Habit. 
                        Habits mainly work on these two rules. Every habit is built with a reminder and reward process 
                        and also every habit breaks with a reminder and reward.
                    </p>
                    <p>
                        In the process of building new habits, the most important thing is to remind yourself about that 
                        particular habit and after completing that task next is to reward yourself for doing that which 
                        helps your brain to remember that thing to do again and again and you're on the way to build your 
                        next good habit.
                    </p>
                    <p>
                        And in the process of breaking existing bad habits the steps are too similar to building habits. 
                        First of all you need to remember that particular bad habit and when you're doing that bad habit 
                        you have to remind your brain to stop that process and work on the spot. And to remember this process 
                        your brain needs a bad reward for doing that bad habit, so the brain remembers that reward with that 
                        particular bad habit and eventually you're on the way to breaking your bad habit. 
                        (We'll go into the depths of these topics in our next articles.)
                    </p>
                    <p> 
                        <b> Do not Try To Control and Change things which are not in your control. </b>
                    </p>
                    <p>
                        First off, tell me Why you want to Control and Change things which are not in your control?
                    </p>
                    <p>
                        In our day to day life so many times we feel unhappy or stressed just because we're trying to control anything 
                        and when we're unable to control we feel stressed and unhappy about ourselves.
                    </p>
                    <p>
                        Even we try to control and change someone's life and also them. But why do you need to change someone or even someone's personal life ?
                    </p>
                    <p>
                        You can't change anything which is not in your control. And also you can't control everything or anything which is not in your control, 
                        can you control nature at the time of rainfall?, can you control how someone feels about you ?, 
                        can you control sunlight ?, No then why you're trying to control and change things which are not in 
                        your control.
                    </p>
                    <p> 
                        <b> If You Think Positive That Will Happen, If You Think Negative That Will Happen. </b>
                    </p>
                    <p>
                        Everything depends on what you're thinking and what you're thinking that will happen with you. 
                        So if you think positive that will happen and if you think negative that will happen. 
                        According to human psychology and the workings of the human brain, our brain does exactly those 
                        things which we are repeating again and again to our mind and this is the only one reason that so 
                        many people say THINK POSITIVE. Because if we think positive our brain gets positive affirmations 
                        and the brain does these things for us or you can say the brain releases some instruction towards 
                        that particular task.
                    </p>
                </article>
                <Social />
            </div>
            <Footer />
        </div>
    );
};