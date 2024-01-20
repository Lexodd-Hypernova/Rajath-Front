import React, { useState } from 'react';
import "./style.css";

import MobileModal from '../menu/MobileModal';
import MobHeader from '../header/MobHeader';
import { useMobHeaderContext } from '../../context/MobHeader';

const Admin = () => {
    // const [isMobModalOpen, setIsMobModalOpen] = useState(false);

    // filter

    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();

 

    // const openMobModal = () => {
    //     setIsMobModalOpen(true);
    //     // setModalContent(content);
    //     // document.body.style.overflow = 'hidden';
    // };

    // const closeMobModal = () => {
    //     setIsMobModalOpen(false);
    //     // if (!isModalOpen) {
    //     //     document.body.style.overflow = 'auto';
    //     // }
    //     // else if (isMobileMenuOpen && isModalOpen) {
    //     //     document.body.style.overflow = 'hidden';
    //     // }
    //     // else {
    //     //     document.body.style.overflow = 'auto';
    //     // }
    //     // setModalContent(null);
    // };


    return (
        <>
            <div className='pg__Wrap'>
                <div className='ad__Sec'>
                    {/* <div className='m_nav'>
                        <div className='m_logo'>
                            <img src="assets/images/logo-m.png" alt="logo" />
                        </div>
                        <div className='m_ham' onClick={openMobModal}>
                            <img src="assets/images/ham.png" alt="hamburger" />
                        </div>
                    </div> */}
                    <MobHeader></MobHeader>

                    <div className='ad_flt-dt'>
                        <div className='ad_flt-dt-bx'>
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
                    </div>

                    <div className='ad__Row1'>
                        <div className='ad_Rem-sec'>
                            <div className='remark_sec remark_sec-g'>
                                <i className="fa-solid fa-check"></i>
                                <span>250 Booths</span>
                            </div>
                            <div className='remark_sec remark_sec-y'>
                                <i className="fa-solid fa-check"></i>
                                <span>250 Booths</span>
                            </div>
                            <div className='remark_sec remark_sec-r'>
                                <i className="fa-solid fa-xmark"></i>
                                <span>250 Booths</span>
                            </div>
                        </div>
                    </div>


                    <div className='ad__Row2'>
                        <div className='ad_fl-sec'>
                            <div className='ad_filter'>
                                <span>Status Filter</span>
                                <div className='ad-filter-fm'>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Fill</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className='ref_Sec'>
                                <i className="fa-solid fa-rotate-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className='ad__Row3'>
                        <div className='ad_Table-sec'>
                            <table className="table align-middle">
                                <thead className='align-middle table-primary'>
                                    <tr className='align-middle'>
                                        <th scope="col">Surveyor</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Parliament</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='align-middle'>
                                    <tr className='align-middle'>
                                        <td className='align-middle'>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td className='align-middle'>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td className='align-middle'>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
                                        <td className='align-middle'>
                                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="fa-solid fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='align-middle'>
                                        <td>Surveyor name</td>
                                        <td>11-01-2024</td>
                                        <td>Parliament</td>
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
            </div>
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
            {/* Modal */}
            <div class="modal fade ad_m-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <span>Parliament : Parliament name</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Assembly : Assembly name</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Booth : Booth Address</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Committee Role : Booth Level Agent 1</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Booth status :</span>
                                    <span className='ad_lst-col'>  Filled</span>
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

export default Admin