import styles from "./FollowUs.module.css";

const FollowUsContainer = () => {
  return (
    <div className={styles.desktop1440Inner}>
      <div className={styles.frameParent}>
        <div className={styles.followUsParent}>
          <div className={styles.followUs}>Follow us</div>
          <div className={styles.discoverThePassion}>
            Discover the passion, expertise, and values that drive our team and
            fuel their commitment to excellence.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.youtubeParent}>
            <img className={styles.youtubeIcon} alt="" src="/-youtube.svg" />
            <div className={styles.fixedinvestments}>@fixedInvestments</div>
          </div>
          <div className={styles.youtubeParent}>
            <div className={styles.youtubeIcon}>
              <div className={styles.linkedinChild} />
              <img
                className={styles.linkedinLogoIcon}
                alt=""
                src="/_Linkedin.png"
              />
            </div>
            <div className={styles.fixedinvestments}>@fixedInvestments</div>
          </div>
          <div className={styles.youtubeParent}>
            <img className={styles.youtubeIcon} alt="" src="/-telegram.svg" />
            <div className={styles.fixedinvestments}>@fixedInvestments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUsContainer;
