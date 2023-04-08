import styles from "./Money-container.module.css";

const MoneyContainer = ({ subtitleText, subtitleText1 ,subtitleText2}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src={subtitleText} />
        <div className={styles.saveMoneyTheRightWayParent}>
          <div className={styles.saveMoneyThe}>{subtitleText1}</div>
          <div className={styles.toremIpsumDolor}>
            {subtitleText2}
          </div>
        </div>
      </div>
      <div className={styles.may2023Parent}>
        <div className={styles.may2023}>24 May 2023</div>
        <div className={styles.readNow}>Read Now</div>
      </div>
    </div>
  );
};

export default MoneyContainer;
