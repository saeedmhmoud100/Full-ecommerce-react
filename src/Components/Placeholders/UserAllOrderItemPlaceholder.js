import React from 'react'
import {Row, Col, Placeholder} from 'react-bootstrap'
const UserAllOrderItemPlaceholder = () => {


    return (
        <div className="user-order mt-2 pb-2">
            <Row>
                <div className="py-2 order-title"> </div>
            </Row>

            <div>
                <Row className="d-flex align-items-center">
                    <Col xs="3" md="2" className="d-flex justify-content-start">

                        <svg className="bd-placeholder-img card-img-top mx-2" width="100%" height="120"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                        </svg>
                    </Col>
                    <Col xs="8" md="6" className={'align-self-start'}>
                        <div className="d-inline cat-title">
                            <Placeholder as={"span"} animation="glow">
                                <Placeholder xs={3} />
                                <Placeholder xs={4} className={'mx-1'}/>
                                <Placeholder xs={3} className={'mx-1'}/>
                            </Placeholder>
                            <Placeholder as={"span"} animation="glow">
                                <Placeholder xs={4} />
                                <Placeholder xs={3} className={'mx-1'}/>
                                <Placeholder xs={2} className={'mx-1'}/>
                            </Placeholder>
                        </div>
                        <div className="mt-3 d-flex flex-wrap align-items-center">
                            <div className={'d-flex align-items-center '}>
                                <div className="cat-text  d-inline">Quantity</div>
                                <input
                                    className="mx-2 "
                                    type="number"
                                    style={{ width: "40px", height: "25px" }}
                                    disabled
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Row className="d-flex justify-content-between">
                <Col xs="6" className="mx-1">
                    <Placeholder as={"div"} animation="glow">
                        <Placeholder xs={3}  className={'mx-1'}/>
                    </Placeholder>
                    <Placeholder as={"span"} animation="glow">
                        <Placeholder xs={4} className={'mx-1'}/>
                        <Placeholder xs={3}/>
                    </Placeholder>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItemPlaceholder