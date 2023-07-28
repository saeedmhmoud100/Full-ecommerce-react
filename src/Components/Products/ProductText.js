import React from 'react'
import { Row,Col } from 'react-bootstrap'
import '../../Assets/Style/Products.scss'
import LoadingSpinner from "../Uitily/LoadingSpinner";
import ProductTextHook from "../../hooks/product/product-text-hook";
import AddToCartHook from "../../hooks/cart/add-to-cart-hook";
const ProductText = ({product}) => {
    const [category,brand,subCatsNames] = ProductTextHook(product)
    const [selectedColor,addToCartLoading,setSelectedColor,handleAddToCartClick] = AddToCartHook(product)
    return (
        <div className='med-screen-padding'>
            <Row className="mt-2">
                <div className="cat-text">category : {category&& category.name}</div>
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
                            <div onClick={_=> setSelectedColor({hasColors: true,color: clr})} key={i} className="color ms-2"
                                 style={{ backgroundColor: `${clr}`,border : `${selectedColor.color === clr ? `2px solid #000` : 'none' }`}}></div>)
                            :null
                    }


                </Col>
            </Row>

            <Row className="mt-4">
                {
                    subCatsNames&& subCatsNames.length > 0 ?
                        <div className="cat-text d-flex flex-column"><span>specifications: </span>
                            <Col sm={6} >
                                {
                                    subCatsNames.map(sunCat => <div className={'px-1 d-inline-block mt-1'} style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            border: '2px solid #CCC',
                                            borderRadius: '10px',
                                            marginRight: "2px"
                                        }}>{sunCat}</div>

                                    )


                                }
                            </Col>

                        </div>
                        : null
                }



            </Row>
            <Row className="mt-2">
                <Col md="10">
                    <div style={{wordWrap: 'break-word'}} className="product-description d-inline">
                        {product ? product.description: null}
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12" className={'d-flex align-items-center justify-content-start text-center'}>
                    <div className="product-price d-inline px-3 py-3 border" style={{fontSize:'17px',paddingTop: '1.2%!important'}}>{product ? product.price : <LoadingSpinner className={"d-flex justify-content-center align-items-center"}></LoadingSpinner>}$</div>

                    <div onClick={handleAddToCartClick} className={`product-cart-add px-3 py-3 d-inline-flex mx-3 justify-content-center align-items-center ${addToCartLoading ? 'bg-light pt-2' : null}`}>{addToCartLoading ? <LoadingSpinner className={'m-auto'}  /> :'Add to cart'}</div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductText