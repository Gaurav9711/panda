import styles from "./ChatContainer.module.css";

const ChatContainer = () => {
  return (
    <div className={styles.lineParent}>
      <div className={styles.frameChild} />
      <div className={styles.fixerraPvtLtd}>© 2023 Fixerra Pvt Ltd</div>
      <div className={styles.frameParent}>
        <img className={styles.frameIcon} alt="" src="/frame1.svg" />
        <img className={styles.frameIcon} alt="" src="/frame2.svg" />
        <img className={styles.frameIcon} alt="" src="/frame3.svg" />
      </div>
      <div className={styles.wantToTalkParent}>
        <div className={styles.wantToTalk}>Want to talk?</div>
        <div className={styles.callUsAnd}>
          Call us and we will solve all your doubts and help you grow your
          business
        </div>
        <div className={styles.phoneParent}>
          <img className={styles.frameIcon} alt="" src="/phone.svg" />
          <div className={styles.invest}>Call +91 9876543210</div>
        </div>
      </div>
      <div className={styles.investParent}>
        <div className={styles.invest}><strong>Invest</strong></div>
        <div className={styles.fdBazaarParent}>
          <div className={styles.invest}>FD Bazaar</div>
          <div className={styles.invest}>Savings ++</div>
          <div className={styles.invest}>Tax Saver</div>
          <div className={styles.invest}>Regular Income</div>
        </div>
      </div>
      <div className={styles.companyParent}>
        <div className={styles.invest}><strong>Company</strong></div>
        <div className={styles.fdBazaarParent}>
          <div className={styles.invest}>About Us</div>
          <div className={styles.invest}>Career</div>
          <div className={styles.invest}>Features</div>
          <div className={styles.invest}>Mission</div>
          <div className={styles.invest}>{`Need & Support`}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameIcon3} alt="" src="/frame4.svg" />
        <div className={styles.callUsAnd}>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
