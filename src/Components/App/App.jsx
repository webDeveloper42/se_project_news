import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../vendor/normalize.css";
import "../../vendor/fonts.css";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";
import User from "../User/User";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );
  const [activeModal, setActiveModal] = useState(null);
  const [savedCards, setSavedCards] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("savedCards")) || [];
    } catch {
      return [];
    }
  });
  const username = "Raymond";

  function toggleSaveCard(cardId) {
    setSavedCards((prev) => {
      const next = prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId];
      localStorage.setItem("savedCards", JSON.stringify(next));
      return next;
    });
  }

  function handleLogin() {
    localStorage.setItem("token", "fake-token");
    setIsLoggedIn(true);
  }

  function handleAuthClick() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  function openModal(modal) {
    setActiveModal(modal);
  }

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <CurrentUserContext.Provider
      value={{
        isLoggedIn,
        username,
        handleLogin,
        handleAuthClick,
        activeModal,
        openModal,
        closeModal,
        savedCards,
        toggleSaveCard,
      }}
    >
      <div className="page">
        <div className="page__content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/user" element={<User />} />
          </Routes>
          <Footer />
        </div>
        <ModalWithForm />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
