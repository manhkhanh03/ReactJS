import React from "react";

export default function SingleBanner({ page, banRef }) {
    return (
        <div
            className="hero-wrap hero-bread"
            style={{
                backgroundImage: "url('/img/IMG_4699.JPG')",
            }}
            ref={banRef}
        >
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                        <p className="breadcrumbs">
                            <span className="mr-2">
                                <a href="/home">Home</a>
                            </span>
                            <span>{page}</span>
                        </p>
                        <h1 className="mb-0 bread">{page}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
