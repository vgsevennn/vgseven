import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/home.module.scss";
import Cards from "@/components/Cards/Cards";
import articlesData from "@/components/Data/ArticlesData";
import projectsData from "@/components/Data/ProjectsData";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1> Featured Articles </h1>
        <div className={styles.featuredCards}>
          <Cards
            Title={articlesData[1].Title}
            Description={articlesData[1].Description}
            Link={articlesData[1].Link}
            Tag={articlesData[1].Tag}
          />
          <Cards
            Title={articlesData[0].Title}
            Description={articlesData[0].Description}
            Link={articlesData[0].Link}
            Tag={articlesData[0].Tag}
          />
        </div>

        <h1> Projects </h1>
        <div className={styles.featuredCards}>
          <Cards
            Title={projectsData[1].Title}
            Description={projectsData[1].Description}
            Link={projectsData[1].Link}
            Tag={projectsData[1].Tag}
          />
          <Cards
            Title={projectsData[0].Title}
            Description={projectsData[0].Description}
            Link={projectsData[0].Link}
            Tag={projectsData[0].Tag}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
