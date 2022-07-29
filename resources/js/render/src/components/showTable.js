import "../components/semantic-UI/table.css";
import "./semantic-UI/icon.css"
import "./semantic-UI/grid.css"
import "./semantic-UI/button.css"
import "./semantic-UI/input.css"
import "./showTable.css"

import AmbilData from "./fetchData";
import { useState } from "react";

export default function TableTinknet() {
    const dataAPI = AmbilData();
    console.log(dataAPI);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="body">
            <div className="ui equal width grid" style={{ width:"100%" }}>
                <div className="column">
                    <div className="export_button">
                        <button onClick={() => (window.location.href = "/api/dataexport")} class="ui primary button">Unduh</button>
                    </div>                    
                </div>
                <div className="column">
                    <div className="search_bar">
                        <div class="ui icon input">
                        <input onChange={
                            (event) => {
                                setSearchTerm(event.target.value);
                            }
                        } type="text" placeholder="Cari..."/>
                        <i class="search icon"></i>
                        </div>
                    </div>                                
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
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>TOTAL PERANGKAT (Kondisi Bagus)</th>
                        <th>{dataAPI[1]}</th>
                    </tr>
                    </thead>
                </table>
            </div>
            
        </div>
       
    )
}