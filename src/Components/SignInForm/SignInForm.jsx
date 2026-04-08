import "./SignInForm.css";

function SignInForm({ onSwitchToSignUp }) {
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
              type="text"
              required
              placeholder="Enter email"
              className="signin__input"
            />
          </label>
          <label htmlFor="password" className="signin__label">
            Password
            <input
              type="text"
              required
              placeholder="Enter password"
              className="signin__input"
            />
          </label>
        </div>
        <div className="signin__btns-container">
          <div className="signin__submit-btn-container ">
            <button className="signin__submit-btn">Sign in</button>
          </div>
          <div className="signin__switch-btn-container">
            or <button type="button" className="signin__switcher-btn" onClick={onSwitchToSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SignInForm;
