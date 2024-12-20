import React, { useState } from "react";
import Modal from "react-modal";

// Define body parts
const bodyParts = [
  { id: "head", label: "Head" },
  { id: "torso", label: "Torso" },
  { id: "left-arm", label: "Left Arm" },
  { id: "right-arm", label: "Right Arm" },
  { id: "left-leg", label: "Left Leg" },
  { id: "right-leg", label: "Right Leg" },
];

Modal.setAppElement("#root"); // Avoid accessibility warnings

const BodyPartButtons: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [size, setSize] = useState("");

  const openModal = (part: string) => {
    setSelectedPart(part);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPart(null);
    setSize("");
  };

  const handleSubmit = () => {
    console.log(`Size of ${selectedPart}: ${size}`);
    closeModal();
  };

  return (
    <div className="body-container">
      {/* Render body part buttons */}
      {bodyParts.map((part) => (
        <button
          key={part.id}
          className={`body-part-button ${part.id}`}
          onClick={() => openModal(part.label)}
        >
          {part.label}
        </button>
      ))}

      {/* Modal for entering size */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Enter Size"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <h2>Enter Size for {selectedPart}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Size:
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </label>
          <div className="modal-actions">
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BodyPartButtons;
