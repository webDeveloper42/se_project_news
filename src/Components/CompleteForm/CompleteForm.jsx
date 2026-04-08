import "./CompleteForm.css";

function CompleteForm() {
  return (
    <form className="signin">
      <div className="signin__content">
        <div className="signin__header">
          <div className="signin__title">
            Registration successfully <br /> completed!
          </div>
        </div>
        <div className="signin__btns-container">
          <div className="signin__switch-btn">
            <button className="signin__switcher-btn">Sign in</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default CompleteForm;
