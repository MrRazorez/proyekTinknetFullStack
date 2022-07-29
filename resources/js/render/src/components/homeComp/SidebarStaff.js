import React from 'react'
import './Sidebar.css'
import HomeInventory from "..//../components/logo/home-icon-silhouette.png";
import AccountInfo from "..//../components/logo/user.png";
import PowerOut from "..//../components/logo/power-off.png";

import Logout from "../logout";

export default function SidebarStaff() {
  const rumah = () => {
    window.location.replace("/home")
  }

  const infoAcc = () => {
    window.location.replace("/infoakun")
  }
  
  return (

    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li onClick={rumah} className="sidebarListItem">
              <img src={HomeInventory} alt="" className="sidebarIcon" />
                Rumah
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Akun</h3>
            <ul className="sidebarList">
              <li onClick={infoAcc} className="sidebarListItem">
              <img src={AccountInfo} alt="" className="sidebarIcon" />
                Akun
              </li>
              <li onClick={Logout} className="sidebarListItem">
              <img src={PowerOut} alt="" className="sidebarIcon" />
                Keluar
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
