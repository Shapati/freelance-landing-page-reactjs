import styles from './Cover.module.css'
import Intro from "../intro/Intro"
import Navbar from "../Navabar/Navbar"


const Cover = () => {
  return (
    <div className={styles.cover}>
      <Navbar />
      <Intro />
    </div>
  )
}

export default Cover