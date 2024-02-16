/* eslint-disable react/prop-types */
import "./Modal.css";
import { XCircle } from "react-feather";

export default function Modal({ setIsModalOpen }) {
  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <button
          onClick={() => setIsModalOpen(false)}
          className="edit-modal-close-btn"
        >
          <XCircle />
        </button>
        <h2>Modal abierto</h2>
        <p>aqui va algo</p>
      </div>
    </div>
  );
}
