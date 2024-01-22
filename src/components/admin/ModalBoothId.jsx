import React, { useEffect, useState } from "react";
import BASEURL from "../../data/baseurl";
import Red from "../../../public/assets/images/red.svg";
import Green from "../../../public/assets/images/Green.svg";
import Yellow from "../../../public/assets/images/Yellow.svg";
import "./ModelDetail.css";

const BoothModal = ({ selectedRow, onClose }) => {
  const [boothdata, setBoothData] = useState([]);
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
  useEffect(() => {
    const fetchBoothDetails = async () => {
      try {
        const response = await fetch(
          `${BASEURL.url}/admin/getVolunteersByBoothId?booth_id=${selectedRow.booth_id}`,
          //   ${selectedRow.booth_id}
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
        setBoothData(data.data);
        console.log(data.data);
      } catch (err) {
        console.log("Error fetching data :", err);
      }
    };
    fetchBoothDetails();
  }, []);
  //   console.log(selectedRow);
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <p>
          Booth Level President :
          {boothdata.PRESIDENT === "NOT FILLED" ? (
            <img src={Red} alt="red" />
          ) : (
            "tick"
          )}
        </p>
        <p>Booth Level Agent 1 :{boothdata.BLA1.volunteer_name}</p>
        <p>
          Booth Level Agent 2 :
          {boothdata.BLA2 === "NOT FILLED" ? (
            <img src={Red} alt="red" />
          ) : (
            "tick"
          )}
        </p>
        {boothdata.volunteers.map((volunteer, index) => (
          <p key={index}>
            Booth Level Volunteer {index + 1} : {volunteer.volunteer_name} -{" "}
            {volunteer.phn_no}
          </p>
        ))}
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

export default BoothModal;
