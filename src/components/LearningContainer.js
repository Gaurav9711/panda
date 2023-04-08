import MoneyContainer from "./Money-container";
import styles from "./Learning-container.module.css";
import values from './LearningContainer.json'
const LearningContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.frameParent}>
        <div className={styles.keepLearningKeepGrowingParent}>
          <div className={styles.keepLearningKeep}>
            {values.mainHeading}
          </div>
          <div className={styles.insightsAndStrategies}>
           {values.mainContent}
          </div>
        </div>
        <div className={styles.frameGroup}>
          <MoneyContainer
            subtitleText={values.Card1Logo}
            subtitleText1={values.Card1Heading}
            subtitleText2={values.Card1content}
          />
          <MoneyContainer
            subtitleText={values.Card2Logo}
            subtitleText1={values.Card2Heading}
            subtitleText2={values.Card2content}
          />
          <MoneyContainer className={styles.InvisibleContainer}
            subtitleText={values.Card3Logo}
            subtitleText1={values.Card3Heading}
            subtitleText2={values.Card3content}
          />
          <MoneyContainer className={styles.InvisibleContainer}
            subtitleText={values.Card4Logo}
            subtitleText1={values.Card4Heading}
            subtitleText2={values.Card4content}
          />
        </div>
      </div>
      <div className={styles.moreInsightsWrapper}>
        <div className={styles.moreInsights}>{values.button}</div>
      </div>
    </div>
  );
};

export default LearningContainer;
