import React, { useState, useEffect } from 'react';
import "./pollingBooth.css";
import MobHeader from "../header/MobHeader";
import MobileModal from '../menu/MobileModal';
import { useMobHeaderContext } from '../../context/MobHeader';

import { useSearchParams } from 'react-router-dom';

const PollingBooth = () => {
    const { isMobModalOpen, closeMobModal } = useMobHeaderContext();
    let [searchParams] = useSearchParams();

    const [pollingBooths, setPollingBooths] = useState('');
    const [totalBooths, setTotalBooths] = useState('');


    // Token
    const token = localStorage.getItem("accessToken");

    // queryParam
    const assembly = searchParams.get('assembly');
    const taluka = searchParams.get('taluka');

    useEffect(() => {
        const getPollingBooths = async () => {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`)
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            try {
                const response = await fetch(`http://13.235.80.103:5200/auth/getBoothsByAT?assembly=${assembly}&taluka=${taluka}`, requestOptions);
                const data = await response.json();
                const pollingBoothsData = data.data.booths;
                const totalBooths = pollingBoothsData.length;
                // console.log("pollingBoothsData", pollingBoothsData);
                setPollingBooths(pollingBoothsData);
                setTotalBooths(totalBooths);
                // const users = data.data;
                // setUserList(users);
                // handleUserList(users);
                // console.log(users)
            } catch (error) {
                console.log('error', error);
            }
        }
        getPollingBooths()
    }, [])


    const veiwPollingBooths = (data) => {
        if (data) {
            return data.map((item, index) => {
                return (
                    <li key={index}>
                        <span>
                            {item.boothName}
                        </span>
                        {renderStatusIcon(item.status)}
                    </li>
                )
            })
        }
    }

    const renderStatusIcon = (status) => {
        switch (status) {
            case "RED":
                return <span className='sr-red'><i className="fa-solid fa-xmark"></i></span>;
            case "YELLOW":
                return <span className='sr-yellow'><i className="fa-solid fa-check"></i></span>;
            case "GREEN":
                return <span className='sr-green'><i className="fa-solid fa-check"></i></span>;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='pg__Wrap'>
                <MobHeader></MobHeader>
                <div className='pl_Bth-sec'>


                    <div className='pl_booths-info'>
                        <div className='pl-bt-in-row1'>
                            <span>List of Polling booths in {taluka}</span>
                        </div>
                        <div className='pl-bt-in-row2'>
                            <span>No of poling booths - {totalBooths}</span>
                        </div>
                        <div className='pl-bt-in-row3'>
                            <div className='pl_bths-sts-m'>
                                <span>poling booths status</span>
                            </div>
                            <div className='pl_Rem-sec'>
                                <div className='pl-remark_sec pl-remark_sec-g'>
                                    <i className="fa-solid fa-check"></i>
                                    <span>250</span>
                                </div>
                                <div className='pl-remark_sec pl-remark_sec-y'>
                                    <i className="fa-solid fa-check"></i>
                                    <span>250</span>
                                </div>
                                <div className='pl-remark_sec pl-remark_sec-r'>
                                    <i className="fa-solid fa-xmark"></i>
                                    <span>250</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pl_Booths-table'>
                        <div className='pl_booths-ttl'>
                            <div className='pl_Bt-nm'>
                                <span>Booth</span>
                            </div>
                            <div className='pl_Bt-sts'>
                                <span>Status</span>
                            </div>
                        </div>
                        <div className='pl__Bt-data-lst'>
                            <ul>
                                {
                                    veiwPollingBooths(pollingBooths)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal>
        </>
    )
}

export default PollingBooth