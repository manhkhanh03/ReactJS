import React from "react";
import Layout from "@/Pages/Admin/Layout";
import ListProduct from "@/Components/Product/ListProduct";
import { Head } from "@inertiajs/react";

export default function Index({ products }) {
    return (
        <Layout>
            <Head title="Products" />
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <h5 className="card-header">Danh sách sản phẩm</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr className="text-nowrap">
                                    <th>#</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Người tạo</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày tạo</th>
                                    <th>Ngày chỉnh sửa</th>
                                    <th>Tuỳ chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ListProduct products={products} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
