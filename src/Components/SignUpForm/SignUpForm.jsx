import "./SignUpForm.css";

function SignUpForm() {
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
            <button className="signup__submit-btn">Sign Up</button>
          </div>
          <div className="signup__switch-btn-container">
            or <button className="signup__switcher-btn">Sign In</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SignUpForm;
