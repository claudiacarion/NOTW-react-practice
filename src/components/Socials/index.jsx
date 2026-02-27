import styles from "./socials.module.css";

const Socials = () => {
  return (
    <div className={styles.contactContainer}>
      <i className={`fa-brands fa-square-facebook ${styles.socials}`}></i>
      <i className={`fa-brands fa-square-youtube ${styles.socials}`}></i>
      <i className={`fa-brands fa-square-instagram ${styles.socials}`}></i>
      <i className={`fa-brands fa-square-twitter ${styles.socials}`}></i>
    </div>
  );
};

export default Socials;
