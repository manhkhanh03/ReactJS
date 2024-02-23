import React, { createContext, useEffect, useState } from "react";
import Layout from "@/Pages/Admin/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import Loading from "@/Components/Loading";
import ImgUser from "@/Components/User/ImgUser";
import MyDropDown from "@/Components/MyDropDown";

export default function Create({ roles }) {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        email: "",
        role: "",
        avatar: "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        post(route("user.store"));
    }

    return (
        <Layout>
            <Head title="Edit User" />
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                    <span className="text-muted fw-light">
                        Quản lý người dùng /
                    </span>
                    Thêm mới
                </h4>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4">
                            <h5 className="card-header">Thêm mới người dùng</h5>

                            <form
                                id="formAccountSettings"
                                onSubmit={handleSubmit}
                                encType="multipart/form-data"
                            >
                                <div className="card-body">
                                    <ImgUser />
                                </div>
                                <hr className="my-0" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="mb-3 col-md-6">
                                            <InputLabel
                                                htmlFor="username"
                                                value={"Tên người dùng"}
                                            />
                                            <TextInput
                                                className="form-control"
                                                id="username"
                                                name="username"
                                                autoFocus={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "username",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                className="mt-2 text-danger small"
                                                message={errors.username}
                                            />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <InputLabel
                                                htmlFor="email"
                                                value={"Email"}
                                            />
                                            <TextInput
                                                className="form-control"
                                                type="text"
                                                name="email"
                                                id="email"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                className="mt-2 text-danger small"
                                                message={errors.email}
                                            />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <InputLabel
                                                htmlFor="password"
                                                value={"Mật khẩu"}
                                            />
                                            <TextInput
                                                className="form-control"
                                                type="password"
                                                name="password"
                                                id="password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                className="mt-2 text-danger small"
                                                message={errors.password}
                                            />
                                        </div>

                                        <MyDropDown
                                            roles={roles}
                                            setData={setData}
                                        />

                                        <div className="mt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-primary me-2"
                                            >
                                                {processing ? (
                                                    <Loading className="text-white" />
                                                ) : (
                                                    "Thêm người dùng"
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
            <script src="admin/assets/vendor/libs/jquery/jquery.js"></script>
            <script src="admin/assets/vendor/libs/popper/popper.js"></script>
            <script src="admin/assets/vendor/js/bootstrap.js"></script>
            <script src="admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

            <script src="admin/assets/vendor/js/menu.js"></script>
            <script src="admin/assets/js/main.js"></script>
        </Layout>
    );
}
