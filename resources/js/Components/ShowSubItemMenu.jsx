import React from "react";

export default function ShowSubItemMenu({ name, key, url }) {
    return (
        <li className="menu-item" key={key}>
            <a href={url} className="menu-link">
                <div data-i18n={name}>{name}</div>
            </a>
        </li>
    );
}
