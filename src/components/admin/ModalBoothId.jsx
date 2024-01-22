import React, { useEffect, useState } from "react";
import BASEURL from "../../data/baseurl";
import Red from "../../../public/assets/images/red.svg";
import "./ModelDetail.css";

const BoothModal = ({ selectedRow, onClose }) => {
  const [boothdata, setBoothData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const renderStatusIcon = (status) => {
    return status === "NOT FILLED" ? <img src={Red} alt="red" /> : "tick";
  };

  useEffect(() => {
    const fetchBoothDetails = async () => {
      try {
        const response = await fetch(
          `${BASEURL.url}/admin/getVolunteersByBoothId?booth_id=${selectedRow.booth_id}`,
          {
            headers: {
              Authorization: BASEURL.token,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.data) {
          throw new Error("Unexpected data structure");
        }
        setBoothData(data.data);
        setLoading(false);
        console.log(data.data);
      } catch (err) {
        console.log("Error fetching data:", err);
        setError("Error fetching data. Please try again."); // Set error message
        setLoading(false);
      }
    };
    fetchBoothDetails();
  }, [selectedRow.booth_id]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
          <>
            <p>
              Booth Level President: {renderStatusIcon(boothdata.PRESIDENT)}
            </p>
            <p>Booth Level Agent 1: {boothdata.BLA1.volunteer_name}</p>
            <p>Booth Level Agent 2: {renderStatusIcon(boothdata.BLA2)}</p>

            {boothdata.volunteers.map((volunteer, index) => (
              <p key={index}>
                Booth Level Volunteer {index + 1}: {volunteer.volunteer_name} -{" "}
                {volunteer.phn_no}
              </p>
            ))}
            <p>
              Booth Status:{" "}
              <span style={{ color: getWordColor(selectedRow.booth_status) }}>
                {selectedRow.booth_status === "YELLOW" ? "Semi Filled" : null}
                {selectedRow.booth_status === "GREEN" ? "Fully Filled" : null}
                {selectedRow.booth_status === "RED" ? "Empty" : null}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BoothModal;
