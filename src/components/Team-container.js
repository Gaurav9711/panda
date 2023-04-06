import AksharContainer from "./Akshar-container";
import styles from "./TeamContainer.module.css";

const TeamContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.frameParent}>
        <div className={styles.meetTheTeamParent}>
          <div className={styles.meetTheTeam}>Meet the team</div>
          <div className={styles.discoverThePassion}>
            Discover the passion, expertise, and values that drive our team and
            fuel their commitment to excellence.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <AksharContainer
                imageIds="/frame-251@2x.png"
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
                Our vision is to make safe investments with better returns
                easily accessibly to all indians
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <AksharContainer
              imageIds="/frame-2511@2x.png"
              smallImageIds="/-linkedin1.svg"
            />
            <AksharContainer
              imageIds="/frame-2512@2x.png"
              smallImageIds="/-linkedin2.svg"
            />
            <AksharContainer
              imageIds="/frame-2513@2x.png"
              smallImageIds="/-linkedin3.svg"
            />
            <AksharContainer
              imageIds="/frame-2514@2x.png"
              smallImageIds="/-linkedin4.svg"
            />
            <AksharContainer
              imageIds="/frame-2515@2x.png"
              smallImageIds="/-linkedin5.svg"
            />
            <AksharContainer
              imageIds="/frame-2511@2x.png"
              smallImageIds="/-linkedin1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
