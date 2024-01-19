import React, { useState } from 'react';
import { useMobHeaderContext } from '../../context/MobHeader';
import "./mobHeader.css";

const MobHeader = () => {
    const { openMobModal } = useMobHeaderContext();
    return (
        <div className='m_nav'>
            <div className='m_logo'>
                <img src="assets/images/logo-m.png" alt="logo" />
            </div>
            <div className='m_ham' onClick={openMobModal}>
                <img src="assets/images/ham.png" alt="hamburger" />
            </div>
        </div>
    )
}

export default MobHeader