import "./TambahStaff.css";
import React from "react";
import { useState } from "react";
import SidebarAdminRegister from "../../components/homeComp/SidebarAdminRegister";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import axios from "axios";
import "../../components/semantic-UI/button.css"

export default function AddStaff() {
  const dataRole = DesicionRole();
  const [username, setUsername] = useState("");

  const runValid = async (data) => {
    data.preventDefault();
    const getData = async () => {
      try {
          await axios.post("/api/usertinknet/store",{
            username: username
          })
          .then(
            function (response) {
              localStorage.setItem("msg", response.data.msg);
              window.location.replace("/dataconfirmed");
            }
          );
      } catch(error) {
          console.log(error);
      }
    }

    getData();
  }

  return (
    <body>
      <div className="top">
          <TopBar/>
          {
            (localStorage.getItem("token") === dataRole[2]["token"])?
          <div className="side">
              <SidebarAdminRegister/>
              <div className="pages">
                  <div className="newStaff">
                  <h1 className="newStaffTitle">Tambah Staff</h1>
                  <form onSubmit={runValid}>
                      <div className="newStaffForm">
                      <div className="newStaffItem">
                      <label>Nama Akun</label>
                      <input
                        type="text"
                        placeholder="Masukkan Nama Akun..."
                        value={ username }
                        onChange={(data => setUsername(data.target.value))}
                      />
                      </div>        
                      <div className="newStaffButton">
                      <button className="ui fluid large submit black button">Tambah</button>
                      </div>    
                      </div>
                                         
                  </form>
                  </div>
              </div>
          </div>:
          window.location.replace("/home")
          }
      </div>
    </body>
  );
}