import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <img src="./images/logo.svg" alt="logo" className="logo"/>
                <img src="./images/icon-facebook.svg" alt="facebook"/>
                <img src="./images/icon-youtube.svg" alt="youtube"/>
                <img src="./images/icon-twitter.svg" alt="twitter"/>
                <img src="./images/icon-pinterest.svg" alt="pinterset"/>
                <img src="./images/icon-instagram.svg" alt="instagram"/>
            </div>
            <div className="footer-data">
                <span> About Us</span>
                <span>Contact</span>
                <span>Blog</span>
                <span>Careers</span>
                <span>Support</span>
                <span>Privacy Policy</span>
            </div>
           <div className="request">
            <button>Request Invite</button>
            <span> © Easybank. All Rights Reserved</span>
           </div>
        </div>
    )
}
export default Footer