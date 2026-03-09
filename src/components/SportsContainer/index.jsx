import styles from "./sports.module.css";
import Article from "../Article";
import { displaySport } from "../../data/data";

const SportsContainer = ({ updateArticleFunction }) => {
  return (
    <div className={styles.sportsContainer}>
      {displaySport.map((article, index) => (
        <Article key={index} image={article.image} headline={article.headline} deck={article.deck} updateArticle={updateArticleFunction} article={article}/>
      ))}
    </div>
  );
};

export default SportsContainer;
