import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import Menu from "../../assets/menu.svg";
import ExitBtn from "../../assets/exitbtn.svg";
import Logout from "../../assets/logout.svg";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
function Header() {
  const { isLoggedIn, username, handleAuthClick, openModal, closeModal, activeModal } =
    useContext(CurrentUserContext);
  const { pathname } = useLocation();
  const isDark = pathname === "/user";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`nav header ${isDark ? "header--user" : ""} ${menuOpen ? "header--menu-open" : ""}`}
    >
      <div
        className={`header__content ${isDark ? "header__content--dark" : ""}`}
      >
        <div className="header__logo">
          <Link to={"/"} className="header__logo-name">
            NewsExplorer
          </Link>
        </div>
        {activeModal ? (
          <button className="header__modal-exit" onClick={closeModal}>
            <img
              className="header__mobile-exit--light"
              src={ExitBtn}
              alt="Close modal"
            />
          </button>
        ) : (
          <button className="header__menu" onClick={() => setMenuOpen(true)}>
            <img
              className={`header__menu-img ${!isDark ? "header__menu-img--light" : "header__menu-img--dark"}`}
              src={Menu}
              alt="Header menu button"
            />
          </button>
        )}
        <div
          className={`header__mobile-dropdown ${menuOpen ? "header__mobile-dropdown--open" : ""}`}
        >
          <div className="header__mobile-top">
            <Link to={"/"} className="header__logo-name header__mobile-logo">
              NewsExplorer
            </Link>
            <button
              className="header__mobile-exit"
              onClick={() => setMenuOpen(false)}
            >
              <img
                className="header__mobile-exit--light"
                src={ExitBtn}
                alt="Exit button icon"
              />
            </button>
          </div>
          <div className="header__mobile-links">
            <Link
              to={"/"}
              className="link header__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            {isLoggedIn && (
              <Link
                to="/user"
                className="link header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                Saved articles
              </Link>
            )}
            <button
              onClick={() => {
                setMenuOpen(false);
                isLoggedIn ? handleAuthClick() : openModal("signin");
              }}
              className={`btn header__signin-btn header__signin-btn--mobile ${isLoggedIn ? "header__signin-btn--logged-in" : ""}`}
            >
              {isLoggedIn ? (
                <>
                  {username}
                  <img
                    src={Logout}
                    alt="Logout"
                    className="header__logout-icon header__logout-icon--filtered"
                  />
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div
            className="header__overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        </div>
        <div className="header__links">
          <div
            className={`header__home-btn ${!isDark ? "header__home-btn--active" : ""}`}
          >
            <Link to={"/"} className="link header__home-btn-label">
              Home
            </Link>
          </div>
          {isLoggedIn && (
            <div
              className={`header__saved-article-btn ${isDark ? "header__saved-article-btn--active" : ""}`}
            >
              <Link
                to="/user"
                className={`header__saved-article-btn-label link ${isDark ? "header__saved-article-btn--user" : ""}`}
              >
                Saved articles
              </Link>
            </div>
          )}
          <button
            onClick={isLoggedIn ? handleAuthClick : () => openModal("signin")}
            className={`btn header__signin-btn ${isDark ? "header__signin-btn--dark" : ""} ${isLoggedIn ? "header__signin-btn--logged-in" : ""}`}
          >
            {isLoggedIn ? (
              <>
                {username}
                <img
                  src={Logout}
                  alt="Logout"
                  className={`header__logout-icon ${!isDark ? "header__logout-icon--filtered" : ""}`}
                />
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
