import AksharContainer from "./Akshar-container";
import styles from "./TeamContainer.module.css";
import values from './TeamContainer.json'
const TeamContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.frameParent}>
        <div className={styles.meetTheTeamParent}>
          <div className={styles.meetTheTeam}>{values.mainHeading}</div>
          <div className={styles.discoverThePassion}>
            {values.mainContent}
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <AksharContainer
                imageIds={values.mainCardImg}
                smallImageIds="/-linkedin.svg"
              />
            </div>
            <div className={styles.quotationParent}>
              <img
                className={styles.quotationIcon}
                alt=""
                src="/quotation.svg"
              />
              <img
                className={styles.quotationIcon1}
                alt=""
                src="/quotation1.svg"
              />
              <div className={styles.ourVisionIs}>
                {values.vision}
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <AksharContainer
              imageIds={values.Card1Logo}
              smallImageIds="/-linkedin1.svg"
              FirstName={values.Card1FName}
              SirName={values.Card1SName}
              Designation={values.Card1Desg}
            />
            <AksharContainer
              imageIds={values.Card2Logo}
              smallImageIds="/-linkedin2.svg"
              FirstName={values.Card2FName}
              SirName={values.Card2SName}
              Designation={values.Card2Desg}
            />
            <AksharContainer
              imageIds={values.Card3Logo}
              smallImageIds="/-linkedin3.svg"
              FirstName={values.Card3FName}
              SirName={values.Card3SName}
              Designation={values.Card3Desg}
            />
            <AksharContainer
              imageIds={values.Card4Logo}
              smallImageIds="/-linkedin4.svg"
              FirstName={values.Card4FName}
              SirName={values.Card4SName}
              Designation={values.Card4Desg}
            />
            <AksharContainer
              imageIds={values.Card5Logo}
              smallImageIds="/-linkedin5.svg"
              FirstName={values.Card5FName}
              SirName={values.Card5SName}
              Designation={values.Card5Desg}
            />
            <AksharContainer
              imageIds={values.Card6Logo}
              smallImageIds="/-linkedin1.svg"
              FirstName={values.Card6FName}
              SirName={values.Card6SName}
              Designation={values.Card6Desg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
