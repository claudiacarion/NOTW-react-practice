import styles from "./hero.module.css"
import RecentContainer from '../RecentContainer'
import Featured from "../Featured"
import SportsContainer from '../SportsContainer'

const Hero = ({updateArticle, article, setIsOpen}) => {  
  return (
    <div className={styles.hero}>
      <RecentContainer updateArticleFunction={updateArticle} currentArticle={article} setIsOpen={setIsOpen}/>
      <Featured updateArticleFunction={updateArticle} currentArticle={article} setIsOpen={setIsOpen}/>
      <SportsContainer updateArticleFunction={updateArticle} currentArticle={article} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Hero