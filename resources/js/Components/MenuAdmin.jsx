import Axios from "axios";
import React, { useEffect, useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import ShowItemMenu from "./ShowItemMenu";

export default function MenuAdmin() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        Axios.get("/admin/menu/all")
            .then((res) => {
                setMenus(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
            data-bg-class="bg-menu-theme"
        >
            <ApplicationLogo />
            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1 ps ps--active-y">
                {
                    menus.map((menu, index) => {
                        if (menu.parent_id === 0) {
                            return <ShowItemMenu
                                menu={menu}
                                index={index}
                                menus={menus}
                            />;
                        }
                    } )}
            </ul>
        </aside>
    );
}
