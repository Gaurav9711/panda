import styles from "./savings-container.module.css";
import values from "./Savings-container.json";

const SavingsContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.savingsParent}>
          <div className={styles.savings}>
            <span className={styles.savingsTxtContainer}>
              <span>{values.heading }</span>
              <span className={styles.span}>++</span>
            </span>
          </div>
          <div className={styles.getAccessTo}>
            {values.content}
          </div>
          <div className={styles.saveNowWrapper}>
            <div className={styles.saveNow}>{values.button}</div>
          </div>
        </div>
      </div>
      <div className={styles.heroChild} />
    </div>
  );
};

export default SavingsContainer;
