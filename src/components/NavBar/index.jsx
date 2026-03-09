import styles from "./navbar.module.css";
import NavMenu from "../NavMenu";
import CurrentDate from "../CurrentDate";

const Navbar = ({updateCategory, updateArticle, currentCategory}) => {
  return (
    <div className={styles.navBar}>
      <NavMenu updateFunction={updateCategory} updateArticleFunction={updateArticle} currentCategory={currentCategory}/>
      <CurrentDate />
    </div>
  );
};

export default Navbar;
