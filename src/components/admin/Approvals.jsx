import React, { useState, useEffect } from 'react';
import MobHeader from "../header/MobHeader";
import { useMobHeaderContext } from '../../context/MobHeader';
import MobileModal from '../menu/MobileModal';

import BASEURL from '../../data/baseurl';

const Approvals = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();

    const [userList, setUserList] = useState('');

    const [selectedItem, setSelectedItem] = useState(null);
    const [serialNumber, setSerialNumber] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    // Function to handle input change and update filtered items
    const handleInputChange = (e) => {
        e.preventDefault();
        // const newSearchTerm = event.target.value.toLowerCase();
        // setSearchTerm(newSearchTerm);

        // const filtered = allItems.filter((item) =>
        //     item.toLowerCase().includes(newSearchTerm)
        // );

        // setFilteredItems(filtered);
    };


    const token = localStorage.getItem("accessToken");
    // console.log(token);

    const fetchUserList = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        try {
            const response = await fetch(`${BASEURL.url}/admin/getUsersList`, requestOptions);
            const data = await response.json();
            console.log("users", data);
            const users = data.data;
            setUserList(users);
            // handleUserList(users);
            // console.log(users)
        } catch (error) {
            console.log('error', error);
        }
    }


    const handleUserList = (data) => {
        if (data) {
            return data.map((item, index) => {
                const createdAtDate = new Date(item.createdAt);
                const serialNumber = index + 1;
                return (
                    <tr className='' key={item.id}>
                        <td className=''>{item.user_name}</td>
                        <td>{createdAtDate.toLocaleDateString()}</td>
                        <td>{item.phn_no}</td>
                        <td className=''>
                            <div className='sh_btn' onClick={() => handleViewDetails(item, serialNumber)}>
                                <button type="button" class="btn"
                                    data-bs-toggle="modal"
                                    //  data-bs-target={`#${item.user_name}`}
                                    data-bs-target="#exampleModal"
                                >
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </div>

                        </td>
                    </tr>
                )
            })
        }
    }

    const handleViewDetails = (data, serialNumber) => {
        setSelectedItem({ ...data, serialNumber });
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const handleAccept = () => {
        // Perform actions for Accept button
        console.log('Accept clicked');
        // Make a POST request with the necessary data (e.g., emailId and status 'v')
        // You can use fetch or any other library for making HTTP requests
        // Example:
        // fetch('your_api_url', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         emailId: selectedItem?.emailId,
        //         status: 'v',
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => console.log('Success:', data))
        // .catch(error => console.error('Error:', error));

        // Close the modal

        const token = localStorage.getItem("accessToken");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var raw = JSON.stringify({
            "emailId": selectedItem?.emailId,
            "status": "V"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASEURL.url}/admin/validateUser`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                fetchUserList(userList)
            }
            )
            .catch(error => console.log('error', error));

        closeModal();
    };


    const handleReject = () => {
        // Perform actions for Reject button
        console.log('Reject clicked');
        // Make a POST request with the necessary data (e.g., emailId and status 'r')
        // You can use fetch or any other library for making HTTP requests
        // Example:
        // fetch('your_api_url', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         emailId: selectedItem?.emailId,
        //         status: 'r',
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => console.log('Success:', data))
        // .catch(error => console.error('Error:', error));

        // Close the modal
        closeModal();
    };



    useEffect(() => {
        fetchUserList();
    }, [])

    return (
        <>
            <div className='pg__Wrap'>
                <MobHeader></MobHeader>
                <div className='approval__Sec'>
                    {/* <div className='app__Fil-s'>
                        <div className='app_Filter'>
                            <div className='app_S-box'>
                                <input className="form-control" id="" placeholder="Type to search..."
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='app_Dropdown'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div> */}
                    <div className='app_Row1'>
                        <div className='app_fl-dt'>
                            <div className='input-group'>
                                <span className="input-group-text sc-icn" id="basic-addon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                    type='date'
                                    className="form-control"
                                    list="datalistOptions"
                                    id="exampleDataList"
                                    placeholder="Type to search..." />
                            </div>
                        </div>
                        <div className='app_ref-btn'>
                            <button className='btn'>
                                <i className="fa-solid fa-rotate-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='app_Table'>
                        <table className="table align-middle">
                            <thead className='align-middle table-primary'>
                                <tr className='align-middle'>
                                    <th scope="col">Surveyor</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Phone no</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className='align-middle'>
                                {
                                    handleUserList(userList)
                                }
                                {/* <tr className='align-middle'>
                                    <td className='align-middle'>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td className='align-middle'>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td className='align-middle'>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Surveyor name</td>
                                    <td>11-01-2024</td>
                                    <td>9874561230</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>


            <div className="modal fade app_m-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    {selectedItem && (

                        <div className="modal-content">
                            <div className="modal-header">
                                <span className='ad_si-no'>{selectedItem?.serialNumber}</span>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className='ad_M-cnt'>
                                    <div className='ad_lst'>
                                        <span>Surveyor Name: {selectedItem.user_name}</span>
                                    </div>
                                    <div className='ad_lst'>
                                        <span>Date: {new Date(selectedItem.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className='ad_lst'>
                                        <span>Phone no: {selectedItem.phn_no}</span>
                                    </div>
                                    <div className='ad_lst'>
                                        <span>Address: {selectedItem.address}</span>
                                    </div>
                                    <div className='app_btn'>
                                        <button className='btn btn-success' onClick={handleAccept}>Accept</button>&nbsp;
                                        <button className='btn btn-danger' onClick={handleReject}>Reject</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* <span>Date: {new Date(selectedItem.createdAt).toLocaleDateString()}</span> */}


        </>
    )
}

export default Approvals