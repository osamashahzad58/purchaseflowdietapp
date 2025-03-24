import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './signup.scss';
const Signup = () => {

  const [key, setKey] = useState('home');
  return (
    <>
      <section className='signupmain'>

        <div className="parentsignup">
          <img className='img-fluid imglogo' src="\assets\mainlogo.svg" alt="" />
          <div className="mainprnttabsdiv">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab className='tabdatamain' eventKey="home" title="Sign In">
                <div className="inputsignup">

                  <input type="Email" placeholder='Email' />
                  <input type="Password" placeholder='Password' />

                  <Link className='signinbtn' to="/packages">
                    Sign In
                  </Link>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Sign Up">
                <div className="inputsignup">
                  <input type="text" placeholder='Full Name' />

                  <input type="Email" placeholder='Email address' />
                  <input type="Password" placeholder='Password' />
                  <input type="Password" placeholder='Confirm Password' />
                  {/* <button className='signinbtn'>
                    
                  </button> */}
                  <Link className='signinbtn' to="/packages">
                    Go to About
                  </Link>
                </div>
              </Tab>

            </Tabs>
          </div>

        </div>

      </section>
    </>
  )
}

export default Signup