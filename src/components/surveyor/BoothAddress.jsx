import React, { useState, useEffect } from 'react';
import "./pollingBooth.css";
import MobHeader from "../header/MobHeader";
import MobileModal from '../menu/MobileModal';
import { useMobHeaderContext } from '../../context/MobHeader';

import { useSearchParams } from 'react-router-dom';


const BoothAddress = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
    let [searchParams] = useSearchParams();
    return (
        <>
            <div className='pg__Wrap'>
                <MobHeader></MobHeader>
            </div>
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
        </>
    )
}

export default BoothAddress