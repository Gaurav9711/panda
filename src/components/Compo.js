import styles from "./hero-container.module.css";
const HeroContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.stressFreeInvestingParent}>
        <div className={styles.stressFreeInvesting}>Stress-Free Investing</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <button className={styles.joinTheWaitlistWrapper}>
          <div className={styles.joinTheWaitlist}>Join the Waitlist</div>
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
