import React, { useRef, useState } from "react";
import InputLabel from "./InputLabel";

export default function MyDropDown({ roles, active = "", setData }) {
    const ulRef = useRef(null);
    const [isShow, setIsShow] = useState(true);
    const [act, setAct] = useState(active);

    function handleClick(e) {
        setIsShow(!isShow);
        ulRef.current.classList.toggle("show", isShow);
        e &&
            (setAct(e.target.textContent),
            setData("role", e.target.textContent.toLowerCase()));
    }

    return (
        <>
            <div className="mb-3 col-md-6 position-relative">
                <InputLabel
                    htmlFor={"role"}
                    value={"Vai trò"}
                    className="position-relative w-100"
                />
                <button
                    type="button"
                    className="btn btn-outline-secondary dropdown-toggle w-100"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={(e) => handleClick()}
                >
                    {act ? act.toUpperCase() : "Chọn vai trò"}
                </button>
                <ul
                    className="dropdown-menu"
                    ref={ulRef}
                    style={{
                        position: "absolute",
                        inset: "0px auto auto 0px",
                        margin: "0px",
                        transform: "translate3d(18px, 60.8px, 0px)",
                    }}
                >
                    {roles.map((item) => (
                        <li>
                            <a
                                className="dropdown-item"
                                onClick={(e) => {
                                    handleClick(e);
                                }}
                            >
                                {item.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
