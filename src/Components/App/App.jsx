import { Routes, Route } from "react-router-dom";
import "../../vendor/normalize.css";
import "../../vendor/fonts.css";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
