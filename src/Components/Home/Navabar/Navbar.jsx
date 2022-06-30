import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles['nav-left']}>
        <p>FreeLancin.io</p>
      </div>
      <div className={styles['nav-middle']}>
        <a href="/">Services</a>
        <a href="/">About us</a>
        <a href="/">Blog</a>
      </div>
      <div className={styles['nav-right']}>
        <a href="/">Contact us</a>
      </div>
    </div>
  )
}

export default Navbar