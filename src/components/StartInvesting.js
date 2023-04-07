import styles from "./StartInvesting.module.css";

const StartInvesting = () => {
    return (
        <div className={styles.desktop1440Inner}>
            <div className={styles.frameParent}>
                <div className={styles.followUsParent}>
                    <div className={styles.followUs}>Start Investing</div>
                    <div className={styles.discoverThePassion}>
                        Discover the passion, expertise, and values that drive our team and
                        fuel their commitment to excellence.
                    </div>
                </div>
                <div className={styles.frameGroup}>
                    <button className={styles.BIOButton}>
                        <div className="BIO">
                            Invest Now
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartInvesting;
