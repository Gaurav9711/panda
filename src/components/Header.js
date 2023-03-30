import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <nav className={styles.navBar}>
            <img className={styles.frameIcon} src="/Frame.png" />
            <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                    <button className={styles.investParent}>
                        <div className={styles.invest}>Invest</div>
                        <img
                            className={styles.chevronDownIcon}

                            src="chevrondown.svg"
                        />
                    </button>
                </div>
                <div className={styles.blogsWrapper}>
                    <div className={styles.invest}>Blogs</div>
                </div>
                <div className={styles.blogsWrapper}>
                    <div className={styles.invest}>About</div>
                </div>
            </div>
            <button >
                <div className="BestInvestmentOptions">
                    Best Investment Options
                </div>
            </button>
        </nav>
        //    <Image src="/Frame.png" width="100" height="100y">
        //    </Image>
    );
};

export default Header;
