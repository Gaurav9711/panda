import React from 'react'
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
        <div className={styles.discountContainer}>
        <img src="Megaphone.png" alt="" />
            <p>  SBI FD rate climbed up to 8.5%</p> <p className={styles.TakeAction}> &nbsp; &nbsp; Take Action</p>
        </div>
    </div>
  );
};

export default Footer;