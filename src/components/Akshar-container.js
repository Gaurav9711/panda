import styles from "./AksharContainer.module.css";

const AksharContainer = ({ imageIds, smallImageIds,FirstName, SirName, Designation}) => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src={imageIds} />
      <div className={styles.frameGroup}>
        <div className={styles.aksharShahParent}>
          <div className={styles.aksharShah}>
            <span><strong>{FirstName}</strong></span>
            <span style={{color:"gray"}}><strong>{" "+SirName}</strong></span>
          </div>
          <div className={styles.founderAndCeo}>{Designation}</div>
        </div>
        <img className={styles.linkedinIcon} alt="" src={smallImageIds} />
      </div>
    </div>
  );
};

export default AksharContainer;
