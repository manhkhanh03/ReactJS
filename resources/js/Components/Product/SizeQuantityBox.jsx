import React, { useContext, useState } from "react";
import InputLabel from "../InputLabel";
import useDelete from "@/hooks/useDelete";
import InputError from "../InputError";
import { AllErrors } from "@/Pages/Admin/Product/Edit";
import { AllErrorsCreate } from "@/Pages/Admin/Product/Create";
import { IsReadOnly } from "@/Pages/Admin/Product/Delete";

export default function SizeQuantityBox({ sizeQuantity = {} }) {
    const errors = useContext(AllErrors);
    const errorsCreate = useContext(AllErrorsCreate);
    const isReadOnly = useContext(IsReadOnly);
    console.log(isReadOnly);

    function init(sq = {}, index = sizeQuantity.length + 1) {
        return (
            <div className="col-md-6 mb-2 d-flex flex-wrap" key={index}>
                <input type="hidden" name="sizeId[]" value={sq.id && sq.id} />
                <input
                    type="text"
                    name="size[]"
                    defaultValue={sq.name && sq.name}
                    style={{
                        width: "16%",
                    }}
                    className="form-control"
                    placeholder="Size"
                    readOnly={isReadOnly}
                />
                <p className="mt-2 text-danger small"></p>

                <input
                    type="text"
                    name="quantity[]"
                    defaultValue={sq.quantity && sq.quantity}
                    style={{
                        width: "50%",
                    }}
                    className="form-control"
                    placeholder="Số lượng"
                    readOnly={isReadOnly}
                />
                <p className="mt-2 text-danger small"></p>
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
    const [childs, setChilds] = useState(
        Object.values(sizeQuantity).map(
            (sq, index) => sq.type === "size" && init(sq, index)
        )
    );
    return (
        <div className="mb-3 col-md-16">
            <InputLabel
                htmlFor="size-quantity"
                value={"Size - Số lượng"}
                className="form-label"
            />
            <div className="ms-3 mb-3 col-md-14 alert-secondary p-4 rounded row">
                <div className="p-4 row">
                    {childs.length !== 0
                        ? childs.map((sq) => sq)
                        : setChilds([init()])}
                </div>
                <div className="w-100 btn-form">
                    {!isReadOnly && (
                        <button
                            className="btn btn-primary ms-2 add-size-quantity"
                            onClick={() => {
                                setChilds([...childs, init()]);
                            }}
                            type="button"
                        >
                            <i className="bx bx-plus"></i>
                        </button>
                    )}
                </div>
            </div>
            {(errors || errorsCreate) && (
                <>
                    <InputError
                        message={errors ? errors.sizes : errorsCreate.sizes}
                        className="mt-2 text-danger small"
                    />
                    <InputError
                        message={
                            errors ? errors.quantitys : errorsCreate.quantitys
                        }
                        className="mt-2 text-danger small"
                    />
                </>
            )}
        </div>
    );
}
