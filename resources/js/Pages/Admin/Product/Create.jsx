import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import ColorBox from "@/Components/Product/ColorBox";
import ImageProductSingle from "@/Components/Product/ImageProductSingle";
import SizeQuantityBox from "@/Components/Product/SizeQuantityBox";
import TextInput from "@/Components/TextInput";
import React, { createContext, useEffect, useState } from "react";
import Layout from "@/Pages/Admin/Layout";
import Axios from "axios";
import { Head, useForm } from "@inertiajs/react";
import Loading from "@/Components/Loading";

export const AllErrorsCreate = createContext(null);

export default function Create() {
    const [isSetData, setIsSetData] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: null,
        colors: [],
        quantitys: [],
        sizes: [],
        description: "",
        imgs: [],
        sizeIds: [],
    });

    function handleSubmitt(e) {
        e.preventDefault();
        const fData = new FormData(e.target);
        const newDT = {
            ...data,
            sizes: fData.getAll("size[]"),
            quantitys: fData.getAll("quantity[]"),
            sizeIds: fData.getAll("sizeId[]"),
            colors: fData.getAll("color[]"),
        };
        setData(newDT);
        setIsSetData(true);
    }

    useEffect(() => {
        isSetData && (post(route("product.store")), setIsSetData(false));
    }, [data]);
    return (
        <AllErrorsCreate.Provider value={errors}>
            <Layout>
                <Head title="Create Product" />

                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">
                        <span className="text-muted fw-light">
                            Quản lý sản phẩm /
                        </span>
                        Thêm mới
                    </h4>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <h5 className="card-header">
                                    Thêm mới sản phẩm
                                </h5>

                                <form
                                    id="formAccountSettings"
                                    onSubmit={handleSubmitt}
                                    encType="multipart/form-data"
                                >
                                    <div className="card-body">
                                        <ImageProductSingle />
                                    </div>
                                    <hr className="my-0" />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <InputLabel
                                                    htmlFor="name"
                                                    className="form-label"
                                                    value={"Tên sản phẩm"}
                                                />
                                                <TextInput
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    autoFocus={true}
                                                    placeholder="Ví dụ: Khoai tây chiên"
                                                    onChange={(e) => {
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        );
                                                    }}
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
                                                    className="form-label"
                                                />
                                                <TextInput
                                                    className="form-control"
                                                    name="price"
                                                    id="price"
                                                    onChange={(e) => {
                                                        setData(
                                                            "price",
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <InputError
                                                    className="mt-2 text-danger small"
                                                    message={errors.price}
                                                />
                                            </div>
                                            {/* Size - quantity */}
                                            <SizeQuantityBox />
                                            {/* Màu */}
                                            <ColorBox />
                                            <div className="mb-3 col-md-16">
                                                <InputLabel
                                                    htmlFor="description"
                                                    value={"Mô tả"}
                                                    className="form-label"
                                                />
                                                <textarea
                                                    name="description"
                                                    className="form-control"
                                                    id="description"
                                                    cols="30"
                                                    rows="5"
                                                    onChange={(e) => {
                                                        setData(
                                                            "description",
                                                            e.target.value
                                                        );
                                                    }}
                                                ></textarea>
                                                <InputError
                                                    className="mt-2 text-danger small"
                                                    message={errors.description}
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning me-2"
                                                >
                                                    {
                                                        processing ? <Loading className="text-white" /> : "Thêm sản phẩm"
                                                    }
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
        </AllErrorsCreate.Provider>
    );
}
