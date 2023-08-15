import React from 'react'
import {Row, Col, Placeholder} from 'react-bootstrap'
import '../../Assets/Style/Products.scss'
const ProductTextPlaceholder = () => {
    return (
        <div className='med-screen-padding'>
            <Row className="my-2 mt-4">
                <div className="cat-text">category : <Placeholder as={"span"} animation="glow">
                    <Placeholder xs={3} />
                </Placeholder>
                </div>
            </Row>
            <Row className="my-2">
                <Col md="8">
                    <div className="cat-title d-inline ">
                        <Placeholder as={"div"} animation="glow">
                            <Placeholder xs={10} />
                        </Placeholder>
                        <Placeholder as={"div"} animation="glow">
                            <Placeholder xs={6} />{' '}<Placeholder xs={3} />
                        </Placeholder>
                    </div>
                </Col>
            </Row>
            <Row className="my-2">
                <Col md="8" className="mt-1">

                                <div className="cat-text d-inline">Brand: </div>
                                <Placeholder as={"span"} animation="glow">
                                    <Placeholder xs={9} />
                                </Placeholder>

                </Col>
            </Row>
            <Row className="my-2">
                <Col md="8" className="mt-1 align-items-center">


                    <Placeholder as={"span"} animation="glow">
                        <Placeholder xs={1} className={'mx-1'}/>
                        <Placeholder xs={1} className={'mx-1'}/>
                        <Placeholder xs={1} className={'mx-1'} />
                    </Placeholder>
                </Col>
            </Row>

            <Row  className="my-2">
                        <div className="cat-text d-inline flex-row flex-wrap "><span style={{padding:"5px 0",marginRight:"5px"}}>specifications: </span>
                            <Col sm={10} >
                                <Placeholder as={"span"} animation="glow">
                                    <Placeholder xs={8} />
                                    <Placeholder xs={3} className={'mx-1'}/>
                                </Placeholder>
                                <Placeholder as={"span"} animation="glow">
                                    <Placeholder xs={3} />
                                    <Placeholder xs={7} className={'mx-1'}/>
                                    <Placeholder xs={1}/>
                                </Placeholder>
                                <Placeholder as={"span"} animation="glow">
                                    <Placeholder xs={1} />
                                    <Placeholder xs={1} className={'mx-1'} />
                                    <Placeholder xs={4} className={'mx-1'}/>
                                    <Placeholder xs={4} />
                                </Placeholder>
                                <Placeholder as={"span"} animation="glow">
                                    <Placeholder xs={3} />
                                    <Placeholder xs={8} className={'mx-1'}/>
                                </Placeholder>
                                <Placeholder as={"span"} animation="glow">
                                    <Placeholder xs={4} />
                                    <Placeholder xs={1} className={'mx-1'} />
                                    <Placeholder xs={4} className={'mx-1'}/>
                                    <Placeholder xs={1} />
                                </Placeholder>
                            </Col>

                        </div>



            </Row>

            <Row  className="my-2">
                <Col md="12" className={'d-flex align-items-center justify-content-start text-center'}>

                        <div className="product-price d-inline px-3 py-3 border" style={{fontSize:'17px',paddingTop: '1.2%!important'}}>$</div>


                    <Col sm={2} className={` px-1 py-3 d-inline mx-1 justify-content-center align-items-center'}`}>
                        <Placeholder as={"span"} animation="glow">
                            <Placeholder xs={5} />
                            <Placeholder xs={5}/>
                        </Placeholder>
                        <Placeholder as={"span"} animation="glow">
                            <Placeholder xs={8} />
                            <Placeholder xs={2}/>
                        </Placeholder>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default ProductTextPlaceholder