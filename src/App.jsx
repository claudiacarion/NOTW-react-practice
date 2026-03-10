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
  const [category, setCategory] = useState("Home");
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <HeaderContainer updateCategory={setCategory} updateArticle={setSelectedArticle} currentCategory={category} />
      {!selectedArticle && (
        <>
          <Breaking updateArticle={setSelectedArticle} />
          {category === "Home" && <Hero updateArticle={setSelectedArticle} article={selectedArticle} />}
          {category && <SelectedCategory currentCategory={category} updateArticle={setSelectedArticle} article={selectedArticle} />}
          <CategoryContainer updateArticle={setSelectedArticle} article={selectedArticle} currentCategory={category}/>
        </>
      )}
      {selectedArticle && <SelectedArticle currentArticle={selectedArticle} updateArticle={setSelectedArticle} currentCategory={category} updateCategory={setCategory} />}
      <Footer />
    </>
  );
}

export default App;
