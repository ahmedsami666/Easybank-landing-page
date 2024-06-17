import React from "react";

const Articles = () => {
    return (
        <div className="articles">
            <h3>
                Latest Articles
            </h3>
            <div className="article">
                <div className="article-img currency">

                </div>
                <div className="article-data">
                <span>By Claire Robinson</span>
                <h5>Receive money in any currency with no fees</h5>
                <p>            
                    The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                </p>
                </div>
            </div>
            <div className="article">
                <div className="article-img restaurant">

                </div>
                <div className="article-data">
                <span>By Wilson Hutton</span>
                <h5>Treat yourself without worrying about money</h5>
                <p>            
                    Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …
                </p>
                </div>
            </div>
            <div className="article">
                <div className="article-img plane">

                </div>
                <div className="article-data">
                <span>By Wilson Hutton</span>
                <h5>Take your Easybank card wherever you go</h5>
                    <p>
                        We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                        while you’re abroad. We’ll even show you …
                    </p>
                </div>
            </div>
            <div className="article">
                <div className="article-img confetti">

                </div>
                <div className="article-data">
                <span>By Claire Robinson</span>
                <h5>Our invite-only Beta accounts are now live!</h5>
                <p>
                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ...
                </p>
                </div>
            </div>
        </div>
    )
}
export default Articles