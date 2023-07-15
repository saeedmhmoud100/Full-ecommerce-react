import React from 'react'
import { Row,Col } from 'react-bootstrap'
import '../../Assets/Style/Products.scss'
import {useSelector} from "react-redux";
import LoadingSpinner from "../Uitily/LoadingSpinner";
const ProductText = ({product}) => {

    const category = useSelector(state => state.allCategory.oneCategory ? state.allCategory.oneCategory.data:[])
    const brand = useSelector(state => state.allBrand.brand)


    return (
        <div className='med-screen-padding'>
            <Row className="mt-2">
                <div className="cat-text">{category && category.name} :</div>
            </Row>
            <Row>
                <Col md="8">
                    <div className="cat-title d-inline">
                        {product && product.title} <div className="cat-rate d-inline mx-3">{product &&(product.ratingsAverage || 0)}</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-4">
                    {
                        brand?
                            <>
                                <div className="cat-text d-inline">Brand: </div>
                                <div className="barnd-text d-inline mx-1">{brand.data && brand.data.name} </div>
                            </> : null
                    }

                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-1 d-flex">
                    {
                        product?
                        product.availableColors.map((clr,i)=>
                            <div key={i} className="color ms-2 border" style={{ backgroundColor: `${clr}` }}></div>)
                            :null
                    }


                </Col>
            </Row>

            <Row className="mt-4">
                <div className="cat-text">specifications: </div>
            </Row>
            <Row className="mt-2">
                <Col md="10">
                    <div style={{wordWrap: 'break-word'}} className="product-description d-inline">
                        {product ? product.description: null}
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <div className="product-price d-inline px-3 py-3 border">{product ? product.price : <LoadingSpinner className={"d-flex justify-content-center align-items-center"}></LoadingSpinner>}$</div>
                    <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to cart</div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductText