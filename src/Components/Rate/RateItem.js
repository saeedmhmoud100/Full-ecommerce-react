import React from 'react'
import { Row, Col } from 'react-bootstrap'
import rate from '../../Assets/images/rate.png'
import deleteicon from '../../Assets/images/delete.png'
import editicon from '../../Assets/images/edit.png'
import RateItemHook from "../../hooks/Reviews/rate-item-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";
const RateItem = ({data,owner}) => {
    const [DeleteReview,deleteLoading] = RateItemHook(data.product)
    return (
        <div>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2 px-2">{data.user.name}{owner ? ' (You)' : null}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{data.rating}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-flex me-4 py-2 pb-3 justify-content-between">
                    <div className="rate-description  d-inline ms-2">
                        {data.review}
                    </div>
                    {
                        owner?
                            <div className={'d-inline-flex align-items-center'}>
                                {/*<i className="fa-solid fa-trash-can text-center" style={{cursor:"pointer",color:"#ff0000",width:'20px',height:'20px',alignSelf:'center'}} ></i>*/}
                                {
                                    deleteLoading ? <LoadingSpinner className={'mx-2'} style={{width:'20px',height:'20px'}}></LoadingSpinner>
                                    :    <img alt={'delete icon'} onClick={_=>DeleteReview(data._id)} className={'mx-2'} src={deleteicon} width={'20px'} height={'20px'} style={{cursor:"pointer",color:"#ff0000"}}/>
                                }

                                <img alt={'edit icon'} className={'mx-2'} src={editicon} width={'20px'} height={'20px'} style={{cursor:"pointer"}}/>
                            </div>
                            : null
                    }

                </Col>
            </Row>
        </div>
    )
}

export default RateItem