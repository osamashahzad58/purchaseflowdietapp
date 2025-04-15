import React from "react";
import useWindowDimensions from "./getDimensions";
// import loaderImg from '../assets/loaderImg.svg';

const Loader = ({ text }) => {
    const { width } = useWindowDimensions();

    return (
        <>
            <div className="">
                <div
                    className="position-fixed w-100"
                    style={{
                        zIndex: 1100,
                        // marginTop: -200,
                        top: 0,
                        height: "135%",
                        marginLeft: width > 992 ? 0 : 0,
                        background: "rgba(0, 0, 0, 0.6)",
                        webkitBackdropFilter: "blur(6px)",
                        backdropFilter: "blur(6px)",
                        left: 0
                    }}
                >
                    <div className="vh-100 d-flex align-items-center justify-content-center">
                        <div className="d-flex flex-wrap align-items-center justify-content-center">
                            {/* <img width={150} src={loaderImg} alt="loader" /> */}
                            <div className="image-container">
                                {
                                    text ?
                                        <p className="text-white" style={{ fontWeight: '500', marginTop: "10px", textAlign: "center" }}>
                                            {text}
                                        </p>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Loader;