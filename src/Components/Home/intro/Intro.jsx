import styles from './Intro.module.css'
import { Fade,Zoom } from 'react-reveal'
const Intro = () => {
  return (
    <div className={styles.intro}>
      
      <div className={styles['intro-left']}>
        
       <Fade left duration={2000} ><h1>Find & Hire Expert Freelancers</h1>
        <p>Work with the best freelance talent from around the world on our secure flexible and cost-effective platform.</p></Fade> 
        <Zoom top delay={1000} > <div className={styles['intro-links']}>
            <a href="/">Contact us</a>
            <a href="/">Learn more</a>
        </div>
        </Zoom> 
        <img src="./assets/card.svg" alt="" />
      </div>
      

    </div>
  )
}

export default Intro