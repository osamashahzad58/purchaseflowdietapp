import React from 'react'
import './authuntication.scss'

const Authuntication = () => {
    return (
        <>
            <section className="authprnt">
                <div className="parentsignup">
                    <img
                        className="img-fluid imglogo"
                        src="\assets\mainlogo.svg"
                        alt=""
                    />
                    <div className="mainprnttabsdiv">

                      
                            <h2>OTP Code</h2>
                            <p>We have sent the verification code to your email address</p>
                            <div className="inputotp">
                                <input className='inputfieldotp' type="text" />
                                <input className='inputfieldotp' type="text" />
                                <input className='inputfieldotp' type="text" />
                                <input className='inputfieldotp' type="text" />
                                <input className='inputfieldotp' type="text" />
                                <input className='inputfieldotp' type="text" />
                            </div>
                            <button className='verificationbtn'>Verify Ownership</button>
                           
                                <h3 className='footerauth'>Go back? <span>Sign In</span></h3>
                            
                    

                    </div>
                </div>
            </section>

        </>
    )
}

export default Authuntication