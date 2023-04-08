import styles from "./hero-container.module.css";
import values from "./Compo.json";
const HeroContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.stressFreeInvestingParent}>
        <div className={styles.stressFreeInvesting}>{values.heading}</div>
        <div className={styles.loremIpsumDolor}>
         {values.content}
        </div>
        <button className={styles.joinTheWaitlistWrapper}>
          <div className={styles.joinTheWaitlist}>{values.button}</div>
        </button>
      </div>
      <img
        className={styles.rupeeGoldCoin}
        alt=""
        src="/rupee-gold-coin@2x.png"
      />
      <img
        className={styles.percentCoin1}
        alt=""
        src="/percent-coin-1@2x.png"
      />
      <img className={styles.arrowCoin1} alt="" src="/arrow-coin-1@2x.png" />
      <img className={styles.fCoin2} alt="" src="/f-coin-2@2x.png" />
    </div>
  );
};

export default HeroContainer;
