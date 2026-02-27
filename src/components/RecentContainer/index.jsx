import styles from "./recent-container.module.css";
import Article from "../Article";
import { displayRecent } from "../../data/data";

const RecentContainer = () => {
  return (
    <div className={styles.recent}>
    <h2 className={styles.recentTitle}>Recent News</h2>
      {displayRecent?.map((article, index) => (
        <Article key={index}
          headline={article.headline}
          deck={article.deck}
          category={article.category} />
      ))}
    </div>
  );
};

export default RecentContainer;
