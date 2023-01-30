import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxwidth: "500px" }}>
                            <h1 className="display-5 mb-3">Our Products</h1>
                            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">

                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="product-item">
                                    <div className="position-relative bg-light overflow-hidden">
                                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-4">
                                        <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                        <span className="text-primary me-1">$19.00</span>
                                    </div>

                                </div>
                            </div>


                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="product-item">
                                    <div className="position-relative bg-light overflow-hidden">
                                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-4">
                                        <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                        <span className="text-primary me-1">$19.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="product-item">
                                    <div className="position-relative bg-light overflow-hidden">
                                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-4">
                                        <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                        <span className="text-primary me-1">$19.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="product-item">
                                    <div className="position-relative bg-light overflow-hidden">
                                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-4">
                                        <a className="d-block h5 mb-2" href="">Fresh Tomato</a>
                                        <span className="text-primary me-1">$19.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <Link className="btn btn-primary rounded-pill py-3 px-5" to={"/Product"}>Browse More Products</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Product