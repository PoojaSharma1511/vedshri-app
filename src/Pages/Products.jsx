import React from 'react'
import { useContext } from 'react'
import Items from '../shared/data'
import ProductsLi from '../components/ProductsLi'
import ProductContext from '../context/ProductContext'


function Products() {

    const { Items } = useContext(ProductContext)
    return (
        <div className="container-box py-5 ">
            <div className="container ">
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

                            {
                                Items.map((Item) =>
                                    <ProductsLi key={Item.id} Item={Item} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products