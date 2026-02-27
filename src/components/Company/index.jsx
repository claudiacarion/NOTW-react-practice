import styles from "./company.module.css";

const Company = () => {
  return (
    <div className={styles.company}>
      <h4 className={styles.companyTitle}>Company</h4>
      <p>About Us</p>
      <p>Writers List</p>
      <p>Comment Policy</p>
      <p>Teams</p>
      <p>Contact Us</p>
    </div>
  );
};

export default Company;
