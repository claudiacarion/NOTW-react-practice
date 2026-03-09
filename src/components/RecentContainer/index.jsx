import styles from "./recent-container.module.css";
import Article from "../Article";
import { displayRecent } from "../../data/data";

const RecentContainer = ({ updateArticleFunction }) => {
  
  return (
    <div className={styles.recent}>
      <h2 className={styles.recentTitle}>Recent News</h2>
      {displayRecent.map((article, index) => (
        <Article key={index} headline={article.headline} deck={article.deck} category={article.category} updateArticle={updateArticleFunction} article={article}/>
      ))}
    </div>
  );
};

export default RecentContainer;
