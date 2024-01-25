import React, { useEffect, useState } from "react";
import BASEURL from "../../data/baseurl";
import Red from "../../../public/assets/images/red.svg";
import "./ModelDetail.css";
import DataPass from "./DataPass";

const BoothModal = ({ selectedRow, onClose }) => {
  const [boothdata, setBoothData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datapass, setDataPass] = useState([]);
  const [error, setError] = useState(null);

  // token
  const token = localStorage.getItem("accessToken");

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

  const updateDataPass = (data) => {
    setDataPass([data]);
  };

  useEffect(() => {
    const fetchBoothDetails = async () => {
      try {
        const response = await fetch(
          `${BASEURL.url}/admin/getVolunteersByBoothId?booth_id=${selectedRow.booth_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
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
      } catch (err) {
        console.log("Error fetching data:", err);
        setError("Error fetching data. Please try again."); // Set error message
        setLoading(false);
      }
    };
    fetchBoothDetails();
    console.log("getVolunteersByBoothId")
  }, [selectedRow.booth_id]); // Include updateDataPass in the dependency array (removed updateDataPass from dependency array to avoid API call again and again)

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
            {datapass.length > 0 ? (
              // Render content based on datapass
              datapass.map((data, index) => (
                <DataPass data={data} index={index} key={index} />
              ))
            ) : (
              // Render booth details
              <>
                <p onClick={() => updateDataPass(boothdata.PRESIDENT)}>
                  Booth Level President: {renderStatusIcon(boothdata.PRESIDENT)}
                </p>
                <p onClick={() => updateDataPass(boothdata.BLA1)}>
                  Booth Level Agent 1: {boothdata.BLA1.volunteer_name}
                </p>
                <p onClick={() => updateDataPass(boothdata.BLA2)}>
                  Booth Level Agent 2: {renderStatusIcon(boothdata.BLA2)}
                </p>

                {boothdata.volunteers.map((volunteer, index) => (
                  <p key={index} onClick={() => updateDataPass(volunteer)}>
                    Booth Level Volunteer {index + 1}:{" "}
                    {volunteer.volunteer_name} - {volunteer.phn_no}
                  </p>
                ))}
                <p onClick={() => updateDataPass(selectedRow.booth_status)}>
                  Booth Status:{" "}
                  <span
                    style={{ color: getWordColor(selectedRow.booth_status) }}
                  >
                    {selectedRow.booth_status === "YELLOW" && "Semi Filled"}
                    {selectedRow.booth_status === "GREEN" && "Fully Filled"}
                    {selectedRow.booth_status === "RED" && "Empty"}
                  </span>
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BoothModal;
