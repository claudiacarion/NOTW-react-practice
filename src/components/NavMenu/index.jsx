import styles from "./nav-menu.module.css";

const NavMenu = ({ updateFunction, updateArticleFunction, currentCategory, setIsOpen, isOpen }) => {
  const categories = ["Home", "World", "Sweden", "Sport", "Entertainment", "Crime"];

  const toggleMenu = () => setIsOpen(isOpen => !isOpen);

  return (
    <div className={styles.navMenu}>
      <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
      <div className={`${styles.menuWrapper} ${isOpen ? `${styles.open}` : ""}`}>
        {categories.map((category, index) => (
          <p
            className={styles.menuItem}
            key={index}
            onClick={() => {
              updateFunction(category.toLowerCase());
              updateArticleFunction(currentCategory);
              setIsOpen(false);
            }}>
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
