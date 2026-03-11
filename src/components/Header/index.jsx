import styles from "./header.module.css";
import Socials from "../Socials";
import Contact from "../Contact";

const Header = ({ updateCategory }) => {
  return (
    <header className={styles.header}>
      <Socials />
      <h1 className={styles.headerTitle} onClick={() => updateCategory("Home")}>News of the World</h1>
      <Contact />
    </header>
  );
};

export default Header;
