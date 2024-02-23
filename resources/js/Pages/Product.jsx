import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import LayoutUser from "@/Components/Includes/LayoutUser";
import RelatedProducts from "@/Components/RelatedProducts";

export default function Product({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        console.log(total);
    }, [total]);
    return (
        <>
            <Head title={product.name} />
            <LayoutUser page={"Products"}>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
                                <a
                                    href={`/storage${product.image_product[0].url}`}
                                    className="image-popup"
                                >
                                    <img
                                        src={`/storage${product.image_product[0].url}`}
                                        className="img-fluid"
                                        alt="Colorlib Template"
                                    />
                                </a>
                            </div>
                            <div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
                                <h3>{product.name}</h3>
                                <div className="rating d-flex">
                                    <p className="text-left mr-4">
                                        <a href="#" className="mr-2">
                                            5.0
                                        </a>
                                        <a href="#">
                                            <span className="ion-ios-star-outline"></span>
                                        </a>
                                        <a href="#">
                                            <span className="ion-ios-star-outline"></span>
                                        </a>
                                        <a href="#">
                                            <span className="ion-ios-star-outline"></span>
                                        </a>
                                        <a href="#">
                                            <span className="ion-ios-star-outline"></span>
                                        </a>
                                        <a href="#">
                                            <span className="ion-ios-star-outline"></span>
                                        </a>
                                    </p>
                                    <p className="text-left mr-4">
                                        <a
                                            href="#"
                                            className="mr-2"
                                            style={{ color: "#000" }}
                                        >
                                            100{" "}
                                            <span style={{ color: "#bbb" }}>
                                                Rating
                                            </span>
                                        </a>
                                    </p>
                                    <p className="text-left">
                                        <a
                                            href="#"
                                            className="mr-2"
                                            style={{ color: "#000" }}
                                        >
                                            500{" "}
                                            <span style={{ color: "#bbb" }}>
                                                Sold
                                            </span>
                                        </a>
                                    </p>
                                </div>
                                <p className="price">
                                    <span>{product.price} VND</span>
                                </p>
                                <p>{product.description}</p>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <div className="form-group d-flex">
                                            <div className="select-wrap">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down"></span>
                                                </div>
                                                <select
                                                    name="size"
                                                    id="size"
                                                    className="form-control"
                                                    onChange={(event) => {
                                                        const selectedSizeId =
                                                            event.target.value;
                                                        const selectedSize =
                                                            product.extend_product.find(
                                                                (size) =>
                                                                    size.id ==
                                                                    selectedSizeId
                                                            );
                                                        console.log(
                                                            selectedSize
                                                        );

                                                        if (selectedSize) {
                                                            setTotal(
                                                                selectedSize.quantity
                                                            );
                                                            setDisabled(true);
                                                        }
                                                    }}
                                                >
                                                    <option
                                                        value=""
                                                        disabled={disabled}
                                                    >
                                                        Chọn
                                                    </option>
                                                    {product.extend_product.map(
                                                        (size) =>
                                                            size.type ===
                                                                "size" && (
                                                                <option
                                                                    value={
                                                                        size.id
                                                                    }
                                                                    key={
                                                                        size.id
                                                                    }
                                                                >
                                                                    {size.name}
                                                                </option>
                                                            )
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="input-group col-md-6 d-flex mb-3">
                                        <span className="input-group-btn mr-2">
                                            <button
                                                type="button"
                                                className="quantity-left-minus btn"
                                                data-type="minus"
                                                data-field=""
                                                onClick={() => {
                                                    quantity > 1 &&
                                                        setQuantity(
                                                            quantity - 1
                                                        );
                                                }}
                                            >
                                                <i className="bx bx-minus"></i>
                                            </button>
                                        </span>
                                        <input
                                            type="text"
                                            id="quantity"
                                            name="quantity"
                                            className="form-control input-number"
                                            value={quantity}
                                            min="1"
                                            max="100"
                                        />
                                        <span className="input-group-btn ml-2">
                                            <button
                                                type="button"
                                                className="quantity-right-plus btn"
                                                data-type="plus"
                                                data-field=""
                                                onClick={() => {
                                                    setQuantity(quantity + 1);
                                                }}
                                            >
                                                <i className="bx bx-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-12">
                                        <p style={{ color: "#000" }}>
                                            {total} Sản phẩm
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    <a
                                        href="cart.html"
                                        className="btn btn-black py-3 px-5"
                                    >
                                        Add to Cart
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedProducts category={product.category} />
            </LayoutUser>
        </>
    );
}
