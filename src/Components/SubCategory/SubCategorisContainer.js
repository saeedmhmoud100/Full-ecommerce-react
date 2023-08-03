import {Col, Container, Row} from "react-bootstrap";
import SubCategoriesContainerHook from "../../hooks/subCategory/subCategories-container-hook";
import React from "react";


const SubCategoriesContainer = _=>{
    return (
        <Container className={'mt-3'}>
            <div className={'admin-content-text'} >All SubCategories</div>
            <Row className={`my-2 d-flex justify-content-center justify-content-sm-start`}>
                <Col sm={8}>
                    <h5 className={'fw-bold'}>Cat: </h5>
                    <div>
                        <div className={'px-1 d-inline-block'} style={{
                            backgroundColor: 'white',
                            color: 'black',
                            border: '2px solid #CCC',
                            borderRadius: '10px',
                            marginRight: "2px"
                        }}>{'sunCat'}
                            <i className="fa-solid fa-xmark" style={{marginLeft:'7px',marginRight:'2px',cursor:'pointer'}}></i>
                        </div>
                    </div>

                </Col>


            </Row>
        </Container>
    )
}

export default SubCategoriesContainer