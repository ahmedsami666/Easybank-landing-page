import React from "react";

const Intro = () => {
    return (
        <div  className="intro">
            <div className="intro-data">
                <h1>
                    Next generation digital banking
                </h1>
                <p>
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <button>Request Invite</button>
            </div>
            <div className="mockups">
                <img src="./images/image-mockups1.png" className="mockup-img img1" alt="img"/>
                <img src="./images/image-mockups2.png" className="mockup-img img2" alt="img"/>
                <img src="./images/image-mockups3.png" className="mockup-img img3" alt="img"/>
                <img src="./images/image-mockups4.png" className="mockup-img img4" alt="img"/>
            </div>
        </div>
    )
}
export default Intro