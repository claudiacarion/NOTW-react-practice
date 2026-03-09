import styles from "./nav-menu.module.css";

const NavMenu = ({ updateFunction, updateArticleFunction, currentCategory }) => {
  const categories = ["Home", "World", "Sweden", "Sport", "Entertainment", "Crime"];

  return (
    <div className={styles.navMenu}>
      <i className={`fa-solid fa-bars ${styles.hamburger}`}></i>
      {categories.map((category, index) => (
        <p className={styles.menuItem} key={index} onClick={() => (updateFunction(category), updateArticleFunction(currentCategory))}>{category}</p>
      ))}
    </div>
  );
};

export default NavMenu;
