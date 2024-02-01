import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/Footer";
import Promotion from "./components/content/Promotion";
import MainContent from "./components/content/MainContent";

function App() {
  return (
    <>
      <Header />
      <Promotion />
      <MainContent />

      <Footer />
    </>
  );
}

export default App;
