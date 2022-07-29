import "../../components/semantic-UI/table.css";
import "../../components/semantic-UI/icon.css"
import "../../components/semantic-UI/input.css"
import "./ListEditStaff.css"
import SidebarAdminRegister from "../../components/homeComp/SidebarAdminRegister";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../components/semantic-UI/button.css"


export default function TableTinknet() {
    const dataRole = DesicionRole();
    const [dataAPI, setDataAPI] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getData = async () => {
        try {
            const response = await axios.get("/api/usertinknet/show");
            setDataAPI(response.data.akun);
        } catch(error) {
            console.log(error);
            setDataAPI([
                {
                    id: "-1",
                    username: "Server Down"
                }
            ]);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const resetData = async (myID) => {
        if (myID > 0) {
            const response = await axios.get("/api/usertinknet/reset/"+myID);
            localStorage.setItem("msg", response.data.msg);
            window.location.replace("/dataconfirmed");
        }
    }
    
    const hapusData = async (myID) => {
        if (myID > 0) {
            const response = await axios.get("/api/usertinknet/delete/"+myID);
            localStorage.setItem("msg", response.data.msg);
            window.location.replace("/dataconfirmed");
        }
    }

    return (
        <div className="body">
                <div className="top">
                    <TopBar/>
                    {
                        (localStorage.getItem("token") === dataRole[2]["token"])?
                    <div className="side">
                        <SidebarAdminRegister/>
                        <div className="pages">
                        <div className="search_bar_list">
                            <div class="ui icon input">
                            <input onChange={
                            (event) => {
                                setSearchTerm(event.target.value);
                            }
                        } type="text" placeholder="Cari..."/>
                            <i class="search icon"></i>
                            </div>
                        </div>
                        <div className="content">   
                            <table className="ui celled padded table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Akun</th>
                                        <th className="Table_Aksi">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { dataAPI.filter(
                                        // eslint-disable-next-line
                                        (val) => {
                                            if (searchTerm === "") {
                                                return val;
                                            } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            }
                                        }
                                    ).map((val, key) => (
                                        <tr key={key}>
                                            <td data-label="id">{val.id}</td>
                                            <td data-label="id">{val.username}</td>
                                            <td>
                                                <div className="ui buttons">
                                                    <button onClick={() => resetData(val.id)} className={(val.id > 0)? "ui positive button" : "ui button"}>Pulihkan</button>
                                                    <button onClick={() => hapusData(val.id)} className={(val.id > 0)? "ui negative button" : "ui button"}>Hapus</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>:
                window.location.replace("/home")
            }
            </div>
            
        </div>
       
    )
}