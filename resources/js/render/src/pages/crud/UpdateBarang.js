import "./TambahBarang.css";
import React from "react";
import { useState, useEffect } from "react";
import SideBarAdminBarang from "../../components/homeComp/SidebarAdminBarang";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../components/semantic-UI/button.css"

export default function EditInventory() {
  const dataRole = DesicionRole();
  const [namaPerangkat, setNamaPerangkat] = useState("");
  const [jenis, setJenis] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [status, setStatus] = useState("");
  const [kondisi, setKondisi] = useState("");
  const [lokasi, setLokasi] = useState("");
  const { id } = useParams();
  
  const settingNama = async () => {
    try {
      const response = await axios.get("/api/databarang/show/"+id);
      setNamaPerangkat(response.data.nama_perangkat);
      setJenis(response.data.jenis);
      setJumlah(response.data.jumlah);
      setStatus(response.data.status);
      setKondisi(response.data.kondisi);
      setLokasi(response.data.lokasi);
    } catch(error) {
      console.log(error)
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
          await axios.post("/api/databarang/update/"+id,{
            nama_perangkat: namaPerangkat,
            jenis: jenis,
            jumlah: jumlah,
            status: status,
            kondisi: kondisi,
            lokasi: lokasi
          })
          .then(
            function (response) {
              localStorage.setItem("msg", response.data.msg);
              window.location.replace("/dataconfirmed");
            }
          );
      } catch(error) {
          alert(error);
      }
    }

    getData();
  }

  return (
    <body>
      <div className="top">
          <TopBar/>
          {
            (localStorage.getItem("token") === dataRole[1]["token"])?
          <div className="side">
              <SideBarAdminBarang/>
              <div className="pages">
                  <div className="newInventory">
                  <h1 className="newInventoryTitle">Sunting Barang</h1>
                  <form onSubmit={runValid}>
                      <div className="newInventoryForm">
                      <div className="newInventoryItem">
                      <label>Nama Perangkat</label>
                      <input
                        type="text"
                        placeholder="Masukkan Nama Perangkat..."
                        value={ namaPerangkat }
                        onChange={(data => setNamaPerangkat(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Jenis Perangkat</label>
                      <input
                        type="text"
                        placeholder="Masukkan Jenis Perangkat... "
                        value={ jenis }
                        onChange={(data => setJenis(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Jumlah</label>
                      <input
                        type="number" placeholder="Masukkan Jumlah Perangkat..."
                        value={ jumlah }
                        onChange={(data => setJumlah(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Status</label>
                      <input
                        type="text"
                        list="statusData"
                        placeholder="Masukkan Status Perangkat..."
                        value={ status }
                        onChange={(data => setStatus(data.target.value))}
                        onClick={(data => status? setStatus("") : setStatus(data.target.value))}
                      />
                      <datalist id="statusData">
                        <option value="Aktif"/>
                        <option value="Pasif"/>
                        <option value="Lain - lain"/>
                      </datalist>
                      </div>
                      <div className="newInventoryItem">
                      <label>Kondisi</label>
                      <input
                        type="text"
                        list="kondisiData"
                        placeholder="Masukkan Kondisi Perangkat..."
                        value={ kondisi }
                        onChange={(data => setKondisi(data.target.value))}
                        onClick={(data => kondisi? setKondisi("") : setKondisi(data.target.value))}
                      />
                      <datalist id="kondisiData">
                        <option value="Bagus"/>
                        <option value="Rusak"/>
                      </datalist>
                      </div>
                      <div className="newInventoryItem">
                      <label>Lokasi</label>
                      <input
                        type="text"
                        placeholder="Masukkan Lokasi Perangkat..."
                        value={ lokasi }
                        onChange={(data => setLokasi(data.target.value))}
                      />
                      </div>
                      </div>
                      <div className="newInventoryButton">
                      <button className="ui fluid large submit black button">Sunting</button>
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