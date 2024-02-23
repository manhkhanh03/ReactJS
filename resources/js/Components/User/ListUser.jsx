import moment from "moment";
import React from "react";

export default function ListUser({ users }) {
    return users.map((user, index) => (
        <tr key={index}>
            <th scope="row">{index}</th>
            <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar avatar-xs pull-up"
                        title=""
                        data-bs-original-title="Xem ảnh"
                    >
                        <a href={`/storage${user.avatar}`} target="_blank">
                            <img
                                src={`/storage${user.avatar}`}
                                alt="Avatar"
                                className="rounded-circle"
                            />
                        </a>
                    </li>
                </ul>
            </td>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{moment(user.created_at).format("hh:mm:ss DD/MM/YYYYY")}</td>
            <td>{moment(user.updated_at).format("hh:mm:ss DD/MM/YYYYY")}</td>
            <td>
                <a
                    href={`/admin/user/${user.id}/edit`}
                    className="btn btn-outline-warning"
                >
                    Edit
                </a>
                <a
                    href={`/admin/user/${user.id}`}
                    className="btn btn-outline-danger"
                >
                    Delete
                </a>
            </td>
        </tr>
    ));
}
