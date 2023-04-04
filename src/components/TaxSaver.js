import React from 'react'
import styles from './FdBazaar.module.css'

const FdBazaar = () => {
  return (
    <div className={styles.hero}>
    <div className={styles.heroChild} />
    <div className={styles.heroInner}>
      <div className={styles.savingsParent}>
        <div className={styles.savings}>
          <span className={styles.savingsTxtContainer}>
            <span>{`Tax Saver `}</span>
          </span>
        </div>
        <div className={styles.getAccessTo}>
        Choose across investments that you can easily withdraw and liquidate in times of need
        </div>
        <div className={styles.saveNowWrapper}>
          <div className={styles.saveNow}>Save your Taxes</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FdBazaar