import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import AdminNavbar from "./Admin/AdminNavbar";

export default function NavLink() {
    const [user, setUser] = useState({});
    const [isShowing, setisShowing] = useState(true);
    const ulRef = useRef(null);
    useEffect(() => {
        Axios.get("/admin/user/current")
            .then((res) => {
                setUser(res.data);
            })
            .catch((e) => alert(e.response.data.message));
    }, []);
    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
        >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a
                    className="nav-item nav-link px-0 me-xl-4"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    <i className="bx bx-menu bx-sm"></i>
                </a>
            </div>

            <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
            >
                <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                        <i className="bx bx-search fs-4 lh-0"></i>
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Search..."
                            aria-label="Search..."
                        />
                    </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li className="nav-item lh-1 me-3">
                        <span></span>
                    </li>

                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a
                            className="nav-link dropdown-toggle hide-arrow"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            data-bs-toggle="dropdown"
                        >
                            <div className="avatar avatar-online">
                                <img
                                    src={`/storage${user.avatar}`}
                                    alt=""
                                    className="rounded-circle"
                                    onClick={() => {
                                        setisShowing(!isShowing);
                                        ulRef.current.classList.toggle(
                                            "show",
                                            isShowing
                                        );
                                    }}
                                />
                            </div>
                        </a>
                        <AdminNavbar ulRef={ulRef} user={user} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
