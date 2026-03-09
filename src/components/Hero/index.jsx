import styles from "./hero.module.css"
import RecentContainer from '../RecentContainer'
import Featured from "../Featured"
import SportsContainer from '../SportsContainer'

const Hero = ({updateArticle, article}) => {  
  return (
    <div className={styles.hero}>
      <RecentContainer updateArticleFunction={updateArticle} currentArticle={article} />
      <Featured updateArticleFunction={updateArticle} currentArticle={article} />
      <SportsContainer updateArticleFunction={updateArticle} currentArticle={article} />
    </div>
  )
}

export default Hero