import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Please be informed that this eCommerce website is only for display purposes. It means that no transactions or purchases can be made through this website. All products and prices are for illustration purposes only, and we do not guarantee their availability or accuracy.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            11591 Donna Lane, Garden Grove CA 92840
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 714-980-1652</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: frle@ucsd.edu</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Bathroom</span>
                    <span className="text">Kitchen</span>
                    <span className="text">Bedroom</span>
                    <span className="text">Accessories</span>
                    {/* <span className="text">Home Theatre</span> */}
                    {/* <span className="text">Projectors</span> */}
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        PROPLANET
                    </span>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;