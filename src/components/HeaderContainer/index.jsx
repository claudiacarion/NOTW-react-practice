import Header from '../Header'
import Navbar from "../NavBar"

const HeaderContainer = ({updateCategory, updateArticle }) => {
  return (
    <>
    <Header updateCategory={updateCategory} />
    <Navbar updateCategory={updateCategory} updateArticle={updateArticle}/>
    </>
  )
}

export default HeaderContainer