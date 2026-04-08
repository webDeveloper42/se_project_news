import "./CompleteForm.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function CompleteForm() {
  const { openModal } = useContext(CurrentUserContext);
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
              onClick={() => openModal("signin")}
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
