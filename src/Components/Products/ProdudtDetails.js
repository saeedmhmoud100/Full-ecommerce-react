import React from "react";
import {Col, Row} from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

function ProdudtDetails(){
    return(
        <div className='my-3'>
            <Row style={{justifyContent:'space-between'}}>
                <Col lg={3} md={4} sm={12}>
                    <ProductGallery />
                </Col>
                <Col lg={8} md={5} sm={12}>
                    <ProductText />
                </Col>
            </Row>
        </div>
    )
}

export default ProdudtDetails