import React from "react"

const HeaderMobile = (props) => {
    const handleClick = () => {
        props.setMenu(!props.menu)
    }
    return (
        <div className="header header-mobile">
        <img src="./images/logo.svg" alt="logo"/>
        <img src={props.menu ? "./images/icon-close.svg" :"./images/icon-hamburger.svg"} alt="hamburger" onClick={handleClick}/>
    </div>
    )
}

export default HeaderMobile