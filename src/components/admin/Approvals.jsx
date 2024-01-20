import React, { useState } from 'react';
import MobHeader from "../header/MobHeader";
import { useMobHeaderContext } from '../../context/MobHeader';
import MobileModal from '../menu/MobileModal';

const Approvals = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();

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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
            <div class="modal fade app_m-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            <span className='ad_si-no'>01</span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='ad_M-cnt'>
                                <div className='ad_lst'>
                                    <span>Surveyor Name : Name</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Date : 11-01-2024</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Phone no : 9874561230</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Booth : Booth Address</span>
                                </div>
                                <div className='app_btn'>
                                    <button className='btn btn-success'>Accept</button>&nbsp;
                                    <button className='btn btn-danger'>Reject</button>
                                </div>
                            </div>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Approvals