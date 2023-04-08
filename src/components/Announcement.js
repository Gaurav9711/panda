import React from 'react'
import styles from "./Announcement.module.css";
const Announcement = () => {
  return (
    <div>
        <div className={styles.discountContainer}>
        <img src="Megaphone.png" alt="" style={{margin:"0 3px"}}/>
            <p>  SBI FD rate climbed up to 8.5%</p> <p className={styles.TakeAction}> &nbsp; &nbsp; Take Action</p>
        </div>
    </div>
  );
};

export default Announcement;