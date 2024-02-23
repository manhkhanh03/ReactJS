import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function NavbarUser({ totalCart, className = "" }) {
    const [total, setTotal] = useState(totalCart);
    const [navs, setNavs] = useState([]);
    const myClass = className;
    const navRef = useRef(null);

    useEffect(() => {
        Axios.get("/navbar")
            .then((res) => {
                setNavs(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function SubMenu({ name, link, index }) {
        return (
            <a className="dropdown-item" href={link} key={index}>
                {name}
            </a>
        );
    }

    function ItemNav({ leng, nav, subMenu, index }) {
        switch (leng) {
            case 0:
                if (!nav.icon) {
                    return (
                        <li className="nav-item" key={index}>
                            <a href={`/${nav.controller}`} className="nav-link">
                                {nav.name}
                            </a>
                        </li>
                    );
                }
            default:
                if (nav.icon)
                    return (
                        <li className="nav-item cta cta-colored" key={index}>
                            <a href={`/${nav.controller}`} className="nav-link">
                                <span className={nav.icon}></span>[0]
                            </a>
                        </li>
                    );
                return (
                    <li className="nav-item dropdown" key={index}>
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdown04"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {nav.name}
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="dropdown04"
                        >
                            {subMenu.map((sm, i) => (
                                <SubMenu
                                    name={sm.name}
                                    link={`/${sm.controller + "/" + sm.area}`}
                                    index={i}
                                />
                            ))}
                        </div>
                    </li>
                );
        }
    }

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${myClass}`}
            id="ftco-navbar"
            ref={navRef}
        >
            <div className="container">
                <a className="navbar-brand" href="/home">
                    ManhKhanh
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        {navs.map((n, i) => {
                            if (n.parent_id === 0) {
                                const subMenu = navs.filter(
                                    (nav) => nav.parent_id == n.id
                                );

                                return (
                                    <ItemNav
                                        leng={subMenu.length}
                                        nav={n}
                                        subMenu={subMenu}
                                        index={i}
                                    />
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
