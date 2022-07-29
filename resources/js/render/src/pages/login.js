import React from "react";
import "./login.css"
import { useState } from "react";
import Logo from "../components/logo/tinknet.png";
import ValidAccount from "../components/validation";
import "../components/semantic-UI/icon.css";
import "../components/semantic-UI/button.css";
import "../components/semantic-UI/segment.css"
import "../components/semantic-UI/grid.css"
import "../components/semantic-UI/form.css"
import "../components/semantic-UI/input.css"

export default function Login() {
    let aturField = 10;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const runValid = async (data) => {
        data.preventDefault();
        if (!(username === "") && !(password === "")) {
            ValidAccount(username, password);
        }
        else {
            window.location.replace("confirmed");
        }
    }

    return (
        <body>
            <div className="Background">
            {
                (localStorage.getItem("token"))? window.location.replace("home"):
            <div className="ui middle aligned center aligned grid" style={{ height: "95vh", width:"100%" }}>
                <div className="column" style={{ maxWidth: 400 }}>
                    <form onSubmit={runValid} className="ui large form">
                        <img src={Logo} alt="Logo Tinknet" style={{ padding: 10, width: 100 }}/>
                        <div className="ui segment" style={{ padding: 40 }}>
                            <div className="field" style={{ padding: aturField }}>
                                <div className="ui left icon input">
                                    <i className="user icon"/>
                                    <input
                                        type="text"
                                        placeholder="Masukkan Nama Akun"
                                        value={ username }
                                        onChange={(data) => setUsername(data.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field" style={{ padding: aturField }}>
                                <div className="ui left icon input">
                                    <i className="lock icon"/>
                                    <input
                                        type="password"
                                        placeholder="Masukkan Kata Sandi"
                                        value={ password }
                                        onChange={(data) => setPassword(data.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field" style={{ padding: aturField }}>
                                <button className="ui fluid large submit black button">Masuk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            }
            </div>
        </body>
    );
}