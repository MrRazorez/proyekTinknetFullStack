import React, { useEffect, useState } from "react";

export default function MessageConfirm() {
    const backTo = () => {
        localStorage.removeItem("msg");
        window.location.replace("/home");
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
                    <h1 onClick={backTo}>{localStorage.getItem("msg")}</h1>
                </div>
            </div>
        </body>
    )
}