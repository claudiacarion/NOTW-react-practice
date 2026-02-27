import "./global.css";
import "animate.css";
import HeaderContainer from "./components/HeaderContainer";
import Breaking from "./components/Breaking";
import Hero from "./components/Hero";
import CategoryContainer from "./components/CategoryContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderContainer />
      <Breaking />
      <Hero />
      <CategoryContainer />
      <Footer />
    </>
  );
}

export default App;
