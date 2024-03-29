import React from "react";

export default function NavInfo() {
    return (
        <div className="py-1 bg-primary">
            <div className="container">
                <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                    <div className="col-lg-12 d-block">
                        <div className="row d-flex">
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                    <span className="bx bx-phone"></span>
                                </div>
                                <span className="text">+84 9811 01336</span>
                            </div>
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                    <span className="bx bxl-telegram"></span>
                                </div>
                                <span className="text">
                                    manhkhanhne@email.com
                                </span>
                            </div>
                            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                <span className="text">
                                    I'm &amp; Manh Khanh
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
