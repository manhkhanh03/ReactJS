import NavInfo from "@/Components/Includes/NavInfo";
import Navbar from "@/Components/Includes/Navbar";
import SingleBanner from "@/Components/SingleBanner";
import React, { useEffect, useRef, useState } from "react";

export default function LayoutUser({ children, ...props }) {
    const bannerRef = useRef(null);
    const [myClass, setMyClass] = useState("");

    function scroll() {
        const eReact = bannerRef.current.getBoundingClientRect();
        setMyClass("scrolled sleep");

        if (eReact.bottom <= 0) {
            setMyClass("scrolled sleep awake");
        }
        if (window.scrollY === 0) setMyClass("");
    }

    useEffect(() => {
        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <>
            <link rel="stylesheet" href="/css/style.css"></link>
            <link rel="stylesheet" href="/css/animate.css"></link>
            <link rel="stylesheet" href="/css/ionicons.css"></link>
            <link rel="stylesheet" href="/css/ionicons.min.css"></link>
            <NavInfo />
            <Navbar className={myClass} />
            {props.singleBanner && (
                <SingleBanner banRef={bannerRef} page={props.page} />
            )}
            {children}
        </>
    );
}
