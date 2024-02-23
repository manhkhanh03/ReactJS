import React, { useEffect, useRef, useState } from "react";

export default function Alert({ strType }) {
    const al = useRef();
    const [type, setType] = useState("");
    function AlertMessage({ className = "", message = "" }) {
        return (
            <div
                ref={al}
                className={className}
                role="alert"
                style={{
                    color: "#71dd37 !important",
                    animation: "scrollTop 1.25s linear",
                }}
            >
                {message}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>
        );
    }
    useEffect(() => {
        setType(strType);
    }, []);

    useEffect(() => {
        al.current.style.animation = "scrollTopRemove .60s linear";
        setTimeout(() => {
            al.current.style.animation = "scrollTopRemove .60s linear";
            setTimeout(() => {
                al.current.parentNode.removeChild(al.current);
            }, 600);
        }, 3000);
    }, [type]);

    return (
        <div className="cart" id="alert">
            <div className="card-body">
                {type === "success" && (
                    <AlertMessage className="alert alert-success alert-dismissible" />
                )}
                {type === "error" && (
                    <AlertMessage className="alert alert-danger alert-dismissible" />
                )}
                {type === "" && <div ref={al}></div>}

                {/* @if (Session::has('status')) */}
                {/* <div className="alert alert-success alert-dismissible" role="alert"
                    style={{color: "#71dd37 !important", animation: "scrollTop 1.25s linear",}}>
                    {{ sessionStorage.get('status') }}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> */}
                {/* @elseif(Session::has('error')) */}
                {/* <div className="alert alert-danger alert-dismissible" role="alert"
                    style={{color: "#ff3e1d !important", animation: "scrollTop 1.25s linear"}}>
                    {{ Session::get('error') }}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> */}
                {/* @endif */}
                {/* <script>
                const _alert = document.querySelector('#alert')
                if (_alert.firstElementChild.firstElementChild) {
                    setTimeout(() => {
                        _alert.firstElementChild.firstElementChild.style.animation = 'scrollTopRemove .60s linear'
                        setTimeout(() => {
                            _alert.firstElementChild.removeChild(_alert.firstElementChild.firstElementChild);
                        }, 600)
                    }, 3000);
                }
            </script> */}
            </div>
        </div>
    );
}
