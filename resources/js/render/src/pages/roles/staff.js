import React from "react";
import SideBarStaff from "..//../components/homeComp/SidebarStaff";
import TableTinknet from "../../components/showTable";

export default function Staff() {
    return (
        <div className="side">
            <SideBarStaff/>
            <div className="pages">
                <div>
                    <TableTinknet/>
                </div>
            </div>
        </div>
    );
}