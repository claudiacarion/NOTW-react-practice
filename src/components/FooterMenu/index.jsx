import styles from "./footer-menu.module.css";

const FooterMenu = () => {
  return (
    <div className={styles.footerMenu}>
      <h4 className={styles.footerMenuTitle}>Get News</h4>
      <p>Home</p>
      <p>World</p>
      <p>Sweden</p>
      <p>Sport</p>
      <p>Entertainment</p>
      <p>Crime</p>
    </div>
  );
};

export default FooterMenu;
