import React, { useEffect, useState } from "react";
import MobHeader from "../header/MobHeader";
import MobileModal from "../menu/MobileModal";
import { useMobHeaderContext } from "../../context/MobHeader";
import axios, { all } from "axios";
import "./style.css";
import SurHistoryModal from "./SurHistoryModal";

const SurHistory = () => {
  const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
  const [responseData, setResponseData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://13.235.80.103:5200/com/getBoothAddress?assembly=Baramati&taluka=199 Daund&booth=10 - Pilanavadi",
  //       headerConfig
  //     )
  //     .then((res) => {
  //       setResponseData(res.data.ward);
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error.res);
  //     });
  // }, []);
  const token = localStorage.getItem("accessToken");

  const fetchAssembly = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://13.235.80.103:5200/auth/getVolunteersDataBySurveyorId?surveyor_id=2",
        requestOptions
      );
      const data = await response.json();
      // console.log(data);
      const allData = data.data;
      setResponseData(allData);
      console.log(allData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAssembly();
  }, []);

  return (
    <>
      <div className="pg__Wrap">
        <MobHeader></MobHeader>
        <div className="sur__Sec-wrap">
          <div className="sur_srt-sec">
            <div className="sur_Row1">
              <div className="sur_sc-dt">
                <div className="input-group">
                  <span className="input-group-text sc-icn" id="basic-addon1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                  />
                </div>
              </div>
              <div className="sur_ref-btn">
                <button className="btn">
                  <i className="fa-solid fa-rotate-right"></i>
                </button>
              </div>
            </div>
            <div className="sur_Row2">
              <div className="sur_pr">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Assembly
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item">Assembly1</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Assembly2</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Assembly3</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Assembly4</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sur_as">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Taluka
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item">Taluka1</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Taluka2</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Taluka3</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Taluka4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="sur_Row3">
              <div className="sur_bt">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Booth
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item">Booth1</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Booth2</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Booth3</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Booth4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className='sur_Row4'>
              <div className='sur_add-vl'>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addVolModal">
                  Add volunteer
                </button>
              </div>
            </div> */}
          </div>
          <div className="sur__Table">
            <table className="table">
              <thead className="table-primary">
                <tr className="">
                  <th scope="col">Assembly</th>
                  <th scope="col">Thaluka</th>
                  <th scope="col">Booth</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {responseData.map((data, i) => (
                  <tr key={i} className="">
                    <td>{data.assembly}</td>
                    <td>{data.taluka}</td>
                    <td>{data.booth}</td>
                    <td className="">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target={`#surEditModal-${i}`} // Add unique identifier for each modal
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </td>
                    <SurHistoryModal
                      data={data}
                      modalId={`surEditModal-${i}`}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <MobileModal
        isOpen={isMobModalOpen}
        onClose={closeMobModal}
      ></MobileModal>
    </>
  );
};

export default SurHistory;
