import React from "react";

const DataPass = ({ data, onClose }) => {
  console.log(data);
  return (
    <div>
      <div>
        <span>Surveyor Name : {data.surveyor_name || "NA"}</span>
      </div>
      <div>
        <span>Assembly Name : {data.assembly || "NA"}</span>
      </div>
      <div>
        <span>Taluka Name : {data.taluka || "NA"}</span>
      </div>
      <div>
        <span>Booth Name : {data.booth || "NA"}</span>
      </div>
      <div>
        <img src={data.photo_url} alt="photo" />
      </div>
      <div>
        <span>Volunteer Name : {data.volunteer_name || "NA"}</span>
      </div>
      <div>
        <span>Booth Status : {data.booth_status || "NA"}</span>
      </div>
    </div>
  );
};

export default DataPass;
