import React from 'react';
import "./style.css";
import MobHeader from "../header/MobHeader";
import MobileModal from '../menu/MobileModal';
import { useMobHeaderContext } from '../../context/MobHeader';

const Surveyor = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
    return (
        <>
            <div className='pg__Wrap'>
                <MobHeader></MobHeader>
                <div className='sur__Sec-wrap'>
                    <div className='sur_srt-sec'>
                        <div className='sur_Row1'>
                            <div className='sur_sc-dt'>
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
                            <div className='sur_ref-btn'>
                                <button className='btn'>
                                    <i className="fa-solid fa-rotate-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className='sur_Row2'>
                            <div className='sur_pr'>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                        <li><a className="dropdown-item" >Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='sur_as'>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                        <li><a className="dropdown-item" >Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='sur_Row3'>
                            <div className='sur_bt'>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                        <li><a className="dropdown-item" >Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='sur_Row4'>
                            <div className='sur_add-vl'>
                                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addVolModal">
                                    Add volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='sur__Table'>
                        <table className="table align-middle">
                            <thead className='align-middle table-primary'>
                                <tr className='align-middle'>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Parliament</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Committee category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className='align-middle'>
                                <tr className='align-middle'>
                                    <td>01</td>
                                    <td className='align-middle'>Jacob Thornton</td>
                                    <td>11-01-2024</td>
                                    <td>Booth level Agent 1</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>02</td>
                                    <td>Jacob Thornton</td>
                                    <td>11-01-2024</td>
                                    <td>Booth level Agent 1</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className='align-middle'>
                                    <td>03</td>
                                    <td>Jacob Thornton</td>
                                    <td>11-01-2024</td>
                                    <td>Booth level Agent 1</td>
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
            <div class="modal fade sur_m-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <span>Parliament: Parliament name</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Assembly: Assembly name</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Booth : Booth Address</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Volunteer  Name : Name</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Phone no : xxxxxxxxxx</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Email ID : xxxxx@gmail.com</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Gender : M</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>House no : H-G1</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Occupation : Teacher</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Caste : Agri</span>
                                </div>
                                <div className='ad_lst'>
                                    <span>Committee Role : Booth Level Agent 1</span>
                                </div>
                                <div className='sur_vl-btn'>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#surEditModal">Edit</button>
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




            {/* edit modal */}

            <div class="modal fade sur_edit-modal" id="surEditModal" tabindex="-1" aria-labelledby="surEditModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            {/* <span className='ad_si-no'>01</span> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='sur_m-cnt'>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Parliament
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Assembly
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Booth
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Booth Address
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Volunteer  Name
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Phone No
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type='tel' class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Email ID
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type='email' class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Gender
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        House no
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Age
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Caste
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Occupation
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Degination
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_vl-btn'>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-success">Save</button>
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



            {/* add volunteer modal */}

            <div class="modal fade sur_edit-modal" id="addVolModal" tabindex="-1" aria-labelledby="addVolModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            {/* <span className='ad_si-no'>01</span> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='sur_addVl-cnt'>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Parliament
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Assembly
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Booth
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Booth Address
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Volunteer  Name
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Phone No
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type='tel' class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Email ID
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type='email' class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Gender
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Age
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Caste
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Occupation
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        House no
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="text" class="form-control" id="" aria-describedby=""></input>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Address
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <textarea class="form-control" id="" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Degination
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='sur_input-box'>
                                    <span className='sr_ed-inp-n'>
                                        Upload Image
                                    </span>
                                    <div className='sr_ed-inp-fld'>
                                        <input type="file" class="form-control" id="" />
                                    </div>
                                </div>
                                <div className='sur_vl-btn'>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>&nbsp;&nbsp;&nbsp;
                                    <button type="button" class="btn btn-success">Submit</button>
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

export default Surveyor