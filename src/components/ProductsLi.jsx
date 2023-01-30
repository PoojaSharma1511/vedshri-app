import React from 'react'
import { Link } from 'react-router-dom'

function ProductsLi({ Item }) {

    const { Image, name, description, category } = Item
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">

                    <img className="img-fluid w-100" src={Image} alt="" />
                </div>
                <div className="text-center p-4">
                    <a className="d-block h5 mb-2 " href="">{name}</a>
                    <a className="d-block h5 mb-2 " href="">{description}</a>
                    <a className="d-block h5 mb-2 " href="">{category}</a>
                    <span className="text-primary me-1 ">$19.00</span>
                </div>
                <div className="d-flex border-top">
                    <small className="w-100 text-center border-end py-2">
                        <Link className="text-body" to={`/ViewDetails/${Item.id}`}><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                    </small>
                    {/* backtice `` */}

                </div>
            </div>
        </div>
    )
}

export default ProductsLi