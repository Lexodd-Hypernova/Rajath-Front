import React from "react";
import "./style.css";

const SurHistoryModal = ({ data, modalId }) => {
  return (
    <div
      className="modal fade sur_edit-modal"
      id={modalId} // Use the passed modalId as the unique identifier
      tabIndex="-1"
      aria-labelledby={`surEditModalLabel-${modalId}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h1 className="modal-title fs-5" id="surEditModalLabel">Modal title</h1> */}
            {/* <span className='ad_si-no'>01</span> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="sur_m-cnt">
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Assembly</span>
                <div className="sr_ed-inp-fld">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>{data.assembly}</option>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Taluka</span>
                <div className="sr_ed-inp-fld">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>{data.taluka}</option>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Booth</span>
                <div className="sr_ed-inp-fld">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>{data.booth}</option>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Booth Address</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.booth_address}
                  ></input>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Volunteer Name*</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.volunteer_name}
                  ></input>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Phone No*</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="tel"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.phn_no}
                  ></input>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Email ID</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.emailId}
                  ></input>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Gender*</span>
                <div className="sr_ed-inp-fld">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>{data.gender}</option>
                    {/* <option value="1">Female</option>
                    <option value="2">Others</option> */}
                  </select>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Address*</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.volunteer_address}
                  ></input>
                </div>
              </div>
              {/* <div className="sur_input-box">
              <span className="sr_ed-inp-n">House no</span>
              <div className="sr_ed-inp-fld">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                ></input>
              </div>
            </div> */}
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Age*</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.age}
                  ></input>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Caste*</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.caste}
                  ></input>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Occupation</span>
                <div className="sr_ed-inp-fld">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby=""
                    value={data.occupation}
                  ></input>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Degination*</span>
                <div className="sr_ed-inp-fld">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue>{data.designation}</option>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </div>
              </div>
              <div className="sur_input-box">
                <span className="sr_ed-inp-n">Upload Image</span>
                <div className="sr_ed-inp-fld">
                  <input type="file" className="form-control" id="" />
                </div>
              </div>
              <div className="sur_vl-btn">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Delete
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-success">
                  Edit
                </button>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default SurHistoryModal;
