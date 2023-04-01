import styles from "./investment-container.module.css";

const InvestmentContainer = ({
  investmentText,
  investmentOptionsText,
  lowRiskHighReturnText,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src={investmentText} />
        <div className={styles.safeInvestmentsThat}>
          {investmentOptionsText}
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.lowRiskHigh}>{lowRiskHighReturnText}</div>
    </div>
  );
};

export default InvestmentContainer;
