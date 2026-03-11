import { breaking } from "../../data/data";
import styles from "./breaking.module.css";

const Breaking = ({ updateArticle, setIsOpen }) => {
  return (
    <div className={styles.breaking}>
      <h4 className={styles.breakingTitle}>Breaking News</h4>
      {breaking.map((article, index) => (
        <div
          key={index}
          className={styles.breakingArticles}
          onClick={() => {
            updateArticle({ article });
            setIsOpen(false);
          }}>
          <p className={styles.breakingHeadline}>{article.headline}</p>
          <span className={styles.arrow}>&#8594;</span>
        </div>
      ))}
    </div>
  );
};

export default Breaking;
