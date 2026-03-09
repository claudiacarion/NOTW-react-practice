import styles from "./category-container.module.css";
import Article from "../Article";
import { categoryArticles } from "../../data/data";

const CategoryContainer = ({updateArticle}) => {
  return (
    <>
      {categoryArticles.map((category, index) => (
        <div className={styles.categoryContainer} key={index}>
          <h2 className={styles.categoryTitle}>{category.category}</h2>
          <div className={styles.categoryCard}>
            {category.articles.map((article, index) => (
              <Article key={index}
                image={article.image}
                headline={article.headline}
                deck={article.deck} 
                updateArticle={updateArticle} 
                article={article}
                />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryContainer;
