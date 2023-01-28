import React from "react";
import {Col, Row} from "react-bootstrap";
import ProductGallery from "./ProductGallery";

function ProdudtDetails(){
    return(
        <div>
            <Row >
                <Col lg={4}>
                    <ProductGallery />
                </Col>
                <Col lg={8}>

                </Col>
            </Row>
        </div>
    )
}

export default ProdudtDetails