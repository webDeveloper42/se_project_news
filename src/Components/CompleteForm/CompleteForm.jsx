import "./CompleteForm.css";

function CompleteForm({ onSwitchToSignIn }) {
  return (
    <form className="complete">
      <div className="complete__content">
        <div className="complete__header">
          <div className="complete__title">
            Registration successfully <br /> completed!
          </div>
        </div>
        <div className="complete__btns-container">
          <div className="complete__switch-btn">
            <button
              type="button"
              className="complete__switcher-btn"
              onClick={onSwitchToSignIn}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default CompleteForm;
