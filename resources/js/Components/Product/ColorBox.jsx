import React, { useContext, useEffect, useState } from "react";
import InputLabel from "../InputLabel";
import useDelete from "@/hooks/useDelete";
import InputError from "../InputError";
import { AllErrors } from "@/Pages/Admin/Product/Edit";
import { AllErrorsCreate } from "@/Pages/Admin/Product/Create";
import { IsReadOnly } from "@/Pages/Admin/Product/Delete";

export default function ColorBox({ extend = {} }) {
    const errors = useContext(AllErrors);
    const isReadOnly = useContext(IsReadOnly);
    const errorsCreate = useContext(AllErrorsCreate);
    function init(color = {}, index = extend.length + 1) {
        return (
            <div className="col-md-6 mb-2 d-flex flex-wrap w-25" key={index}>
                <input
                    type="color"
                    className="form-control"
                    style={{
                        width: "56px",
                        padding: "4px",
                        height: "100%",
                    }}
                    name="color[]"
                    defaultValue={color.name}
                    disabled={isReadOnly}
                />
                <button
                    type="button"
                    onClick={useDelete}
                    className="delete-div-size-quantity btn btn-danger ms-2"
                >
                    <i className="bx bx-trash"></i>
                </button>
            </div>
        );
    }

    const [colors, setColors] = useState(
        Object.values(extend).map(
            (color, index) => color.type === "color" && init(color, index)
        )
    );

    return (
        <div className="mb-3 col-md-16">
            <InputLabel htmlFor="color" value={"Màu"} className="form-label" />
            <div className="ms-3 mb-3 col-md-14 alert-secondary p-4 rounded row">
                <div className="p-4 row">
                    {colors.length !== 0
                        ? colors.map((color) => color)
                        : setColors([init()])}
                </div>

                <div className="w-100 btn-form">
                    {!isReadOnly && (
                        <button
                            className="btn btn-primary ms-2 add-size-quantity"
                            onClick={() => {
                                setColors([...colors, init()]);
                            }}
                            type="button"
                        >
                            <i className="bx bx-plus"></i>
                        </button>
                    )}
                </div>
            </div>
            {(errors || errorsCreate) && (
                <InputError
                    message={errors ? errors.colors : errorsCreate.colors}
                    className="mt-2 text-danger small"
                />
            )}
        </div>
    );
}
