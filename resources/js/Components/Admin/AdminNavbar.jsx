import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminNavbar({ ulRef, user }) {
    const [navbar, setNavbar] = useState([]);
    useEffect(() => {
        Axios.get("/admin/navbar").then((res) => {
            setNavbar(res.data);
        })
        .catch(e => alert(e.response.data.message))
    }, []);

    return (
        <ul
            className="dropdown-menu dropdown-menu-end"
            data-bs-popper="none"
            ref={ulRef}
        >
            <li>
                <a className="dropdown-item" href="#">
                    <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                                <img
                                    src={`/storage${user.avatar}`}
                                    alt={user.username}
                                    className="rounded-circle"
                                />
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <span className="fw-semibold d-block">
                                {user.username}
                            </span>
                            <small className="text-muted">{user.role}</small>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <div className="dropdown-divider"></div>
            </li>
            {navbar.map((nav, index) => (
                <li key={index}>
                    <a className="dropdown-item" href={`${nav.area}/${nav.controller ? nav.controller + "/" + nav.action ? nav.action : "" : ""}`}>
                        <i className={`me-2 ${nav.icon}`}></i>
                        <span className="align-middle">{nav.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}
