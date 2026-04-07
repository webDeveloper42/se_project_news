import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className=" nav header">
      <div className="header__content">
        <div className="header__logo">
          <div className="h1">NewsExplorer</div>
        </div>
        <div className="header__links">
          <Link to={"/"} className="link header__home-btn">
            Home
          </Link>
          {/* <button className="header__saved-article-btn">Saved articles</button> */}
          <button className="btn header__signin-btn">Sign In</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
