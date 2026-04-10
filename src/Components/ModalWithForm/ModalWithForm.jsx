import "./ModalWithForm.css";
import { useContext, useEffect } from "react";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import CompleteForm from "../CompleteForm/CompleteForm";
import ExitBtn from "../../assets/exitbtn.svg";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function ModalWithForm() {
  const { activeModal, closeModal } = useContext(CurrentUserContext);
  const isOpen = activeModal !== null;

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") closeModal();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  return (
    <div
      className={`modal__container ${isOpen ? "modal__container-active" : "modal__container-inactive"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__modal-content">
        <div className="modal__modal-exit-btn" onClick={closeModal}>
          <img src={ExitBtn} alt="Exit button icon" />
        </div>
        <div className="modal__form">
          {activeModal === "signin" && <SignInForm />}
          {activeModal === "signup" && <SignUpForm />}
          {activeModal === "complete" && <CompleteForm />}
        </div>
      </div>
    </div>
  );
}
export default ModalWithForm;
