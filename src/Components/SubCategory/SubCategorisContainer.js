import {Col, Container, Row} from "react-bootstrap";
import SubCategoriesContainerHook from "../../hooks/subCategory/subCategories-container-hook";
import React from "react";
import LoadingSpinner from "../Uitily/LoadingSpinner";


const SubCategoriesContainer = _=>{
    const [allData,loading] = SubCategoriesContainerHook()
    const keys = Array.from(Object.keys(allData))
    // console.log(allData)
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
                {
                    loading ?
                        <Col sm={8} className={' py-3 d-flex'}>

                            <LoadingSpinner animation={'border'} variant={'primary'} className={'m-auto'}></LoadingSpinner>
                        </Col>
                        : null
                }



            </Row>
        </Container>
    )
}

export default SubCategoriesContainer