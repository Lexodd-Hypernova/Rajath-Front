import React from 'react';
import "./style.css";
import MobHeader from "../header/MobHeader";
import MobileModal from '../menu/MobileModal';
import { useMobHeaderContext } from '../../context/MobHeader';

const SurHistory = () => {
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
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Parliament</button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" >Parliament1</a></li>
                    <li><a className="dropdown-item" >Parliament2</a></li>
                    <li><a className="dropdown-item" >Parliament3</a></li>
                    <li><a className="dropdown-item" >Parliament4</a></li>
                  </ul>
                </div>
              </div>
              <div className='sur_as'>
                <div className="input-group">
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Assembly</button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" >Assembly1</a></li>
                    <li><a className="dropdown-item" >Assembly2</a></li>
                    <li><a className="dropdown-item" >Assembly3</a></li>
                    <li><a className="dropdown-item" >Assembly4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='sur_Row3'>
              <div className='sur_bt'>
                <div className="input-group">
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Booth</button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" >Booth1</a></li>
                    <li><a className="dropdown-item" >Booth2</a></li>
                    <li><a className="dropdown-item" >Booth3</a></li>
                    <li><a className="dropdown-item" >Booth4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className='sur_Row4'>
              <div className='sur_add-vl'>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addVolModal">
                  Add volunteer
                </button>
              </div>
            </div> */}
          </div>
          <div className='sur__Table'>
            <table className="table">
              <thead className='table-primary'>
                <tr className=''>
                  <th scope="col">Assembly</th>
                  <th scope="col">Thaluka</th>
                  <th scope="col">Booth</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className=''>
                <tr className=''>
                  <td>Assembly</td>
                  <td>Thaluka</td>
                  <td>Booth</td>
                  <td className=''>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#surEditModal">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr className=''>
                  <td>Assembly</td>
                  <td>Thaluka</td>
                  <td>Booth</td>
                  <td className=''>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#surEditModal">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr className=''>
                  <td>Assembly</td>
                  <td>Thaluka</td>
                  <td>Booth</td>
                  <td className=''>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#surEditModal">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr className=''>
                  <td>Assembly</td>
                  <td>Thaluka</td>
                  <td>Booth</td>
                  <td className=''>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#surEditModal">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr className=''>
                  <td>Assembly</td>
                  <td>Thaluka</td>
                  <td>Booth</td>
                  <td className=''>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#surEditModal">
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
      <div class="modal fade sur_edit-modal" id="surEditModal" tabindex="-1" aria-labelledby="surEditModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h1 class="modal-title fs-5" id="surEditModalLabel">Modal title</h1> */}
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
                      <option selected>Select Parliament</option>
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
                      <option selected>Select Assembly</option>
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
                      <option selected>Select Booth</option>
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
                      <option selected>Male</option>
                      <option value="1">Female</option>
                      <option value="2">Others</option>
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
                      <option selected>Select Role</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className='sur_vl-btn'>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>&nbsp;&nbsp;&nbsp;
                  <button type="button" class="btn btn-success">Edit</button>
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

export default SurHistory;