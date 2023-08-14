import React from 'react'
import { Col,Card } from 'react-bootstrap'
const BrandCardPlaceholder = () => {
    return (
        <Col
            xs="10"
            sm="6"
            md="4"
            lg="2"
            className={`my-2 d-flex justify-content-sm-center`}>
            <Card
                className="my-1"
                style={{
                    width: "100%",
                    height: "151px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    cursor:'pointer'
                }}>
                {/*<Card.Img style={{ width: "100%", height: "151px" }} src={img} />*/}
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                     preserveAspectRatio="xMidYMid slice" focusable="false" style={{borderRadius:"4px"}}><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
            </Card>
        </Col>
    )
}

export default BrandCardPlaceholder