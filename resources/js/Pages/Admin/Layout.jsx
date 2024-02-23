import LayoutPage from "@/Components/LayoutPage";
import MenuAdmin from "@/Components/MenuAdmin";
import React from "react";

export default function Dashboard({ children }) {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <MenuAdmin />
                <LayoutPage>{children}</LayoutPage>
            </div>
        </div>
    );
}
