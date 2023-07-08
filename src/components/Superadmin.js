import React, { useState } from "react";
import Superadmin_eventitem from "./Superadmin_eventitem";

const Superadmin = ({theme}) => {
    const host = "https://whatsnext-backend.onrender.com";
    const [requ, setreq] = useState([]);
    const seereq = async () => {
        const response = await fetch(`${host}/api/superadmin/seerequests`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                //   "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setreq(json);
    };
    
    return (
        <div class="container">
            <div style={{ textAlign: "center" }}>
                <button
                    style={{ marginBottom: "1em", marginTop: "1em" }}
                    class="btn btn-primary"
                    id="reqSuper"
                    onClick={seereq}
                >
                    Requests
                </button>
            </div>

            {requ.map((event) => {
                return <Superadmin_eventitem theme={theme} key={event._id} event={event} />;
            })}
        </div>
    );
};

export default Superadmin;
