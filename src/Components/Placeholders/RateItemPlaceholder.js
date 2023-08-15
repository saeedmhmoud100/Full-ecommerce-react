import React from 'react'
import {Row, Col, Placeholder} from 'react-bootstrap'
const RateItemPlaceholder = () => {

    return (
        <div>

            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2 px-2">
                        <Placeholder as={"span"} animation="glow">
                            <Placeholder xs={1} />
                        </Placeholder>
                    </div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col sm={8} className="d-flex me-4 py-2 pb-3 justify-content-between">
                    <div className="rate-description  d-inline ms-2 w-100">
                        <Placeholder as={"div"} animation="glow">
                            <Placeholder xs={7}/>
                            <Placeholder xs={3} className={'mx-1'} />
                        </Placeholder>

                        <Placeholder as={"div"} animation="glow">
                            <Placeholder xs={1} />
                            <Placeholder xs={4} className={'mx-1'} />
                        </Placeholder>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RateItemPlaceholder