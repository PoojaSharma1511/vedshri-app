import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ProductContext from '../context/ProductContext'


function ProductItem() {

    const params = useParams() // object return karta h

    const { Items } = useContext(ProductContext)


    const currentProduct = Items.filter(Item => Item.id === parseInt(params.id))

    // console.log(currentProduct);
    return (

        <div className="container-xxl  py-5 ">
            <div className="container  mt-5">
                <div className="row g-5 align-items-center mt-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        {/* <div className="about-img position-relative overflow-hidden p-5 pe-0">
                    <img className="img-fluid w-100" src="img/med.png"/>
                </div> */}<div className="img-section-Item">
                            <img src={currentProduct[0].Image} alt="" />
                        </div>
                    </div>
                    <div className="myname col-lg-6  wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="display-5 mb-4">{currentProduct[0].name}</h1>
                        <p className="mb-4">{currentProduct[0].description}</p>
                        <div className="text-start p-4">

                            <span className="text-primary me-1"> $19.00</span>
                        </div><a target={'_blank'} className="btn btn-primary rounded-pill w-0 py-3 px-5 mt-3" href="https://wa.link/l019y4">Consult Dr</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProductItem