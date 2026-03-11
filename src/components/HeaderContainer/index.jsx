import Header from "../Header";
import Navbar from "../NavBar";

const HeaderContainer = ({ updateCategory, updateArticle, setIsOpen, isOpen }) => {
  return (
    <>
      <Header updateCategory={updateCategory} />
      <Navbar updateCategory={updateCategory} updateArticle={updateArticle} setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default HeaderContainer;
