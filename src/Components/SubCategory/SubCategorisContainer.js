import {Col, Container, Row} from "react-bootstrap";
import SubCategoriesContainerHook from "../../hooks/subCategory/subCategories-container-hook";
import React from "react";


const SubCategoriesContainer = _=>{
    const [allData] = SubCategoriesContainerHook()
    const keys = Array.from(Object.keys(allData))
    return (
        <Container className={'mt-3'}>
            <div className={'admin-content-text'} >All SubCategories</div>
            <Row className={`my-2 d-flex justify-content-center justify-content-sm-start`}>
                {
                    keys.length>0 ? keys.map((key,i) =>
                        <Col sm={8} className={'border-bottom pb-2 mt-2'} key={i}>
                            <h5 className={'fw-bold'}>(Main Category) {key}: </h5>
                            <div className={'d-inline-block '}>SubCategories: </div>
                            <div  className={'d-inline-flex flex-wrap gap-1'} style={{marginLeft:'7px'}}>
                                {
                                    allData[key] && allData[key].length>0 ?
                                        allData[key].map((subCat,ii) =>
                                            <div key={ii} className={'px-1 d-inline-block'} style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            border: '2px solid #CCC',
                                            borderRadius: '10px',
                                            marginRight: "2px"
                                        }}>{subCat.name}
                                            <i className="fa-solid fa-xmark" style={{marginLeft:'7px',marginRight:'2px',cursor:'pointer'}}></i>
                                        </div>
                                        ): <span>This Category has No SubCategorise</span>
                                }

                            </div>

                        </Col>
                    )
                        : null
                }



            </Row>
        </Container>
    )
}

export default SubCategoriesContainer