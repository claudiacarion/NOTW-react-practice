import styles from "./navbar.module.css";
import NavMenu from "../NavMenu";
import CurrentDate from "../CurrentDate";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <NavMenu />
      <CurrentDate />
    </div>
  );
};

export default Navbar;
