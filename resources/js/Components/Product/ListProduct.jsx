import moment from "moment";
import React from "react";

export default function ListProduct({ products }) {
    return products.map((product, index) => (
        <tr key={index}>
            <th scope="row">{index}</th>
            <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    {product.image_product.map((img) => {
                        return (
                            <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title=""
                                data-bs-original-title="Xem ảnh"
                            >
                                <a href={`/storage${img.url}`} target="_blank">
                                    <img
                                        src={`/storage${img.url}`}
                                        alt="Avatar"
                                        className="rounded-circle"
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.user.username}</td>
            <td>{product.status}</td>
            <td>{moment(product.created_at).format("hh:mm:ss DD/MM/YYYYY")}</td>
            <td>{moment(product.updated_at).format("hh:mm:ss DD/MM/YYYYY")}</td>
            <td>
                <a
                    href={`/admin/product/${product.id}/edit`}
                    className="btn btn-outline-warning"
                >
                    Edit
                </a>
                <a
                    href={`/admin/product/${product.id}`}
                    className="btn btn-outline-danger"
                >
                    Delete
                </a>
            </td>
        </tr>
    ));
}
