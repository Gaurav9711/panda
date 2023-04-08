import React from 'react'
import styles from './FdBazaar.module.css'
import values from './FdBazaar.json'
const FdBazaar = () => {
  return (
    <div className={styles.hero}>
    <div className={styles.heroChild} />
    <div className={styles.heroInner}>
      <div className={styles.savingsParent}>
        <div className={styles.savings}>
          <span className={styles.savingsTxtContainer}>
            <span>{values.heading}</span>
          </span>
        </div>
        <div className={styles.getAccessTo}>
        {values.content}
        </div>
        <div className={styles.saveNowWrapper}>
          <div className={styles.saveNow}>{values.button}</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FdBazaar