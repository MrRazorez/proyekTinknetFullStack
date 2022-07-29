import React, { useEffect, useState } from "react";

export default function LoginEmpty() {
    const backTo = () => {
        localStorage.clear();
        window.location.replace("/login");
    }

    const [hitung, setHitung] = useState(0);

    useEffect(() => {
        if (hitung < 5) {
            setTimeout(() => {
                setHitung((hitung) => hitung + 1);
            }, 1000);
        }
        else {
            backTo();
        }
    });

    return(
        <body>
            <div onClick={backTo} className="ui middle aligned center aligned grid" style={{ height: "100vh"}}>
                <div onClick={backTo} className="column" style={{ maxWidth: 450 }}>
                    <h1 onClick={backTo}>Silahkan, masukkan Nama Akun dan Kata Sandi anda!</h1>
                </div>
            </div>
        </body>
    )
}