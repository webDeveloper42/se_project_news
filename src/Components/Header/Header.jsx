import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Logout from "../../assets/logout.svg";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
function Header({ isDark }) {
  const { isLoggedIn, username, handleAuthClick } =
    useContext(CurrentUserContext);
  return (
    <header className={`nav header ${isDark ? "header__header-user" : ""}`}>
      <div
        className={`header__content ${isDark ? "header__content--dark" : ""}`}
      >
        <div className="header__logo">
          <Link to={"/"} className="header__logo-name">
            NewsExplorer
          </Link>
        </div>
        <div className="header__links">
          <div className={`header__home-btn ${!isDark ? "header__home-btn-active" : ""}`}>
            <Link to={"/"} className="link header__home-btn-text">
              Home
            </Link>
          </div>
          {isLoggedIn && (
            <div className={`header__saved-article-btn ${isDark ? "header__saved-article-btn-active" : ""}`}>
              <Link
                to="/user"
                className={`header__saved-article-btn-text link ${isDark ? "header__saved-article-btn-user" : ""}`}
              >
                Saved articles
              </Link>
            </div>
          )}
          <button
            onClick={handleAuthClick}
            className={`btn header__signin-btn ${isDark ? "header__signin-btn--dark" : ""} ${isLoggedIn ? "header__signin-btn--logged-in" : ""}`}
          >
            {isLoggedIn ? (
              <>
                {username}
                <img
                  src={Logout}
                  alt="Logout"
                  className={`header__logout-icon ${!isDark ? "header__logout-icon-filtered" : ""}`}
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
