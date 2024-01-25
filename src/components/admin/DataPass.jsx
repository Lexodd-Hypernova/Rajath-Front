import React from "react";

const DataPass = ({ data, onClose }) => {
  console.log(data);
  return (
    <div className="mr_dt-mdl">
      <div className="mr_mdl-lst">
        <span>Surveyor Name : {data.surveyor_name || "NA"}</span>
      </div>
      <div className="mr_mdl-lst">
        <span>Assembly Name : {data.assembly || "NA"}</span>
      </div>
      <div className="mr_mdl-lst">
        <span>Taluka Name : {data.taluka || "NA"}</span>
      </div>
      <div className="mr_mdl-lst">
        <span>Booth Name : {data.booth || "NA"}</span>
      </div>
      <div className="mr_mdl-img">
        <img src={data.photo_url} alt="photo" />
      </div>
      <div className="mr_mdl-lst">
        <span>Volunteer Name : {data.volunteer_name || "NA"}</span>
      </div>
      <div className="mr_mdl-lst">
        <span>Booth Status : {data.booth_status || "NA"}</span>
      </div>
    </div>
  );
};

export default DataPass;
