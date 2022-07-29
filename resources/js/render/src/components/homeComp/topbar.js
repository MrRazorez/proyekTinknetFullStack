import "./topbar.css";

import React from "react";
import Logo from "..//../components/logo/tinknet.png";
import Hosting from "..//../components/logo/hosting.png";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <h1 className="title"> Inventory Asset </h1>
                    <span className="logo">
                        <img src={Hosting} alt="" className="Hosting"/>
                    </span>
                </div>
                <div className="topright">
                    <div className="topbarIconsContainer">
                        <span className="logo">
                            <img src={Logo} alt="" className="Logo"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}