import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import SingleProduct from "./Includes/SingleProduct";

// function
export const RelatedProduct = createContext(null);
export default function RelatedProducts({ category }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        Axios.get(`/product/category/${category}`).then((res) => {
            setProducts(...products, res.data);
        });
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);
    return (
        <RelatedProduct.Provider value={products}>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">Sản phẩm</span>
                            <h2 className="mb-4">Sản phẩm tương tự</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <SingleProduct />
                        {/* <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                            <div className="product">
                                <a href="#" className="img-prod">
                                    <img
                                        className="img-fluid"
                                        src="images/product-1.jpg"
                                        alt="Colorlib Template"
                                    />
                                    <span className="status">30%</span>
                                    <div className="overlay"></div>
                                </a>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3>
                                        <a href="#">Bell Pepper</a>
                                    </h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                <span className="mr-2 price-dc">
                                                    $120.00
                                                </span>
                                                <span className="price-sale">
                                                    $80.00
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
                                                    <i className="ion-ios-menu"></i>
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
                        </div> */}
                    </div>
                </div>
            </section>
        </RelatedProduct.Provider>
    );
}
