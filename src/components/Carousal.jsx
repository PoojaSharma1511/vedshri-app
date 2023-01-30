import React from 'react'
// import Floatbtn from './Floatbtn'

function Carousal() {
    return (
        <div className=" float-button container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="./img/carousel-1.jpg" alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-lg-7">
                                        <h1 className="display-2 mb-5 fs-1 animated slideInDown">ONE PLACE FOR YOUR ALL MEDICAL PROBLEMS
</h1>
                                        <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                        <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-lg-7">
                                        <h1 className="display-2 mb-5 fs-1 animated slideInDown">ONE PLACE FOR YOUR ALL MEDICAL PROBLEMS</h1>
                                        <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                        <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <Floatbtn/> */}
        </div>

    )
}

export default Carousal