import React from "react";
import SideBarAdminBarang from "..//../components/homeComp/SidebarAdminBarang";
import TableTinknet from "../../components/showTable";

export default function AdminBarang() {
    return (
        <div className="side">
            <SideBarAdminBarang/>
            <div className="pages">
                <div className="TableList">
                    <TableTinknet/>
                </div>
            </div>
        </div>
    );
}