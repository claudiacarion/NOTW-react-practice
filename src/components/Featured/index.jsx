import Article from "../Article";
import styles from "./featured.module.css";
import { displayFeatured } from "../../data/data";

const Featured = ({ updateArticleFunction }) => {
  return (
    <div className={styles.featured}>
      <Article {...displayFeatured} updateArticle={updateArticleFunction} article={displayFeatured} />
    </div>
  );
};

export default Featured;
