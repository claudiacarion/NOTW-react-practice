import styles from "./navbar.module.css";
import NavMenu from "../NavMenu";
import CurrentDate from "../CurrentDate";

const Navbar = ({ updateCategory, updateArticle, currentCategory, setIsOpen, isOpen }) => {
  return (
    <div className={styles.navBar}>
      <NavMenu
        updateFunction={updateCategory}
        updateArticleFunction={updateArticle}
        currentCategory={currentCategory}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <CurrentDate />
    </div>
  );
};

export default Navbar;
