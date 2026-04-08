import "./ModalWithForm.css";
// import { Link } from "react-router-dom";
// import SignUpForm from "../SignUpForm/SignUpForm";
import CompleteForm from "../CompleteForm/CompleteForm";
// import SignInForm from "../SignInForm/SignInForm";
import ExitBtn from "../../assets/exitbtn.svg";
function ModalWithForm() {
  return (
    <div className="modal__container modal__container-inactive">
      <div className="modal__modal-content">
        <div className="modal__modal-exit-btn">
          <img src={ExitBtn} alt="Exit button icon" />
        </div>
        <div className="modal__form ">
          {/* <SignInForm /> */}
          {/* <SignUpForm /> */}
          {/* <CompleteForm /> */}
        </div>
      </div>
    </div>
  );
}
export default ModalWithForm;
