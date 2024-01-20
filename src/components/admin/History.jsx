import React from 'react';
import MobHeader from "../header/MobHeader";
import { useMobHeaderContext } from '../../context/MobHeader';
import MobileModal from '../menu/MobileModal';

const History = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
    return (
        <>
            <div className='pg__Wrap'>
                <MobHeader></MobHeader>
                <div className='hs__Sec-wrap'>
                    <div className='his__Sort'>
                        <div className='hs_Row1'>
                            <div className='hs_sh-p'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='hs_sh-as'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='hs_Row2'>
                            <div className='hs_sh-bt'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='hs_sh-sr'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='hs_Row3'>
                            <div className='hs_Fl-s'>
                                <div className='hs_s-f'>
                                    <span>Status Filter</span>
                                    <div className='hs_fl-bx'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='hs_rf-btn'>
                                    <button className='btn'>
                                        <i className="fa-solid fa-rotate-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hs_Table'>
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
                                    <td className='align-middle'>Jacob Thornton</td>
                                    <td>11-01-2024</td>
                                    <td>Parliament</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Jacob Thornton</td>
                                    <td>11-01-2024</td>
                                    <td>Parliament</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>Jacob Thornton</td>
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
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>

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
                                    <span>Volunteer Name:xxxxx</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Volunteer contact no:xxxxxxxxxx</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Volunteer email id: xxxxx@gmail.id</span>
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

export default History