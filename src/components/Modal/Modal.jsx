import React from "react";
import useAppContext from "../../hooks/useAppContext";

import "./Modal.scss";

const Modal = () => {
  const { selectedMeal, closeModal } = useAppContext();
  const { strMealThumb, strMeal, strInstructions, strSource } = selectedMeal;

  const handleModalClose = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <aside className="modal" onClick={handleModalClose}>
      <div className="modal-container">
        <div className="modal-image-wrapper">
          <img className="modal-image" src={strMealThumb} alt="" />
        </div>

        <div className="modal-content">
          <h4 className="modal-title">{strMeal} 🍴</h4>
          <h4 className="modal-subtitle">Cooking instruction 📃</h4>
          <p className="modal-instruction">{strInstructions}</p>
          <a className="modal-link" href={strSource} target="_blank">
            Original source
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
