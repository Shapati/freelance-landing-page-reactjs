import styles from './Advert.module.css'

export const Advert = () => {
  return (
    <div className={styles.advert}>
      <div className={styles['advert-box']}>
        <div className={styles['advert-image']}>
          <img src="./assets/audience.svg" alt="" />
        </div>
        <h3>Grow your audience</h3>
        <p>Find new customers and build <br /> your email list with lead <br /> generation ..</p>
      </div>
      <div className={styles['advert-box']}>
        <div className={styles['advert-image']}>
          <img src="./assets/online.svg" alt="" />
        </div>
        <h3>Boost online sales</h3>
        <p>Market your ecommerce <br /> business and deliver experiences ..</p>
      </div>
      <div className={styles['advert-box']}>
        <div className={styles['advert-image']}>
          <img src="./assets/cap.svg" alt="" />
        </div>
        <h3>Sell your knowledge</h3>
        <p>Build a follwing, engage them <br /> with your content ..</p>
      </div>
    </div>
  )
}

