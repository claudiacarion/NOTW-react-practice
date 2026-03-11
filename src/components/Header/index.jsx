import styles from "./header.module.css";
import Socials from "../Socials";
import Contact from "../Contact";

const Header = ({ updateCategory,setIsOpen }) => {
  return (
    <header className={styles.header}>
      <Socials />
      <h1 className={styles.headerTitle} onClick={() => {updateCategory("home"); setIsOpen(false);}}>News of the World</h1>
      <Contact />
    </header>
  );
};

export default Header;
