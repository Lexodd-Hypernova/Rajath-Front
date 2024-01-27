import React, { useEffect, useState } from "react";
import "./style.css";
import BASEURL from "../../data/baseurl";
import MobileModal from "../menu/MobileModal";
import MobHeader from "../header/MobHeader";
import YellowSvg from "../../../public/assets/images/Yellow.svg";
import GreenSvg from "../../../public/assets/images/Green.svg";
import RedSvg from "../../../public/assets/images/red.svg";
import { useMobHeaderContext } from "../../context/MobHeader";
import BoothModal from "./ModalBoothId";

import { ThreeCircles } from 'react-loader-spinner';

const History = () => {
  const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
  const [assemblyData, setAssemblyData] = useState(null);
  const [overViewData, setOverViewData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedAssembly, setSelectedAssembly] = useState("All");
  const [selectedTaluka, setSelectedTaluka] = useState("All");
  const [listOfTaluka, setListOfTaluka] = useState([]);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchOverView = async () => {
      try {
        const response = await fetch(`${BASEURL.url}/admin/getOverview`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setOverViewData(data.data);
      } catch (err) {
        console.log("Error fetching overview data:", err);
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL.url}/admin/getVolunteersData`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Filter data based on the selectedDate, selectedAssembly, and selectedTaluka
        const filteredData = data.data.filter((item) => {
          const dateFilter =
            !selectedDate ||
            new Date(item.createdAt).toLocaleDateString() ===
            new Date(selectedDate).toLocaleDateString();

          const assemblyFilter =
            selectedAssembly === "All" || item.assembly === selectedAssembly;
          // console.log(selectedAssembly);
          const talukaFilter =
            selectedTaluka === "All" || item.taluka === selectedTaluka;

          return dateFilter && assemblyFilter && talukaFilter;
        });

        setAssemblyData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getTalukasByAssembly = async (selectedAssembly) => {
      try {
        const response = await fetch(
          `${BASEURL.url}/com/talukasByAssembly?assembly=${selectedAssembly}`,
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
        setListOfTaluka(data.data);
        console.log(data.data);
      } catch (err) {
        console.log("Error fetching overview data:", err);
      }
    };

    getTalukasByAssembly(selectedAssembly);

    fetchData();
    fetchOverView();
  }, [selectedDate, selectedAssembly, selectedTaluka]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "YELLOW":
        return <img src={YellowSvg} alt="yellow" />;
      case "GREEN":
        return <img src={GreenSvg} alt="green" />;
      case "RED":
        return <img src={RedSvg} alt="red" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="pg__Wrap">
        <div className="ad__Sec">
          <MobHeader></MobHeader>
          <div className="hs_Row1">
            <div className="hs_sh-p">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setSelectedAssembly(e.target.value)}
              >
                <option value="All">Assembly</option>
                <option value="Baramati">Baramati</option>
                <option value="Satara">Satara</option>
                <option value="Parbhani">Parbhani</option>
                <option value="Buldhana">Buldhana</option>
                <option value="Shirur">Shirur</option>
                <option value="Osmanabad">Osmanabad</option>
              </select>
            </div>
            <div className="hs_sh-as">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setSelectedTaluka(e.target.value)}
              >
                <option value="All">Taluka</option>
                {listOfTaluka.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* <div className="hs_Row2">
            <div className="hs_sh-sr">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Surveyor</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div> */}
          <div className="ad_flt-dt">
            <div className="ad_flt-dt-bx">
              <div className="input-group">
                <span className="input-group-text sc-icn" id="basic-addon1">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="date"
                  className="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Type to search..."
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* 
          <div className="ad__Row1">
            <div className="ad_Rem-sec">
              <div className="remark_sec remark_sec-g">
                <i className="fa-solid fa-check"></i>
                <span>{overViewData.Green}Booths</span>
              </div>
              <div className="remark_sec remark_sec-y">
                <i className="fa-solid fa-check"></i>
                <span>{overViewData.Yellow} Booths</span>
              </div>
              <div className="remark_sec remark_sec-r">
                <i className="fa-solid fa-xmark"></i>
                <span>{overViewData.Red}Booths</span>
              </div>
            </div>
          </div> */}

          <div className="ad__Row3">
            <div className="ad_Table-sec">
              <table className="table align-middle">
                <thead className="align-middle table-primary">
                  <tr className="align-middle">
                    <th scope="col">Assembly</th>
                    <th scope="col">Taluka</th>
                    <th scope="col">Booth</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {assemblyData === null ? (
                    <tr>
                      <td colSpan="4">
                        <ThreeCircles
                          visible={true}
                          height="100"
                          width="100"
                          color="#4fa94d"
                          ariaLabel="three-circles-loading"
                          wrapperStyle={{}}
                          wrapperClass="loader"
                        />
                      </td>
                    </tr>
                  ) : (
                    <>
                      {assemblyData.length > 0 ? (
                        assemblyData.map((item, index) => (
                          <tr
                            onClick={() => {
                              // console.log("Row clicked:", item);
                              setSelectedRow(item);
                            }}
                            key={index}
                            className="align-middle"
                          >
                            <td className="align-middle">{item.assembly}</td>
                            <td>{item.taluka}</td>
                            <td>{item.booth}</td>
                            <td>{getStatusIcon(item.booth_status)}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4">No data as per filter.</td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
      <MobileModal
        isOpen={isMobModalOpen}
        onClose={closeMobModal}
      ></MobileModal>
      {selectedRow && (
        <BoothModal
          selectedRow={selectedRow}
          onClose={() => {
            setSelectedRow(null);
          }}
        />
      )}
    </>
  );
};

export default History;
