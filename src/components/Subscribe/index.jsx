import styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
      <h4 className={styles.subscribeTitle}>Subscribe</h4>
      <form className={styles.subscribeForm}>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="text" placeholder="Email" className={styles.input} />
        <button className={styles.button}>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
