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
            <span>{`FD Bazaar `}</span>
          </span>
        </div>
        <div className={styles.getAccessTo}>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <div className={styles.saveNowWrapper}>
          <div className={styles.saveNow}>Explore FDs</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FdBazaar