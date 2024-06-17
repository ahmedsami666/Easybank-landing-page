import React from "react";

const Features = () => {
    return (
        <div className="features">
            <div>
                <img src="./images/icon-online.svg" alt="online"/>
                <h4>
                    Online Banking
                </h4>
                <p>
                    Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world.
                </p>
            </div>
            <div>
                <img src="./images/icon-budgeting.svg" alt="budgeting"/>
                <h4>
                    Simple Budgeting
                </h4>
                <p>
                    See exactly where your money goes each month. Receive notifications when you’re 
                    close to hitting your limits.
                </p>
            </div>
            <div>
                <img src="./images/icon-onboarding.svg" alt="onboarding"/>
                <h4>
                    Fast Onboarding
                </h4>
                <p>
                    We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away.
                </p>
            </div>
            <div>
                <img src="./images/icon-api.svg" alt="api"/>
                <h4>
                    Open API
                </h4>
                <p>
                    Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier.
                </p>
            </div>
        </div>
    )
}
export default Features