import React, { useState, useRef } from "react";
import "./authuntication.scss";
import { useRecoilValue } from "recoil";
import { signupEmailState } from "../atoms/context";
import Environment from "../../../utils/Enviroment";

const Authuntication = () => {
  const signupEmail = useRecoilValue(signupEmailState);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to store each digit
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    // Only allow digits (0-9)
    if (value === "" || /^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input if a digit was entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Move focus to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    // Check if all OTP digits are filled
    if (otp.some((digit) => digit === "")) {
      setError("Please enter all 6 digits");
      return;
    }

    const otpNumber = parseInt(otp.join(""), 10);

    try {
      setIsVerifying(true);
      setError(null);

      const response = await fetch(`${Environment}verify/otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          otpCode: otpNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed");
      }

      // Handle successful verification
      console.log("OTP verified successfully", data);
      // You might want to redirect or update state here
    } catch (err) {
      setError(err.message || "An error occurred during verification");
      console.error("Verification error:", err);
    } finally {
      setIsVerifying(false);
    }
  };

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
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="inputfieldotp"
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            {/* <button className="verificationbtn">Verify Ownership</button> */}

            <button
              className="verificationbtn"
              onClick={handleVerify}
              disabled={isVerifying}
            >
              {isVerifying ? "Verifying..." : "Verify Ownership"}
            </button>

            <h3 className="footerauth">
              Go back? <span>Sign In</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authuntication;
