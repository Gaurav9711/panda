import MoneyContainer from "./Money-container";
import styles from "./Learning-container.module.css";

const LearningContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.frameParent}>
        <div className={styles.keepLearningKeepGrowingParent}>
          <div className={styles.keepLearningKeep}>
            Keep Learning. Keep Growing.
          </div>
          <div className={styles.insightsAndStrategies}>
            Insights and Strategies for Mastering Your Finances: Stay Up-to-Date
            with the Latest Trends, Tips, and Techniques to Take Control of Your
            Money
          </div>
        </div>
        <div className={styles.frameGroup}>
          <MoneyContainer
            subtitleText="/frame-241@2x.png"
            subtitleText1="Save money, the right way"
          />
          <MoneyContainer
            subtitleText="/frame-2411@2x.png"
            subtitleText1="Save money, the right way. Second line test"
          />
          <MoneyContainer
            subtitleText="/frame-2412@2x.png"
            subtitleText1="Save money, the right way. Second line test"
          />
          <MoneyContainer
            subtitleText="/frame-241@2x.png"
            subtitleText1="Save money, the right way"
          />
        </div>
      </div>
      <div className={styles.moreInsightsWrapper}>
        <div className={styles.moreInsights}>More Insights</div>
      </div>
    </div>
  );
};

export default LearningContainer;
