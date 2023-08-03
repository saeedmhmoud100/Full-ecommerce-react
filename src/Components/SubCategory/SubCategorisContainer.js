import {Col, Container, Row} from "react-bootstrap";
import SubCategoriesContainerHook from "../../hooks/subCategory/subCategories-container-hook";
import React from "react";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import SubCategoriesCard from "./SubCategorisCard";


const SubCategoriesContainer = _=>{
    const [allData,allSubCategories,loading] = SubCategoriesContainerHook()

    const keys = Array.from(Object.keys(allData))
    // console.log(allData)

    return (
        <Container className={'mt-3'}>
            {
                keys.length >0 ?
                    <div className={'admin-content-text'} >All SubCategories</div>
                    : null
            }
            <Row className={`my-2 d-flex justify-content-center justify-content-sm-start`} style={{minHeight:'200px'}}>
                {
                    keys.length>0 ? keys.map((key,i) =>
                        <Col sm={8} className={'border-bottom pb-2 mt-2'} key={i}>
                            <h5 className={'fw-bold'}>(Main Category) {key}: </h5>
                            <div className={'d-inline-block '}>SubCategories: </div>
                            <div  className={'d-inline-flex flex-wrap gap-1'} style={{marginLeft:'7px'}}>
                                {
                                    allData[key] && allData[key].length>0 ?
                                        allData[key].map((subCat,ii) =>
                                            <SubCategoriesCard subCat={subCat} ii={ii}/>
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



            {
                allSubCategories && allSubCategories.results  >0 ?
                    <div className={'admin-content-text'} >All SubCategories Contains WithOut  Main Category:</div>
                    : null
            }
            <Row className={`my-2 d-flex justify-content-center justify-content-sm-start`}>
                <Col sm={8} className={'border-bottom pb-2 mt-2'}>
                    <div  className={'d-inline-flex flex-wrap gap-1'} style={{marginLeft:'7px'}}>
                        {
                            allSubCategories &&allSubCategories.data && allSubCategories.data.length>0 ? allSubCategories.data.map((subCat,ii) =>
                                <SubCategoriesCard subCat={subCat} ii={ii}/>
                            ) : null
                        }

                    </div>

                </Col>

            </Row>
        </Container>
    )
}

export default SubCategoriesContainer