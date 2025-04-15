import React from "react";
import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import "./signup.scss";
import Environment from "../../../utils/Enviroment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // New states for signup
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");

  const [key, setKey] = useState("home");

  const history = useHistory();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(`${Environment?.API_URL}client/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data?.token);
        localStorage?.setItem("token", data?.token);

        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });
        // Navigate to dashboard on successful login
        history.push("/packages");
      } else {
        const errorData = await response.json();
        toast.error(
          errorData || "Login failed! Please check your credentials.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    // if (signupPassword !== confirmPassword) {
    //   toast.error("Passwords don't match!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    //   setLoading(false);
    //   return;
    // }

    try {
      const response = await fetch(`${Environment?.API_URL}client/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          password: signupPassword,
          full_name: fullName,
          gender: gender,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Signup successful! Please login.", {
          position: "top-right",
          autoClose: 3000,
        });
        // Switch to login tab after successful signup
        setKey("home");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Signup failed! Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="signupmain">
        <div className="parentsignup">
          <img
            className="img-fluid imglogo"
            src="\assets\mainlogo.svg"
            alt=""
          />
          <div className="mainprnttabsdiv">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab className="tabdatamain" eventKey="home" title="Sign In">
                <div className="inputsignup">
                  <input
                    type="Email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    className="signinbtn"
                    onClick={handleLogin}
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Sign Up">
                <div className="inputsignup" style={{ fontWeight: "bolder" }}>
                  {/* <input type="text" placeholder="Full Name" />

                  <input type="Email" placeholder="Email address"  />
                  <input type="Password" placeholder="Password" />
                  <input type="Password" placeholder="Confirm Password" /> */}

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />

                  <input
                    type="Email"
                    placeholder="Email address"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />

                  <button
                    className="signinbtn"
                    onClick={handleSignup}
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
                  </button>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
