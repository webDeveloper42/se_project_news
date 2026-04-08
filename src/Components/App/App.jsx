import { Routes, Route, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const username = "Raymond";

  function handleAuthClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  function openModal(modal) {
    setActiveModal(modal);
  }

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <CurrentUserContext.Provider
      value={{ isLoggedIn, username, handleAuthClick, activeModal, openModal, closeModal }}
    >
      <div className="page">
        <div className="page__content">
          <Header isDark={pathname === "/user"} />
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
