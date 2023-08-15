import React from "react";
import {Col, Row} from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import ProductTextPlaceholder from "../Placeholders/ProductTextPlaceholder";

function ProdudtDetails({images,product,loading}){
    console.log(loading)
    return(
        <div className='my-3'>
            <Row style={{justifyContent:'space-between'}}>
                <Col lg={3} md={4} sm={12}>
                    {
                        loading ?
                            <div className="product-gallary-card d-flex justfiy-content-center  align-items-centerpt-2">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="100%"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#868e96"></rect>
                                </svg>
                            </div>
                            : <ProductGallery images={images} />
                    }

                </Col>
                <Col lg={8} md={5} sm={12}>
                    {
                        loading ?
                            <ProductTextPlaceholder />
                        : <ProductText product={product && product.data} />
                    }

                </Col>
            </Row>
        </div>
    )
}

export default ProdudtDetails