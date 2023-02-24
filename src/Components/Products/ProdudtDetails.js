import React from "react";
import {Col, Row} from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

function ProdudtDetails({product}){
    return(
        <div className='my-3'>
            <Row style={{justifyContent:'space-between'}}>
                <Col lg={3} md={4} sm={12}>
                    <ProductGallery product={product}/>
                </Col>
                <Col lg={8} md={5} sm={12}>
                    <ProductText product={product}/>
                </Col>
            </Row>
        </div>
    )
}

export default ProdudtDetails