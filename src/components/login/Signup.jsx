import React, { useEffect, useState } from "react";
// import MobHeader from "../header/MobHeader";
// import { useMobHeaderContext } from '../../context/MobHeader';
// import MobileModal from '../menu/MobileModal';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import BASEURL from "../../data/baseurl";
// import axios from "axios";

import "./style.css";

const Signup = () => {
  // const { isMobModalOpen, closeMobModal } = useMobHeaderContext();

  // useNavigate
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_name: "",
    emailId: "",
    phn_no: "",
    address: "",
    password: "",
    confirmpassword: "",
    profileImage: null,
  });

  const [error, setError] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("emailId", formData.emailId);
    formdata.append("password", formData.password);
    formdata.append("confirmpassword", formData.confirmpassword);
    formdata.append("user_name", formData.user_name);
    formdata.append("phn_no", formData.phn_no);
    formdata.append("address", formData.address);
    formdata.append("profileImage", formData.profileImage);
    formdata.append("role_type", "SURVEYOR");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${BASEURL.url}/auth/register`,
        requestOptions
      );
      if (response.ok) {
        // setIsAuthorized(true);
        const data = await response.json();
        console.log(data);
        navigate("/");
      } else {
        // If login fails, parse and display the error response
        const errorResponse = await response.json();
        setError(errorResponse.message);
        console.error("Signup failed:", errorResponse.message);
        // console.error('Login failed');
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="pg__Wrap">
        {/* <MobHeader></MobHeader> */}
        <div className="c_Logo-wrap">
          <div className="logo_mb-s">
            <img src="assets/images/logo-m.png" alt="logo" />
          </div>
        </div>
        <div className="signup__Wrap">
          <div className="act_Ttl">
            <h3>Create an account</h3>
          </div>
          <div className="act_Form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="sName" className="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sName"
                  name="user_name"
                  value={formData.user_name}
                  onChange={onChangeInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sEmail" className="form-label">
                  Email ID*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="sEmail"
                  name="emailId"
                  value={formData.emailId}
                  onChange={onChangeInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sPhone" className="form-label">
                  Phone No*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="sPhone"
                  name="phn_no"
                  value={formData.phn_no}
                  onChange={onChangeInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sAddress" className="form-label">
                  Home Address*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sAddress"
                  name="address"
                  value={formData.address}
                  onChange={onChangeInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sPassword" className="form-label">
                  Password*
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="sPassword"
                  name="password"
                  value={formData.password}
                  onChange={onChangeInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sCPassword" className="form-label">
                  Conform Password*
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="sCPassword"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={onChangeInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sFile" className="form-label">
                  Upload Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="sFile"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="sbt_btn">
                <button type="submit" className="btn btn-primary">
                  Get Start
                </button>
                <span>
                  Already have an account? <Link to="/">Log in</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal> */}
    </>
  );
};
export default Signup;
