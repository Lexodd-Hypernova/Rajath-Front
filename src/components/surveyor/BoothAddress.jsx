import React, { useState, useEffect } from 'react';
import "./pollingBooth.css";
import MobHeader from "../header/MobHeader";
import MobileModal from '../menu/MobileModal';
import { useMobHeaderContext } from '../../context/MobHeader';

import { Link, useSearchParams } from 'react-router-dom';


const BoothAddress = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
    let [searchParams] = useSearchParams();

    const [boothData, setBoothData] = useState('');
    const [boothAddress, setBoothAddress] = useState('');


    // Token
    const token = localStorage.getItem("accessToken");


    // queryParam
    const assembly = searchParams.get('assembly');
    const taluka = searchParams.get('taluka');
    const booth = searchParams.get('booth');

    useEffect(() => {

        const getBoothDetailsByATB = async () => {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            try {
                const response = await fetch(`http://13.235.80.103:5200/auth/getBoothDetailsByATB?assembly=${assembly}&taluka=${taluka}&booth=${booth}`, requestOptions)
                const data = await response.json();
                const boothData = data.data;
                const boothAddress = boothData.address;
                // const totalBooths = pollingBoothsData.length;
                console.log("boothData", boothData);
                console.log("boothAddress", boothAddress);
                setBoothData(boothData);
                setBoothAddress(boothAddress);
                // setTotalBooths(totalBooths);
                // const users = data.data;
                // setUserList(users);
                // handleUserList(users);
                // console.log(users)
            } catch (error) {
                console.log('error', error);
            }
        }
        getBoothDetailsByATB();

    }, [])


    return (
        <>
            <div className='pg__Wrap'>
                <MobHeader></MobHeader>
                <div className='booth__Ad-sec'>
                    <div className='bt_Top-ad'>
                        <span>
                            {boothAddress}
                        </span>
                    </div>
                    <div className='bt_Category-table'>
                        <div className='bt_ad-top-hd'>
                            <span>Category</span>
                            <span>Status</span>
                        </div>
                        <div className='bt_cat-data'>
                            <ul>
                                <li>
                                    <span>President</span>
                                    <span>
                                        {
                                            boothData.PRESIDENT === "FILLED" ?
                                                (
                                                    <span className='bt_prs-filled'>Filled</span>
                                                ) :
                                                (
                                                    <Link to={`/onboard/PRESIDENT?assembly=${assembly}&taluka=${taluka}&booth=${booth}&boothAddress=${boothAddress}`} className='btn_cr'>Create</Link>
                                                )
                                        }
                                    </span>
                                </li>
                                <li>
                                    <span>BLA 1</span>
                                    <span>
                                        {
                                            boothData.BLA1 === "FILLED" ?
                                                (
                                                    <span className='bt_prs-filled'>Filled</span>
                                                ) :
                                                (
                                                    <Link to={`/onboard/BLA1?assembly=${assembly}&taluka=${taluka}&booth=${booth}&boothAddress=${boothAddress}`} className='btn_cr'>Create</Link>
                                                )
                                        }
                                    </span>
                                </li>
                                <li>
                                    <span>BLA 2</span>
                                    <span>
                                        {
                                            boothData.BLA2 === "FILLED" ?
                                                (
                                                    <span className='bt_prs-filled'>Filled</span>
                                                ) :
                                                (
                                                    <Link to={`/onboard/BLA2?assembly=${assembly}&taluka=${taluka}&booth=${booth}&boothAddress=${boothAddress}`} className='btn_cr'>Create</Link>
                                                )
                                        }
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='bt_Add-vol'>
                            <Link to={`/onboard/VOLUNTEER?assembly=${assembly}&taluka=${taluka}&booth=${booth}&boothAddress=${boothAddress}`}>
                                <span className='bt_vol-txt'>Add Volunteer</span>
                                <span className='bt_vol_icn'><i class="fa-solid fa-plus"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sr_back-btn'>
                    <Link to={`/polling-booths?assembly=${assembly}&taluka=${taluka}`}>Back</Link>
                </div>
            </div>
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
        </>
    )
}

export default BoothAddress