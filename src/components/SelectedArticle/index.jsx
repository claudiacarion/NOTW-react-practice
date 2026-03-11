import styles from "./selected-article.module.css";
import { getImageUrl } from "../../utils/functions";

const SelectedArticle = ({ currentArticle, updateArticle, currentCategory, updateCategory, setIsOpen }) => {
  return (
    <>
      <div className={styles.currentArticle}>
        <h2 className={styles.selectedArticle}>{currentArticle.article.headline}</h2>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={getImageUrl(currentArticle.article.image)} />
        </div>
        <p className={styles.articleDeck}>{currentArticle.article.deck}</p>
        <br />
        <p className={styles.articleDeck}>{currentArticle.article.story}</p>
      </div>
      <h3
        className={styles.backBtn}
        onClick={() => {
          updateArticle(null);
          updateCategory(currentCategory);
          setIsOpen(false)
        }}>
        Back
      </h3>
    </>
  );
};

export default SelectedArticle;
