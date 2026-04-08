import "./SignInForm.css";
import { useState, useContext } from "react";
import { getEmailError, getPasswordError } from "../../utils/validation";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function SignInForm() {
  const { openModal } = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailError = getEmailError(email);
  const passwordError = getPasswordError(password);
  const isValid = !emailError && !passwordError && email && password;

  return (
    <form className="signin">
      <div className="signin__content">
        <div className="signin__header">
          <div className="signin__title">Sign In</div>
        </div>
        <div className="signin__form-data">
          <label htmlFor="email" className="signin__label">
            Email
            <input
              id="email"
              type="text"
              required
              placeholder="Enter email"
              className="signin__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
            />
            <span className={`signin__error ${emailTouched && emailError ? "signin__error--visible" : ""}`}>
              {emailError}
            </span>
          </label>
          <label htmlFor="password" className="signin__label">
            Password
            <input
              id="password"
              type="password"
              required
              placeholder="Enter password"
              className="signin__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
            />
            <span className={`signin__error ${passwordTouched && passwordError ? "signin__error--visible" : ""}`}>
              {passwordError}
            </span>
          </label>
        </div>
        <div className="signin__btns-container">
          <div className="signin__submit-btn-container">
            <button
              type="submit"
              className={`signin__submit-btn ${isValid ? "signin__submit-btn-active" : ""}`}
              disabled={!isValid}
            >
              Sign in
            </button>
          </div>
          <div className="signin__switch-btn-container">
            or{" "}
            <button type="button" className="signin__switcher-btn" onClick={() => openModal("signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SignInForm;
