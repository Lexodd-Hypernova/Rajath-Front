import React from 'react';
import "./style.css";

const Surveyor = () => {
    return (
        <>
            <div className='page__Wrap'>
                <div className='su__Sec'>
                    <div className='header__Wrap'>
                        <div className='hd_Sec'>
                            <div className='logo_Div'>
                                <div className='logo'>
                                    <img src='assets/images/logo.png'></img>
                                </div>
                                <div className='hd_ttl'>
                                    <span>Surveyor</span>
                                </div>
                            </div>
                            <div className='sd_Nav'>
                                <div className='sd_Nav-top'>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    Dashboard
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className='sd_Nav-btm'>
                                    <button>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container__Wrap'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Surveyor