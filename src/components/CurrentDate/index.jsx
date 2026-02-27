import styles from "./current-date.module.css";

const CurrentDate = () => {
  return (
    <div className={styles.currentDate}>
      {new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </div>
  );
};

export default CurrentDate;
