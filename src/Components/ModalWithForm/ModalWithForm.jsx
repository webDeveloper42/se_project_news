import "./ModalWithForm.css";
import { useContext, useEffect } from "react";
import ExitBtn from "../../assets/exitbtn.svg";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";

function ModalWithForm({ isOpen, children }) {
  const { closeModal } = useContext(CurrentUserContext);

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
    <div className={`modal ${!isOpen ? "modal--closed" : ""}`}>
      <div
        className={`modal__container ${isOpen ? "modal__container-active" : "modal__container-inactive"}`}
        onClick={handleOverlayClick}
      >
        <div className="modal__content">
          <button className="modal__exit-btn" onClick={closeModal}>
            <img src={ExitBtn} alt="Exit button icon" />
          </button>
          <div className="modal__form">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
