import "./InfoAkun.css";
import React, { useEffect } from "react";
import { useState } from "react";
import SidebarAdminBarang from "../../components/homeComp/SidebarAdminBarang";
import SidebarAdminRegister from "../../components/homeComp/SidebarAdminRegister";
import SidebarStaff from "../../components/homeComp/SidebarStaff";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import axios from "axios";
import "../../components/semantic-UI/button.css"

export default function AccInfo() {
  const dataRole = DesicionRole();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const id = localStorage.getItem("acc");

  const settingNama = async () => {
    try {
      const response = await axios.get("/api/usertinknet/show/"+id);
      setUsername(response.data.username);
      setPassword(response.data.password);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    settingNama();
    // eslint-disable-next-line
  }, []);

  const runValid = async (data) => {
    data.preventDefault();
    const getData = async () => {
      try {
          await axios.post("/api/usertinknet/update/"+id,{
            username: username,
            password: password
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
          { !(localStorage.getItem("token"))? window.location.replace("/home"):
          <div className="side">
              {
                (localStorage.getItem("token") === dataRole[1]["token"])?
                <SidebarAdminBarang/>:
                (localStorage.getItem("token") === dataRole[2]["token"])?
                <SidebarAdminRegister/>:
                <SidebarStaff/>
              }
              <div className="pages">
                  <div className="account">
                  <h1 className="accountTitle">Ganti Nama Akun dan Kata Sandi</h1>
                  <form onSubmit={runValid}>
                      <div className="accountForm">
                      <div className="accountItem">
                      <label>Nama Akun</label>
                      <input
                        type="text"
                        placeholder="Nama Akun"
                        value={ username }
                        onChange={(data => setUsername(data.target.value))}
                      />
                      </div>
                      <div className="accountItem">
                      <label>Kata Sandi</label>
                      <input
                        type="password"
                        placeholder="Kata Sandi"
                        value={ password }
                        onChange={(data => setPassword(data.target.value))}
                      />
                      </div>
                      <div className="accountButton">
                      <button className="ui fluid large submit black button">Sunting</button>
                      </div>                      
                      </div>
                      
                  </form>
                  </div>
              </div>
          </div>
          }
      </div>
    </body>
  );
}