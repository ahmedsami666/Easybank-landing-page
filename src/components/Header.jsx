import React from "react";

const Header = () => {
    return (
        <div className="header">
            <img src="./images/logo.svg" alt="logo"/>
            <div>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
                <span>Blog</span>
                <span>Careers</span>
            </div>
            <button>Request Invite</button>   
        </div>
    )
}
export default Header