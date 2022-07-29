import React from 'react'
import './Sidebar.css'
import HomeInventory from "..//../components/logo/home-icon-silhouette.png";
import AddStaff from "..//../components/logo/add_user.png";
import EditStaff from "..//../components/logo/edit_user.png";
import AccountInfo from "..//../components/logo/user.png";
import PowerOut from "..//../components/logo/power-off.png";

import Logout from "../logout";

export default function SidebarAdminRegister() {
  const rumah = () => {
    window.location.replace("/home")
  }

  const staffAdd = () => {
    window.location.replace("/addstaff")
  }

  const staffEdit = () => {
    window.location.replace("/listeditstaff")
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
            <h3 className="sidebarTitle">Kelola Staff</h3>
            <ul className="sidebarList">
                <li onClick={staffAdd} className="sidebarListItem">
                <img src={AddStaff} alt="" className="sidebarIcon" />
                  Tambah
                </li>
                <li onClick={staffEdit} className="sidebarListItem">
                <img src={EditStaff} alt="" className="sidebarIcon" />
                  Sunting
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
