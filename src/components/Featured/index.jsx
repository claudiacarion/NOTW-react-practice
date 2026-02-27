import Article from "../Article";
import styles from "./featured.module.css";
import { displayFeatured } from "../../data/data";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <Article
        {...displayFeatured}
        titleClass={`large`}
      />
    </div>
  );
};

export default Featured;
