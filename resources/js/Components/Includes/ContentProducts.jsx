import React from 'react'
import SingleProduct from './SingleProduct'
import Navigation from '../Navigation'

export default function ContentProducts({totalPage, currentPage, perPage}) {
  return (
      <section className="ftco-section">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-10 mb-5 text-center">
                      <ul className="product-category">
                          <li>
                              <a href="#" className="active">
                                  All
                              </a>
                          </li>
                          <li>
                              <a href="#">Vegetables</a>
                          </li>
                          <li>
                              <a href="#">Fruits</a>
                          </li>
                          <li>
                              <a href="#">Juice</a>
                          </li>
                          <li>
                              <a href="#">Dried</a>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Start List Product */}
              <div className="row">
                  <SingleProduct />
              </div>
              <div className="row mt-5">
                  <div className="col text-center">
                      <div className="block-27">
                          <Navigation
                              totalPage={totalPage}
                              currentPage={currentPage}
                              perPage={perPage}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
