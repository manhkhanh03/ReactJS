import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import ColorBox from "@/Components/Product/ColorBox";
import ImageProductSingle from "@/Components/Product/ImageProductSingle";
import SizeQuantityBox from "@/Components/Product/SizeQuantityBox";
import TextInput from "@/Components/TextInput";
import React, { createContext, useEffect, useState } from "react";
import Layout from "@/Pages/Admin/Layout";
import { Head, useForm } from "@inertiajs/react";

export const IsReadOnly = createContext(null);
export default function Delete({ product }) {
    console.log(product);
    const { delete: destroy, processing } = useForm();
    function handleSubmitt(e) {
        e.preventDefault();

        destroy(route("product.destroy", product.id));
    }
    return (
        <IsReadOnly.Provider value={true}>
            <Layout>
                <Head title="Delete Product" />

                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">
                        <span className="text-muted fw-light">
                            Quản lý sản phẩm /
                        </span>
                        Xóa
                    </h4>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <h5 className="card-header">Xóa sản phẩm</h5>

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
                                                    value={product.name}
                                                    placeholder="Ví dụ: Khoai tây chiên"
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
                                                    value={product.price}
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
                                                    value={product.description}
                                                ></textarea>
                                            </div>
                                            <div className="mt-2">
                                                <button
                                                    type="submit"
                                                    className="btn btn-danger me-2"
                                                >
                                                    {processing ? (
                                                        <Loading className="text-white" />
                                                    ) : (
                                                        "Xóa sản phẩm"
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
        </IsReadOnly.Provider>
    );
}
