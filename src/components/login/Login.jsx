import React from 'react';
import MobHeader from "../header/MobHeader";
import { useMobHeaderContext } from '../../context/MobHeader';
import MobileModal from '../menu/MobileModal';

const Login = () => {
  const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
  return (
    <>
      <div className='pg__Wrap'>
        <MobHeader></MobHeader>
        <div className='login__Sec'>
          <div className='act_Ttl'>
            <h3>Log in to your account</h3>
            <p>Welcome back! Please enter your details.</p>
          </div>
          <div className='act_Form'>
            <form>
              <div class="mb-3">
                <label for="sPhone" class="form-label">Phone No*</label>
                <input type="tel" class="form-control" id="sPhone" />
              </div>
              <div class="mb-3">
                <label for="sPassword" class="form-label">Password*</label>
                <input type="password" class="form-control" id="sPassword" />
              </div>
              <div className='mb-3'>
                <span className='frgt'>Forgot password?</span>
              </div>
              <div className='sbt_btn'>
                <button type="submit" class="btn btn-primary">Login</button>
                <span>Don’t have an account? <a>Sign up</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
    </>
  )
}

export default Login