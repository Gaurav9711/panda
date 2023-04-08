import InvestmentContainer from "./investment-container";
import styles from "./fixed-container.module.css";
import values from './FixedContainer.json'
const FixedContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.frameParent}>
        <div className={styles.whyFixedParent}>
          <div className={styles.whyFixed}>{values.mainHeading}</div>
          <div className={styles.chooseAcrossInvestments}>
            {values.mainContent}
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
            investmentText={values.Card1Logo}
            investmentOptionsText={values.Card1Heading}
            lowRiskHighReturnText={values.Card1content}
          />
          </div>
          <div className={styles.frameGroupItem}>

          <InvestmentContainer
            investmentText={values.Card2Logo}
            investmentOptionsText={values.Card2Heading}
            lowRiskHighReturnText={values.Card2content}
          />
          </div>
          <div className={styles.frameGroupItem}>

          <InvestmentContainer
            investmentText={values.Card3Logo}
            investmentOptionsText={values.Card3Heading}
            lowRiskHighReturnText={values.Card3content}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedContainer;
