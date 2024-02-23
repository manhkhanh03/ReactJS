import React from "react";
import Layout from "@/Pages/Admin/Layout";
import { Head } from "@inertiajs/react";
import ListUser from "@/Components/User/ListUser";

export default function Index({ users }) {
    return (
        <Layout>
            <Head title="Users" />
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <h5 className="card-header">Danh sách người dùng</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr className="text-nowrap">
                                    <th>#</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên người dùng</th>
                                    <th>Vai trò</th>
                                    <th>Email</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày tạo</th>
                                    <th>Ngày chỉnh sửa</th>
                                    <th>Tuỳ chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ListUser users={users} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
