import React from "react";
import "./ModelDetail.css";

const DetailModal = ({ selectedRow, onClose }) => {
  const getWordColor = (status) => {
    switch (status) {
      case "YELLOW":
        return "#ff0"; // Yellow color
      case "GREEN":
        return "#0f0"; // Green color
      case "RED":
        return "#f00"; // Red color
      default:
        return "#000"; // Default color for unknown statuses
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <p>Surveyor Name: {selectedRow.surveyor_name}</p>
        <p>Date: {selectedRow.createdAt}</p>
        <p>Assembly : {selectedRow.assembly}</p>
        <p>Taluka : {selectedRow.taluka}</p>
        <p>Booth : {selectedRow.booth_address}</p>
        <p>Committee Role : {selectedRow.designation}</p>
        <p>
          Booth Status:{" "}
          <span style={{ color: getWordColor(selectedRow.booth_status) }}>
            {selectedRow.booth_status === "YELLOW" ? (
              <span style={{ color: getWordColor(selectedRow.booth_status) }}>
                Semi Filled
              </span>
            ) : selectedRow.booth_status === "GREEN" ? (
              <span style={{ color: getWordColor(selectedRow.booth_status) }}>
                Fully Filled
              </span>
            ) : selectedRow.booth_status === "RED" ? (
              <span style={{ color: getWordColor(selectedRow.booth_status) }}>
                Empty
              </span>
            ) : null}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DetailModal;
