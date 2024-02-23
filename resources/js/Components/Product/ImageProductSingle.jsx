import React, { useContext, useEffect, useRef, useState } from "react";
import InputError from "../InputError";
import { AllErrors } from "@/Pages/Admin/Product/Edit";
import { AllErrorsCreate } from "@/Pages/Admin/Product/Create";

export default function ImageProductSingle({
    images = [],
    arrNewImg,
    setArrNewImg,
}) {
    const num = 0;
    const boxImgRef = useRef();
    const [imgs, setImgs] = useState(
        images.map((img, index) => <Img img={img} index={index} />)
    );
    const errors = useContext(AllErrors);
    const errorsCreate = useContext(AllErrorsCreate);

    useEffect(() => {
        console.log(imgs);
    }, [imgs]);

    function Img({ img, index = imgs.length }) {
        return (
            <div className="position-relative" key={index}>
                <a
                    href={img.url ? `/storage${img.url}` : img.fakePath}
                    target="_blank"
                >
                    {!img.fakePath && (
                        <input
                            type="text"
                            hidden
                            name="oldImg[]"
                            value={img.id}
                        />
                    )}
                    <img
                        src={img.url ? `/storage${img.url}` : img.fakePath}
                        alt="user-avatar"
                        className={`d-block rounded border ${
                            num === index && "border-info"
                        }`}
                        height="100"
                        width="100"
                        id="uploadedAvatar"
                    />
                </a>
                <div
                    data-id={img.id}
                    className="remove-img position-absolute bottom-0 text-white d-flex justify-content-center w-100 mb-1"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.currentTarget.parentNode.remove();
                        handleArrImg(index);
                    }}
                >
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        );
    }

    return (
        <div
            className="d-flex align-items-start align-items-sm-center gap-4"
            ref={boxImgRef}
        >
            {imgs.length !== 0 ? (
                imgs.map((img) => img)
            ) : (
                <img
                    src="/admin/assets/img/images/add-image.png"
                    alt="user-avatar"
                    className="d-block rounded"
                    height="100"
                    width="100"
                    id="uploadedAvatar"
                />
            )}

            <div className="button-wrapper">
                <label
                    htmlFor="upload"
                    className="btn btn-primary me-2 mb-4"
                    tabIndex="0"
                >
                    <span className="d-none d-sm-block">Chọn ảnh</span>
                    <i className="bx bx-upload d-block d-sm-none"></i>
                    <input
                        type="file"
                        id="upload"
                        name="img"
                        hidden
                        autoComplete="avatar"
                        className="account-file-input"
                        onChange={(e) => {
                            const fakePath = window.URL.createObjectURL(
                                e.target.files[0]
                            );
                            const data = {
                                fakePath: fakePath,
                            };
                            setImgs([...imgs, <Img img={data} />]);
                            setArrNewImg([...arrNewImg, e.target.files[0]]);
                        }}
                    />
                </label>
                <p className="text-muted mb-0">
                    Allowed JPG, GIF or PNG. Max size of 800K
                </p>
                {(errors || errorsCreate) && (
                    <InputError
                        message={errors ? errors.image : errorsCreate.image}
                        className={"mt-2 small text-danger"}
                    />
                )}
            </div>
        </div>
    );
}
