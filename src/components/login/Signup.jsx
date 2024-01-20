import React from 'react';
import MobHeader from "../header/MobHeader";
import { useMobHeaderContext } from '../../context/MobHeader';
import MobileModal from '../menu/MobileModal';

import "./style.css";

const Signup = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
    return (
        <>
            <div className='pg__Wrap'>
                <MobHeader></MobHeader>
                <div className='signup__Wrap'>
                    <div className='act_Ttl'>
                        <h3>Create an account</h3>
                    </div>
                    <div className='act_Form'>
                        <form>
                            <div class="mb-3">
                                <label for="sName" class="form-label">Name*</label>
                                <input type="text" class="form-control" id="sName" />

                            </div>
                            <div class="mb-3">
                                <label for="sEmail" class="form-label">Email ID*</label>
                                <input type="email" class="form-control" id="sEmail" />
                            </div>
                            <div class="mb-3">
                                <label for="sPhone" class="form-label">Phone No*</label>
                                <input type="tel" class="form-control" id="sPhone" />
                            </div>
                            <div class="mb-3">
                                <label for="sAddress" class="form-label">Home Address*</label>
                                <input type="text" class="form-control" id="sAddress" />
                            </div>
                            <div class="mb-3">
                                <label for="sPassword" class="form-label">Password*</label>
                                <input type="password" class="form-control" id="sPassword" />
                            </div>
                            <div class="mb-3">
                                <label for="sCPassword" class="form-label">Conform Password*</label>
                                <input type="password" class="form-control" id="sCPassword" />
                            </div>
                            <div class="mb-3">
                                <label for="sFile" class="form-label">Upload Image</label>
                                <input type="file" class="form-control" id="sFile" />
                            </div>

                            <div className='sbt_btn'>
                                <button type="submit" class="btn btn-primary">Get Start</button>
                                <span>Already have an account? <a>Log in</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
        </>
    )
}

export default Signup