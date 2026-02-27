import styles from "./nav-menu.module.css";

const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <i className={`fa-solid fa-bars ${styles.hamburger}`}></i>
      <p className={styles.menuItem}>Home</p>
      <p className={styles.menuItem}>World</p>
      <p className={styles.menuItem}>Sweden</p>
      <p className={styles.menuItem}>Sport</p>
      <p className={styles.menuItem}>Entertainment</p>
      <p className={styles.menuItem}>Crime</p>
    </div>
  );
};

export default NavMenu;
