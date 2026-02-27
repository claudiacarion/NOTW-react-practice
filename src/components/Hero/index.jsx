import styles from "./hero.module.css"
import RecentContainer from '../RecentContainer'
import Featured from "../Featured"
import SportsContainer from '../SportsContainer'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <RecentContainer />
      <Featured />
      <SportsContainer />
    </div>
  )
}

export default Hero