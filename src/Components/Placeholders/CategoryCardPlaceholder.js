import React from 'react'
import {Card, Col, Placeholder} from 'react-bootstrap'
const CategoryCardPlaceholder = () => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className={`my-4 d-flex justify-content-around`}>
            <div className="allCard mb-3 " style={{cursor:"pointer"}}>
                {/*<div*/}
                {/*    className="categoty-card "*/}
                {/*    style={{ backgroundColor: `${background}` }}></div>{" "}*/}

                <svg className="bd-placeholder-img card-img-top categoty-card-img" width="100%" height="180"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                     preserveAspectRatio="xMidYMid slice" focusable="false" style={{borderRadius:"50%"}}><title>Placeholder</title>
                    <rect width="100%" height="110%" fill="#868e96"></rect>
                </svg>
                <Placeholder as={Card.Title} animation="glow" style={{margin:"auto",marginTop:"105%"}}>
                    <Placeholder xs={6} style={{marginLeft:"50%",transform:"translateX(-50%)"}}/>
                </Placeholder>
            </div>
        </Col>
    )
}

export default CategoryCardPlaceholder