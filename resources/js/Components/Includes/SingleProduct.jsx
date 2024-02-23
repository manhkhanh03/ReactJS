import React, { useContext } from "react";
import diacritics from "diacritics";
import { Products } from "@/Pages/PageProducts";
import { RelatedProduct } from "../RelatedProducts";

export default function SingleProduct() {
    const products = useContext(Products) || useContext(RelatedProduct);
    return products.map((product, index) => {
        const name = diacritics.remove(product.name).replace(/\s+/g, "-");
        const url = `/product/name/${product.id}/${name}`;
        return (
            <div
                className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated"
                key={index}
            >
                <div className="product">
                    <a href={url} className="img-prod">
                        <img
                            className="img-fluid"
                            src={`/storage${product.image_product[0].url}`}
                            alt={product.name}
                        />
                        <span className="status">30%</span>
                        <div className="overlay"></div>
                    </a>
                    <div className="text py-3 pb-4 px-3 text-center">
                        <h3>
                            <a href={url}>{product.name}</a>
                        </h3>
                        <div className="d-flex">
                            <div className="pricing">
                                <p className="price">
                                    {/* <span className="mr-2 price-dc">$120.00</span> */}
                                    <span className="price-sale">
                                        {product.price} VND
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="bottom-area d-flex px-3">
                            <div className="m-auto d-flex">
                                <a
                                    href="#"
                                    className="add-to-cart d-flex justify-content-center align-items-center text-center"
                                >
                                    <span>
                                        <i className="bx bx-menu"></i>
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="buy-now d-flex justify-content-center align-items-center mx-1"
                                >
                                    <span>
                                        <i className="ion-ios-cart"></i>
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="heart d-flex justify-content-center align-items-center "
                                >
                                    <span>
                                        <i className="ion-ios-heart"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}
