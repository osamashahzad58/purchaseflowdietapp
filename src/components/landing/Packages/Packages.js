import React from "react";
import "./packages.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navbar from "../header/Navbar";
import { Link } from "react-router-dom";
import Environment from "../../../utils/Enviroment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Packages = () => {
  const [loading, setLoading] = useState(false);

  const handleStartNow = async (plan) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${Environment?.API_URL}client/create-checkout-session?plan=${plan}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Redirect to the Stripe checkout URL
        window.location.href = data.url;
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to create checkout session");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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
          <div className="cardpackages">
            <div className="cardone">
              <div className="headercardone">
                <div className="headerstylecardone">
                  <h6>STARTER</h6>
                  <h3>
                    {" "}
                    <sub className="firstprice">$</sub>19{" "}
                    <sub className="secpricesub">/ month</sub>
                  </h3>
                  <p>billed monthly</p>
                </div>
                <div className="cntmaincardone">
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                </div>
                <div className="btncardonemain">
                  <h4>
                    3.995$<span>/3.995$</span>
                  </h4>
                  <button
                    className="packagesstartbtn"
                    onClick={() => handleStartNow("Starter")}
                    disabled={loading}
                  >
                    {" "}
                    Start Now{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="cardone">
              <div className="headercardone">
                <div className="headerstylecardone">
                  <h6>Standard</h6>
                  <h3>
                    {" "}
                    <sub className="firstprice">$</sub>19{" "}
                    <sub className="secpricesub">/month</sub>
                  </h3>
                  <p>billed monthly</p>
                </div>
                <div className="cntmaincardone">
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                </div>
                <div className="btncardonemain">
                  <h4>
                    3.995$<span>/3.995$</span>
                  </h4>

                  <button
                    className="packagesstartbtn"
                    onClick={() => handleStartNow("Standard")}
                    disabled={loading}
                  >
                    {" "}
                    Start Now{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="cardone">
              <div className="headercardone">
                <div className="headerstylecardone">
                  <h6>Vip</h6>
                  <h3>
                    {" "}
                    <sub className="firstprice">$</sub>19{" "}
                    <sub className="secpricesub">/ month</sub>
                  </h3>
                  <p>billed monthly</p>
                </div>
                <div className="cntmaincardone">
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                    >
                      <path
                        d="M8 11.33L10.83 14.16L16.5 8.5"
                        stroke="#949494"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    All basic Services
                  </h2>
                </div>
                <div className="btncardonemain">
                  <h4>
                    3.995$<span>/3.995$</span>
                  </h4>

                  <button
                    className="packagesstartbtn"
                    onClick={() => handleStartNow("Pro")}
                    disabled={loading}
                  >
                    {" "}
                    Start Now{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
