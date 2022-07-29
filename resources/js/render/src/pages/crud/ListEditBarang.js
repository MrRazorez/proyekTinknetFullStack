import "../../components/semantic-UI/table.css";
import "../../components/semantic-UI/icon.css"
import "../../components/semantic-UI/input.css"
import "./ListEditBarang.css"
import SideBarAdminBarang from "../../components/homeComp/SidebarAdminBarang";
import TopBar from "../../components/homeComp/topbar";
import { Link } from "react-router-dom";
import DesicionRole from "../../components/roleTinknet";
import "../../components/semantic-UI/button.css"
import AmbilData from "../../components/fetchData";
import { useState } from "react";


export default function TableTinknet() {
    const dataRole = DesicionRole();
    const dataAPI = AmbilData();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="body">
                <div className="top">
                    <TopBar/>
                    {
                        (localStorage.getItem("token") === dataRole[1]["token"])?
                    <div className="side">
                        <SideBarAdminBarang/>
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
                            <table className="ui celled table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Perangkat</th>
                                        <th>Jenis</th>
                                        <th>Jumlah</th>
                                        <th>Status</th>
                                        <th>Kondisi</th>
                                        <th>Lokasi</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { dataAPI[0].filter(
                                         // eslint-disable-next-line
                                        (val) => {
                                            if (searchTerm === "") {
                                                return val;
                                            } else if (val.nama_perangkat.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            } else if (val.jenis.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            } else if (val.jumlah.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            } else if (val.status.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            } else if (val.kondisi.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            } else if (val.lokasi.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            }
                                        }
                                    ).map((val, key) => (
                                        <tr key={key}>
                                            <td data-label="id">{val.id_barang}</td>
                                            <td data-label="nama_perangkat">{val.nama_perangkat}</td>
                                            <td data-label="jenis">{val.jenis}</td>
                                            <td data-label="jumlah">{val.jumlah}</td>
                                            <td data-label="status">{val.status}</td>
                                            <td data-label="kondisi">{val.kondisi}</td>
                                            <td data-label="lokasi">{val.lokasi}</td>
                                            <td>
                                                <div className="ui buttons">
                                                    <Link to={(val.id_barang > 0)? "/editbarang/"+val.id_barang : ""} className={(val.id_barang > 0)? "ui positive button" : "ui button"}>Sunting</Link>
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