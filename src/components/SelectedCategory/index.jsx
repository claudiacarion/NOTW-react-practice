import styles from "./selected-category.module.css";
import { articles } from "../../data/data";
import { getImageUrl } from "../../utils/functions";

const SelectedCategory = ({ currentCategory, updateArticle }) => {
  const selected = articles.filter(article => article.category === currentCategory.toLowerCase());

  return (
    <>
      <h2 className={styles.categoryTitle}>{currentCategory}</h2>
      <div className={styles.selectedCategory}>
        {selected.map((article, index) => (
          <div className={styles.articleWrapper} key={index} onClick={() => updateArticle({ article })}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={getImageUrl(article.image)} />
            </div>
            <h2 className={styles.articleTitle}>{article.headline}</h2>
            <p className={styles.articleDeck}>{article.deck}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectedCategory;
