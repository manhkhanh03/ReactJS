import React, { useEffect, useRef, useState } from "react";
import ShowSubItemMenu from "./ShowSubItemMenu";

export default function ShowItemMenu({ menu, index, menus }) {
    const [subMenu, setsubMenu] = useState([]);
    const itemRef = useRef(null);
    const [click, setClick] = useState(false);
    useEffect(() => {
        const child = menus.filter((value) => value.parent_id === menu.id);
        setsubMenu(child);
    }, []);

    useEffect(() => {
        const elLi = itemRef.current;
        if (click) {
            const elOpen = itemRef.current.parentNode.querySelector(".open");
            if (elOpen) elOpen.classList.remove("open");
            elLi.classList.add("open");
        } else elLi.classList.remove("open");
    }, [click]);

    return (
        <li className="menu-item" ref={itemRef} key={index}>
            <a
                 onClick={(e) => {
                    subMenu.length !== 0 ? (e.preventDefault(), setClick(!click)) : e.target.click();
                }}
                href={`/${menu.area}/${menu.controller}/${
                    menu.action ? menu.action : ""
                }`}
                className={`menu-link ${subMenu.length !== 0 && "menu-toggle"}`}
            >
                <i className={`menu-icon tf-icons ${menu.icon}`}></i>
                <div data-i18n="Analytics">{menu.name}</div>
            </a>
            <ul className="menu-sub">
                {subMenu.map((sm, i) => (
                    <ShowSubItemMenu
                        name={sm.name}
                        index={i}
                        url={`/${sm.area}/${sm.controller}/${
                            sm.action ? sm.action : ""
                        }`}
                    />
                ))}
            </ul>
        </li>
    );
}
