import styles from "./AksharContainer.module.css";

const AksharContainer = ({ imageIds, smallImageIds }) => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src={imageIds} />
      <div className={styles.frameGroup}>
        <div className={styles.aksharShahParent}>
          <div className={styles.aksharShah}>
            <span><strong>{`Akshar `}</strong></span>
            <span style={{color:"gray"}}><strong>Shah</strong></span>
          </div>
          <div className={styles.founderAndCeo}>Founder and CEO</div>
        </div>
        <img className={styles.linkedinIcon} alt="" src={smallImageIds} />
      </div>
    </div>
  );
};

export default AksharContainer;
