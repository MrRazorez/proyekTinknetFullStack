import React from "react";
import SideBarAdminRegister from "..//../components/homeComp/SidebarAdminRegister";
import TableTinknet from "../../components/showTable";

export default function AdminRegister() {
    return (
        <div className="side">
            <SideBarAdminRegister/>
            <div className="pages">
                <div>
                    <TableTinknet/>
                </div>
            </div>
        </div>
    );
}