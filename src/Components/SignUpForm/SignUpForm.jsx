import "./SignUpForm.css";

function SignUpForm({ onSwitchToSignIn, onSignUpComplete }) {
  return (
    <form className="signup">
      <div className="signup__content">
        <div className="signup__header">
          <div className="signup__title">Sign Up</div>
        </div>
        <div className="signup__form-data">
          <label htmlFor="email" className="signup__label">
            Email
            <input
              type="text"
              required
              placeholder="Enter email"
              className="signup__input"
            />
          </label>
          <label htmlFor="password" className="signup__label">
            Password
            <input
              type="text"
              required
              placeholder="Enter password"
              className="signup__input"
            />
          </label>
          <label htmlFor="password" className="signup__label">
            Username
            <input
              type="text"
              required
              placeholder="Enter name"
              className="signup__input"
            />
          </label>
        </div>
        <div className="signup__btns-container">
          <div className="signup__submit-btn-container ">
            <button type="button" className="signup__submit-btn" onClick={onSignUpComplete}>Sign Up</button>
          </div>
          <div className="signup__switch-btn-container">
            or <button type="button" className="signup__switcher-btn" onClick={onSwitchToSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SignUpForm;
