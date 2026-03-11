import "./global.css";
import "animate.css";
import HeaderContainer from "./components/HeaderContainer";
import Breaking from "./components/Breaking";
import Hero from "./components/Hero";
import CategoryContainer from "./components/CategoryContainer";
import Footer from "./components/Footer";
import { useState } from "react";
import SelectedCategory from "./components/SelectedCategory";
import SelectedArticle from "./components/SelectedArticle";

function App() {
  const [category, setCategory] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  console.log("APP: " + category);
  return (
    <>
      <HeaderContainer
        updateCategory={setCategory}
        updateArticle={setSelectedArticle}
        currentCategory={category}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {!selectedArticle && (
        <>
          {category === "home" && (
            <>
              <Breaking
                updateArticle={setSelectedArticle}
                setIsOpen={setIsOpen}
                category={category}
              />
              <Hero updateArticle={setSelectedArticle} article={selectedArticle} setIsOpen={setIsOpen} />
            </>
          )}

          {category && (
            <SelectedCategory
              currentCategory={category}
              updateArticle={setSelectedArticle}
              article={selectedArticle}
              setIsOpen={setIsOpen}
            />
          )}

          {window.innerWidth >= 768 && (
            <CategoryContainer
              updateArticle={setSelectedArticle}
              article={selectedArticle}
              currentCategory={category}
            />
          )}
        </>
      )}
      {selectedArticle && (
        <SelectedArticle
          currentArticle={selectedArticle}
          updateArticle={setSelectedArticle}
          currentCategory={category}
          updateCategory={setCategory}
          setIsOpen={setIsOpen}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
