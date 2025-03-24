import React from 'react'
import './packages.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../header/Navbar';
import { Link } from 'react-router-dom';


const Packages = () => {

    return (
        <>
                
               <Navbar/>
            <section className='packagesmainprnt'>
                <div className="maincntconatiner">
                    <div className="headercntpackages">
                        <h3>
                            Packages
                        </h3>
                        <p>Positive Energy For Your BusinessPositive Energy For Your BusinessPositive Energy </p>
                    </div>
                    <div className="cardpackages">
                        <div className="cardone">
                            <div className="headercardone">
                                <div className="headerstylecardone">
                                    <h6>STARTER</h6>
                                    <h3> <sub className="firstprice">
                                        $</sub>19 <sub className='secpricesub'>/ month</sub></h3>
                                    <p>billed monthly</p>
                                </div>
                                <div className="cntmaincardone">
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                </div>
                                <div className="btncardonemain">
                                    <h4>3.995$<span>/3.995$</span></h4>
                                    <Link className='packagesstartbtn' to={"/packagesstart"} >Start Now</Link>
                                </div>

                            </div>
                        </div>
                        <div className="cardone">
                            <div className="headercardone">
                                <div className="headerstylecardone">
                                    <h6>Standard</h6>
                                    <h3> <sub className="firstprice">
                                        $</sub>19 <sub className='secpricesub'>/month</sub></h3>
                                    <p>billed monthly</p>
                                </div>
                                <div className="cntmaincardone">
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                </div>
                                <div className="btncardonemain">
                                    <h4>3.995$<span>/3.995$</span></h4>
                                    <Link className='packagesstartbtn' to={"/packagesstart"} >Start Now</Link>
                                </div>

                            </div>
                        </div>
                        <div className="cardone">
                            <div className="headercardone">
                                <div className="headerstylecardone">
                                    <h6>Vip</h6>
                                    <h3> <sub className="firstprice">
                                        $</sub>19 <sub className='secpricesub'>/ month</sub></h3>
                                    <p>billed monthly</p>
                                </div>
                                <div className="cntmaincardone">
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                    <h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                                            <path d="M8 11.33L10.83 14.16L16.5 8.5" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        All basic Services
                                    </h2>
                                </div>
                                <div className="btncardonemain">
                                    <h4>3.995$<span>/3.995$</span></h4>
                                    <Link className='packagesstartbtn' to={"/packagesstart"} >Start Now</Link>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
              
           
        </>
    )
}

export default Packages