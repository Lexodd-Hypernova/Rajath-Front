import React, { useEffect } from "react";
import "./mobileModal.css";

import { Link } from "react-router-dom";




const MobileModal = ({ isOpen, onClose }) => {
    // useEffect(() => {
    //     const initializeCursor = () => {
    //         const links = document.querySelectorAll('a');
    //         const cursor = document.querySelector('[data-cursor="1"]');

    //         links.forEach(link => {
    //             link.addEventListener('mouseenter', () => {
    //                 cursor.classList.add('cursor-hover--a');
    //             });

    //             link.addEventListener('mouseleave', () => {
    //                 cursor.classList.remove('cursor-hover--a');
    //             });
    //         });
    //     };

    //     initializeCursor();

    //     // Clean up event listeners when the component unmounts
    //     return () => {
    //         const links = document.querySelectorAll('a');

    //         links.forEach(link => {
    //             link.removeEventListener('mouseenter', () => { });
    //             link.removeEventListener('mouseleave', () => { });
    //         });
    //     };
    // }, []);

    const role_type = localStorage.getItem("role_type");

    return (
        <>
            <div className={`mob-modal ${isOpen ? "open" : ""}`}>
                <div className="mob-modal-content">

                    <div className="mob-menu_Md-wrap">
                        <div className="mob-mn_Cnt-bx">
                            <div className="mob-mn_Main-cnt">
                                <div className="mob-mn_Col1">
                                    <div className="mob-mn_Ttl-icn">

                                        {/* <Link href="/" onClick={onClose}><Image src="/assets/images/menu-logo.svg" alt='project-d' width={400} height={56}></Image></Link> */}
                                        <a href="/" className="mob-menu_Modal-logo" onClick={onClose}>
                                            <img src="/assets/images/logo.png" alt="logo"></img>
                                        </a>
                                        <span>
                                            Super Admin
                                        </span>

                                    </div>
                                    {/* <div className="mn_Cnt-us">
                                        <a href="" onClick={onClose}>Contact BE <i className="fa-solid fa-arrow-right"></i></a>
                                    </div> */}
                                </div>
                                <div className="mob-mn_Col2">
                                    <ul>
                                        <li>
                                            {
                                                role_type === "SUPER ADMIN" ? (
                                                    <Link to="/admin/dashboard" onClick={onClose}>
                                                        Dashboard
                                                    </Link>
                                                ) : (
                                                    <Link to="/surveyor/dashboard" onClick={onClose}>
                                                        Dashboard
                                                    </Link>
                                                )
                                            }

                                        </li>
                                        <li>

                                            {
                                                role_type === "SUPER ADMIN" ? (
                                                    <Link to="/admin/approvals" onClick={onClose}>
                                                        Approvals
                                                    </Link>
                                                ) : (
                                                    ""
                                                )
                                            }

                                        </li>
                                        <li>

                                            {
                                                role_type === "SUPER ADMIN" ? (
                                                    <Link to="/admin/history" onClick={onClose}>
                                                        History
                                                    </Link>
                                                ) : (
                                                    ""
                                                )
                                            }

                                        </li>
                                    </ul>
                                    <button>
                                        Logout
                                    </button>
                                </div>
                            </div>
                            <button className="mob-mn_Cl-icn" onClick={onClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>
        </>
    );
};

export default MobileModal;
