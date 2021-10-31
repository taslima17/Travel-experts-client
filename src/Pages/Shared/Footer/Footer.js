import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="p-5 mt-5 d-flex flex-lg-nowrap flex-wrap bg-dark text-white  justify-content-around">
            <div>
                <h1 className="logo text-white ">Travel <span>Experts</span></h1>
                <div className="icon">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
            </div>
            <div>
                <div>
                    <h5>Support</h5>
                    <li>
                        Policy
                    </li>
                    <li>Get Help</li>
                    <li>FAQs</li>
                    <li>Join as a Trip Designer</li>
                </div>
                <div>
                    <h5>Legal</h5>
                    <li>Terms Of Use</li>
                    <li>Privacy and Cookies Statement</li>
                    <li>Copy Right Policy</li>
                    <li>Community Guideline</li>
                    <li></li>
                </div>
            </div>

        </div>
    );
};

export default Footer;