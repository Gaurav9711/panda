import InvestmentContainer from "./investment-container";
import styles from "./fixed-container.module.css";

const FixedContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.frameParent}>
        <div className={styles.whyFixedParent}>
          <div className={styles.whyFixed}>Why Fixed ?</div>
          <div className={styles.chooseAcrossInvestments}>
            Choose across investments that you can easily withdraw and liquidate
            in times of need
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameGroupItem}>
            {/* <div className={styles.boxcontainer}>
              <div className={styles.boxUpper}>

                <img className={styles.boximg} src="/frame-282.svg" alt="" />
                <h3 className={styles.boxH}>Safe investments that beat inflation</h3>
              </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <hr style={{backgroundColor: "green", height: "50px", width: "10px" }} />
                </div>
              <div className={styles.boxUpper}>
                <img className={styles.boximg} src="/frame-284.svg" alt="" />
                <h3 className={styles.boxH}>Safe investments that protect capital</h3>
              </div>
              <div className={styles.boxUpper}>
                <img className={styles.boximg} src="/frame-283.svg" alt="" />
                <h3 className={styles.boxH}>Liquid investments to manage emergencies</h3>
              </div>
            </div> */}
            <InvestmentContainer
            investmentText="/frame-282.svg"
            investmentOptionsText="Safe investments that beat inflation"
            lowRiskHighReturnText="Low risk, High return investments that are easy to understand"
          />
          </div>
          <div className={styles.frameGroupItem}>

          <InvestmentContainer
            investmentText="/frame-284.svg"
            investmentOptionsText="Safe investments that protect capital"
            lowRiskHighReturnText="Get access to stable and low risk investment options for goals where you cannot afford losses"
          />
          </div>
          <div className={styles.frameGroupItem}>

          <InvestmentContainer
            investmentText="/frame-283.svg"
            investmentOptionsText="Liquid investments to manage emergencies"
            lowRiskHighReturnText="Choose across investments that you can easily withdraw and liquidate in times of need"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedContainer;
