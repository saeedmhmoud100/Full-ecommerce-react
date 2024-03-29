import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Col, Row} from "react-bootstrap";
import AddRateHook from "../../hooks/Reviews/add-rate-hook";
import LoadingSpinner from "../Uitily/LoadingSpinner";

function RatePost(){
    const [user,review,loading,setReview,setRate,onSubmit] = AddRateHook()

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 1,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        minimum:1,
        onChange: newValue => {
            setRate(newValue);
        }
    };
    return(
        <div>
            <div>
                <Row className="mt-3 ">
                    <Col sm="12" className="me-5  d-flex">
                        <div className="rate-name  d-inline ms-3 mt-1 px-2 align-self-center">{user.name+'  '} </div>
                        <ReactStars {...setting} />
                    </Col>
                </Row>
                <Row className="border-bottom mx-2">
                    <Col className="d-felx me-4 pb-2">
            <textarea
                value={review}
                onChange={e => setReview(e.target.value)}
                className="input-form-area p-2 mt-3"
                rows="2"
                cols="20"
                placeholder="Add your Comment..."
            />
                        <div className=" d-flex justify-content-end al">
                        {loading ? <LoadingSpinner className='d-flex justify-content-center align-items-center'></LoadingSpinner>
                            :
                                <div className="product-cart-add px-3  py-2 text-center d-inline" onClick={onSubmit}>Add a comment</div>
                        }
                            </div>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default RatePost