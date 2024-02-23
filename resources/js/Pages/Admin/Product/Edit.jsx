import React, { createContext, useEffect, useState } from "react";
import Layout from "@/Pages/Admin/Layout";
import ImageProductSingle from "@/Components/Product/ImageProductSingle";
import InputError from "@/Components/InputError";
import SizeQuantityBox from "@/Components/Product/SizeQuantityBox";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import ColorBox from "@/Components/Product/ColorBox";
import { Head, useForm } from "@inertiajs/react";
import Loading from "@/Components/Loading";

export const AllErrors = createContext(null);
export default function Edit({ product }) {
    const [arrNewImg, setArrNewImg] = useState([]);
    const [isSetData, setIsSetData] = useState(false);
    const { data, setData, patch, processing, errors } = useForm({
        name: "",
        price: null,
        colors: [],
        quantitys: [],
        sizes: [],
        sizeIds: [],
        description: "",
        oldImgs: [],
        imgs: [],
    });

    function handleSubmit(e) {
        e.preventDefault();
        const fData = new FormData(e.target);

        const newData = {
            ...data,
            // imgs: fData.get("img"),
            sizes: fData.getAll("size[]"),
            sizeIds: fData.getAll("sizeId[]"),
            quantitys: fData.getAll("quantity[]"),
            colors: fData.getAll("color[]"),
            oldImgs: fData.getAll("oldImg[]"),
        };
        setData(newData);
        setIsSetData(true);
    }

    useEffect(() => {
        isSetData &&
            (patch(route("product.update", product.id)), setIsSetData(false));
    }, [data]);

    useEffect(() => {
        const newData = {
            ...data,
            name: product.name,
            price: product.price,
            description: product.description,
        };

        setData(newData);
    }, []);

    return (
        <AllErrors.Provider value={errors}>
            <Layout>
                <Head title="Edit Product" />
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">
                        <span className="text-muted fw-light">
                            Quản lý sản phẩm /
                        </span>
                        Chỉnh sửa
                    </h4>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <h5 className="card-header">
                                    Chỉnh sửa sản phẩm
                                </h5>

                                <form
                                    id="formAccountSettings"
                                    onSubmit={handleSubmit}
                                    // encType="multipart/form-data"
                                >
                                    <div className="card-body">
                                        <ImageProductSingle
                                            images={product.imageProduct}
                                            arrNewImg={arrNewImg}
                                            setArrNewImg={setArrNewImg}
                                        />
                                    </div>
                                    <hr className="my-0" />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <InputLabel
                                                    htmlFor="name"
                                                    value={"Tên sản phẩm"}
                                                />
                                                <TextInput
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    defaultValue={product.name}
                                                    autoFocus={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    className="mt-2 text-danger small"
                                                    message={errors.name}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <InputLabel
                                                    htmlFor="price"
                                                    value={"Giá"}
                                                />
                                                <TextInput
                                                    className="form-control"
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    defaultValue={product.price}
                                                    onChange={(e) =>
                                                        setData(
                                                            "price",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    className="mt-2 text-danger small"
                                                    message={errors.price}
                                                />
                                            </div>
                                            {/* Size - quantity */}
                                            <SizeQuantityBox
                                                sizeQuantity={
                                                    product.extend_product
                                                }
                                            />
                                            {/* Màu */}
                                            <ColorBox
                                                extend={product.extend_product}
                                            />
                                            <div className="mb-3 col-md-16">
                                                <label
                                                    htmlFor="description"
                                                    className="form-label"
                                                >
                                                    Mô tả
                                                </label>
                                                <textarea
                                                    name="description"
                                                    className="form-control"
                                                    id="description"
                                                    cols="30"
                                                    rows="5"
                                                    defaultValue={
                                                        product.description
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                                <InputError
                                                    message={errors.description}
                                                    className="mt-2 text-danger small"
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning me-2"
                                                >
                                                    {processing ? (
                                                        <Loading className="text-white" />
                                                    ) : (
                                                        "Lưu thay đổi"
                                                    )}
                                                </button>
                                                <button
                                                    type="reset"
                                                    className="btn btn-outline-secondary"
                                                >
                                                    <a href="javascrip:history.back()">
                                                        Quay lại
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="/admin/assets/js/pages-account-settings-account.js"></script>
            </Layout>
        </AllErrors.Provider>
    );
}
