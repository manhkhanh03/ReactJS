import React, { useEffect } from "react";
import Layout from "@/Pages/Admin/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import Loading from "@/Components/Loading";
import ImgUser from "@/Components/User/ImgUser";
import MyDropDown from "@/Components/MyDropDown";

export default function Edit({ user, roles }) {
    const { data, setData, patch, processing, errors } = useForm({
        username: "",
        email: "",
        role: "",
        avatar: "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        patch(route("user.update", user.id));
    }

    useEffect(() => {
        const newData = {
            ...data,
            username: user.username,
            email: user.email,
            role: user.role,
        };

        setData(newData);
    }, []);

    return (
        <Layout>
            <Head title="Edit User" />
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                    <span className="text-muted fw-light">
                        Quản lý người dùng /
                    </span>
                    Chỉnh sửa
                </h4>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4">
                            <h5 className="card-header">
                                Chỉnh sửa người dùng
                            </h5>

                            <form
                                id="formAccountSettings"
                                onSubmit={handleSubmit}
                                encType="multipart/form-data"
                            >
                                <div className="card-body">
                                    <ImgUser avatar={user.avatar} />
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
                                                defaultValue={user.username}
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
                                                defaultValue={user.email}
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

                                        <MyDropDown
                                            roles={roles}
                                            active={user.role}
                                            setData={setData}
                                        />

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
            <script src="admin/assets/vendor/libs/jquery/jquery.js"></script>
            <script src="admin/assets/vendor/libs/popper/popper.js"></script>
            <script src="admin/assets/vendor/js/bootstrap.js"></script>
            <script src="admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

            <script src="admin/assets/vendor/js/menu.js"></script>
            <script src="admin/assets/js/main.js"></script>
        </Layout>
    );
}
