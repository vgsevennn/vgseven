import Head from "next/head";

import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Social from "../../src/Social/Social";
import styles from "../../styles/articles.module.css";

export default function post04 () {
    return (
        <div>
            <Header />
            <Head>
                <title> Do not Try to do Everything. - VGSEVEN</title>
            </Head>
            <div className={styles.main}>
                <h1>
                    Do not Try to do Everything, try to do less but perfect..
                </h1>
                <span> last edit : 16 Nov 2022 </span>
                <article>
                    <p>
                        How many times in your day to day 
                        life have you tried Multi-Tasking and failed and feel stressed and confused ?
                    </p>
                    <p>
                        Forget it, tell me how many things you want to do in your life ?
                        Maybe there are too many things that you want to do and want to achieve in your life. 
                        But how many things did you actually do ?
                        Maybe a few of those things you did and doing some of those things And every time you 
                        tried to do more tasks at a time it always failed and you again feel stressed and confused.
                    </p>
                    <p>
                        That's the problem with our brain working system and we have to shape that working system to do less but perfect. 
                        As we grow and our knowledge grows (fast) our brain system always tries to do many more things in a 
                        single day and parallelly at a time. But it's not possible to do so many things at a time. 
                        You have to do all things one by one. Because every time you shift your brain from one task to another, 
                        the brain actually loses all its focus and attention period and flows towards that particular task 
                        and again when you're going to work on that particular task you have to waste your time to set attention and 
                        focus towards that particular thing. Hence I always suggest that to avoid Task Shifting, rather than task shifting, 
                        use Week or Day Scheduling methods to do all things which you want to do and achieve your best in those particular things.
                    </p>
                    <p>
                        Our main topic is "Do not try to do Everything." And here everything means not every task but some of them. For example, 
                        as we study so many things about any particular subject or topic, suddenly we want to learn everything about it. 
                        And this feeling of trying to do Everything will always damage you and your focused flow and you will also lose what you 
                        learn as you try to learn everything.
                    </p>
                    <p>
                        "Less but Perfect"
                    </p>
                    <p>
                        This one quote is enough to explain to you what I want to say. Less but Perfect, I see so many successful companies and 
                        people always follow these rules. They are doing less things in their life but they did those things so much perfectly 
                        and 10x better than others and hence they are successful and different from other ones.
                    </p>
                    <p>
                        While feeling stuck and so stressed and confused, even though we know so many things about our life, we are still feeling confused, 
                        stressed and depressed. The biggest reason is our dissatisfaction. Dissatisfaction leads to poor 
                        productivity and thought process and Dissatisfaction occurs due to not any single reason but only from 
                        Trying to do Everything. If you're going to do everything you lose the things which you did and even 
                        those things which are in your control.
                    </p>
                    <p>
                        So Forget to do everything, first accomplish one thing and then focus on the next thing. It will help you to increase your productivity 
                        and go a long way from being confused. Trying to focus on two or more things at one time will not 
                        complete anything good at all. Just do things which are most important and try to say things which 
                        are not important to do.
                    </p>
                </article>
                <Social />
            </div>
            <Footer />
        </div>
    );
};
