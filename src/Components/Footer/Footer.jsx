import "./Footer.css";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="nav footer">
      <div className="footer__copyright">
        © 2020 Supersite, Powered by News API
      </div>
      <div className="footer__links">
        <Link to={"/"} className="link footer__home-btn">
          Home
        </Link>
        <a
          href="https://tripleten.com/"
          target="_blank"
          alt="Link to TripleTen"
          className="link footer__tripleten-btn"
        >
          Tripleten
        </a>
        <div className="footer__icons">
          <a
            href="https://github.com/webDeveloper42"
            target="_blank"
            className="footer__github"
          >
            <img src={Github} alt="Link to Github" />
          </a>
          <a href="https://www.linkedin.com/in/raymondintech/" target="_blank">
            <img
              src={Linkedin}
              alt="Link to Linkedin"
              className="footer__linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
