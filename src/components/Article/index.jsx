import styles from "./article.module.css";
import { getImageUrl } from "../../utils/functions";

const Article = ({ headline, deck, category, image }) => {
  return (
    <article className={styles.article}>
      {image ? (
        <div className={`${styles.imageContainer} animate__animated animate__fadeIn`}>
          <img className={styles.image} src={getImageUrl(image)} />
        </div>
      ) : (
        ""
      )}
      <h2 className={styles.articleTitle}>{headline}</h2>
      <p className={styles.articleDeck}>{deck}</p>
      <p className={styles.articleCategory}>{category}</p>
    </article>
  );
};

export default Article;
