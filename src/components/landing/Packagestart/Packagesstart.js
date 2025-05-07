import React from "react";
import "./packagesstart.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Navbar from "../header/Navbar";
const Packagesstart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <section className="packagesmainprnt">
        <div className="maincntconatiner">
          <div className="headercntpackages">
            <h3>Packages</h3>
            <p>
              Positive Energy For Your BusinessPositive Energy For Your
              BusinessPositive Energy{" "}
            </p>
          </div>
          <div className="packagesstartinput">
            <div className="firstinputpackeges">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10.8333 15.0001C11.4777 15.0001 12 14.4777 12 13.8334C12 13.1891 11.4777 12.6667 10.8333 12.6667C10.189 12.6667 9.66666 13.1891 9.66666 13.8334C9.66666 14.4777 10.189 15.0001 10.8333 15.0001Z"
                    fill="#282828"
                  />
                  <path
                    d="M5.50001 15.0001C6.14434 15.0001 6.66668 14.4777 6.66668 13.8334C6.66668 13.1891 6.14434 12.6667 5.50001 12.6667C4.85568 12.6667 4.33334 13.1891 4.33334 13.8334C4.33334 14.4777 4.85568 15.0001 5.50001 15.0001Z"
                    fill="#282828"
                  />
                  <path
                    d="M3.22666 2.62659L3.09333 4.25992C3.06666 4.57325 3.31333 4.83325 3.62666 4.83325H13.8333C14.1133 4.83325 14.3467 4.61992 14.3667 4.33992C14.4533 3.15992 13.5533 2.19992 12.3733 2.19992H4.18C4.11333 1.90659 3.98 1.62659 3.77333 1.39325C3.43999 1.03992 2.97333 0.833252 2.49333 0.833252H1.33333C1.05999 0.833252 0.833328 1.05992 0.833328 1.33325C0.833328 1.60659 1.05999 1.83325 1.33333 1.83325H2.49333C2.69999 1.83325 2.89333 1.91992 3.03333 2.06659C3.17333 2.21992 3.24 2.41992 3.22666 2.62659Z"
                    fill="#282828"
                  />
                  <path
                    d="M13.6733 5.83325H3.44666C3.16666 5.83325 2.93999 6.04658 2.91333 6.31992L2.67333 9.21992C2.57999 10.3599 3.47333 11.3333 4.61333 11.3333H12.0267C13.0267 11.3333 13.9067 10.5133 13.98 9.51325L14.2 6.39992C14.2267 6.09325 13.9867 5.83325 13.6733 5.83325Z"
                    fill="#282828"
                  />
                </svg>
                Checkout
              </h3>
              <div className="inputschldpackages">
                <input type="text" placeholder="Card number" />
                <div className="inputscnldss">
                  <input type="text" placeholder="Expiry date" />
                  <input type="text" placeholder="CVC/CVV" />
                </div>
                <input type="text" placeholder="Card holder name" />
              </div>
              <Button
                className="buynowmodal"
                variant="primary"
                
              >
                Buy now
              </Button>
            </div>
            <div className="secinputpackeges">
              <h3>Summary</h3>
              <div className="palnsdetailinput">
                <div className="planname">
                  <h6>Your plan</h6>
                  <h5>Standard</h5>
                </div>
                <div className="planname">
                  <h6>Charges</h6>
                  <h5>$19/ month</h5>
                </div>
                <p>Renewal at 2 August, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Packagesstart;
