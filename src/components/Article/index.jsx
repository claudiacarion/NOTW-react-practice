import styles from "./article.module.css";
import { getImageUrl } from "../../utils/functions";

const Article = ({ headline, deck, category, image, updateArticle, article, setIsOpen }) => {
  return (
    <article className={styles.article} onClick={() => {updateArticle({article}); setIsOpen(false)}}>
      {image ? (
        <div className={styles.imageContainer}>
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
