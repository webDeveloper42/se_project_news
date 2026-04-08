import "./SignUpForm.css";
import { useState } from "react";
import { getEmailError, getPasswordError, getUsernameError } from "../../utils/validation";

function SignUpForm({ onSwitchToSignIn, onSignUpComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);

  const emailError = getEmailError(email);
  const passwordError = getPasswordError(password);
  const usernameError = getUsernameError(username);
  const isValid = !emailError && !passwordError && !usernameError && email && password && username;
  const hasVisibleError =
    (emailTouched && !!emailError) ||
    (passwordTouched && !!passwordError) ||
    (usernameTouched && !!usernameError);

  return (
    <form className={`signup ${hasVisibleError ? "signup-error-active" : ""}`}>
      <div className="signup__content">
        <div className="signup__header">
          <div className="signup__title">Sign Up</div>
        </div>
        <div className="signup__form-data">
          <label htmlFor="signup-email" className="signup__label">
            Email
            <input
              id="signup-email"
              type="text"
              required
              placeholder="Enter email"
              className="signup__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
            />
            <span className={`signup__error ${emailTouched && emailError ? "signup__error--visible" : ""}`}>
              {emailError}
            </span>
          </label>
          <label htmlFor="signup-password" className="signup__label">
            Password
            <input
              id="signup-password"
              type="password"
              required
              placeholder="Enter password"
              className="signup__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
            />
            <span className={`signup__error ${passwordTouched && passwordError ? "signup__error--visible" : ""}`}>
              {passwordError}
            </span>
          </label>
          <label htmlFor="signup-username" className="signup__label">
            Username
            <input
              id="signup-username"
              type="text"
              required
              placeholder="Enter name"
              className="signup__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => setUsernameTouched(true)}
            />
            <span className={`signup__error ${usernameTouched && usernameError ? "signup__error--visible" : ""}`}>
              {usernameError}
            </span>
          </label>
        </div>
        <div className="signup__btns-container">
          <div className="signup__submit-btn-container">
            <button
              type="button"
              className={`signup__submit-btn ${isValid ? "signup__submit-btn-active" : ""}`}
              disabled={!isValid}
              onClick={isValid ? onSignUpComplete : undefined}
            >
              Sign Up
            </button>
          </div>
          <div className="signup__switch-btn-container">
            or{" "}
            <button type="button" className="signup__switcher-btn" onClick={onSwitchToSignIn}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SignUpForm;
