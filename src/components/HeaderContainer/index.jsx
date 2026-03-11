import Header from "../Header";
import Navbar from "../NavBar";

const HeaderContainer = ({ updateCategory, updateArticle, setIsOpen, isOpen, currentCategory }) => {
  return (
    <>
      <Header updateCategory={updateCategory} updateArticle={updateArticle} setIsOpen={setIsOpen} currentCategory={currentCategory}/>
      <Navbar updateCategory={updateCategory} updateArticle={updateArticle} setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default HeaderContainer;
