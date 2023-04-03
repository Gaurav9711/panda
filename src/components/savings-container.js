import styles from "./savings-container.module.css";

const SavingsContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.savingsParent}>
          <div className={styles.savings}>
            <span className={styles.savingsTxtContainer}>
              <span>{`Savings `}</span>
              <span className={styles.span}>++</span>
            </span>
          </div>
          <div className={styles.getAccessTo}>
            Get access to stable and low risk investment options for goals where
            you cannot afford losses
          </div>
          <div className={styles.saveNowWrapper}>
            <div className={styles.saveNow}>Save Now</div>
          </div>
        </div>
      </div>
      <div className={styles.heroChild} />
    </div>
  );
};

export default SavingsContainer;
