import styles from "./PressContainer.module.css";

const PressContainer = () => {
  return (
    <div className={styles.desktop1440Inner}>
      <div className={styles.frameParent}>
        <div className={styles.inThePressParent}>
          <div className={styles.inThePress}>In the press</div>
          <div className={styles.discoverThePassion}>
            Discover the passion, expertise, and values that drive our team and
            fuel their commitment to excellence.
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.image16Wrapper}>
              <img
                className={styles.image16Icon}
                alt=""
                src="/image-16@2x.png"
              />
            </div>
            <div className={styles.image16Wrapper}>
              <img
                className={styles.image14Icon}
                alt=""
                src="/image-14@2x.png"
              />
            </div>
            <div className={styles.image16Wrapper}>
              <img
                className={styles.image15Icon}
                alt=""
                src="/image-15@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressContainer;
