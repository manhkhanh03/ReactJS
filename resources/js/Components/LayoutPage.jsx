import React from "react";
import NavLink from "./NavLink";

export default function LayoutPage({ children }) {
    return (
        <div className="layout-page">
            <NavLink />
            <div className="content-wrapper">{children}</div>
        </div>
    );
}
