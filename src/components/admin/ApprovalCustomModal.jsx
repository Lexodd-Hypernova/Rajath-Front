import React from 'react';
import BASEURL from '../../data/baseurl';

const ApprovalCustomModal = ({ isOpen, onClose, data, fetchUserList }) => {

    if (!isOpen || !data) {
        return null;
    }

    const handleAccept = () => {
        // Perform actions for Accept button
        console.log('Accept clicked');

        const token = localStorage.getItem("accessToken");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var raw = JSON.stringify({
            "emailId": data?.emailId,
            "status": "V"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASEURL.url}/admin/validateUser`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("modal", result)
                // fetchUserList(userList)
            }
            )
            .catch(error => console.log('error', error));

        onClose();
        // fetchUserList();

        // closeModal();
    };

    const handleReject = () => {
        // Perform actions for Reject button
        console.log('Reject clicked');
        // closeModal();
    };


    return (
        <>
            {isOpen && (
                <div className="custom-modal-overlay">
                    <div className="custom-modal">
                        <div className="modal-header">
                            <h2>Details</h2>
                            <button className='btn' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body-h">

                            <div className='prof_img-ap'>
                                <img src={data.photo_url} alt="" />
                            </div>
                            {/* Display details from 'data' prop */}
                            <p>Surveyor Name : {data.surveyor_name}</p>
                            <p>Phone no: {data.phn_no}</p>
                            <p>Email ID: {data.emailId}</p>
                            <p>Address: {data.address}</p>
                            {/* Add more details as needed */}

                            <div className='app__Btns'>
                                <button className='btn btn-success' onClick={handleAccept}>Accept</button>&nbsp;
                                <button className='btn btn-danger' onClick={handleReject}>Reject</button>
                            </div>
                        </div>
                        {/* Add additional modal content or buttons as needed */}
                    </div>
                </div>
            )}
        </>
    )
}

export default ApprovalCustomModal