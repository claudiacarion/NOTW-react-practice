import styles from "./footer.module.css";
import Socials from "../Socials";
import Contact from "../Contact";
import FooterMenu from "../FooterMenu";
import Company from "../Company";
import Subscribe from "../Subscribe";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h2 className={styles.footerTitle}>News of the World</h2>
        <p className={styles.description}>
          News of the World is a global news platform delivering timely, accurate, and insightful coverage on world
          events, politics, business, technology, culture, and more. Stay informed with in-depth analysis, breaking
          headlines, and diverse perspectives from every corner of the globe.
        </p>
      </div>
      <FooterMenu />
      <Company />
      <Subscribe />
    </footer>
  );
};

export default Footer;
