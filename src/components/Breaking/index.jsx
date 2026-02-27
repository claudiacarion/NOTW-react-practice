import { breaking } from "../../data/data";
import styles from "./breaking.module.css";

const Breaking = () => {
  return (
    <div className={styles.breaking}>
      <h4 className={styles.breakingTitle}>Breaking News</h4>
      {breaking.map((article, index) => (
        <div key={index} className={styles.breakingArticles}>
          <p className={styles.breakingHeadline}>
            {article.headline}
          </p>
          <i className={`fa-solid fa-arrow-right ${styles.arrow}`} style={{display: index === breaking.length-1 ? "none" : "block"}}></i>
        </div>
      ))}
    </div>
  );
};

export default Breaking;
