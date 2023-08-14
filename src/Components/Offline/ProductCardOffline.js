import React from 'react'
import {Card, Col, Placeholder} from 'react-bootstrap'
const ProductCardOffline = () => {
    return (
        <Col xs="10" sm="6" md="4" lg="3" className="d-flex">

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    minHeight: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                {/*<Card.Img variant={"top"} src={"http://www.w3.org/2000/svg"}>*/}

                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                    </svg>
                {/*</Card.Img>*/}

                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={9} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    {/*<div className={"d-flex justify-content-between"}>*/}
                    {/*    <Placeholder as={"span"} variant="primary" xs={2} />*/}
                    {/*    <Placeholder as={"span"} variant="primary" xs={1    } />*/}
                    {/*</div>*/}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCardOffline