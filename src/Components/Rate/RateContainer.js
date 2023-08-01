import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../Assets/images/rate.png'
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../Uitily/Pagination";
import RateContainerHook from "../../hooks/Reviews/rate-container-hook";

const RateContainer = ({product}) => {
    const [reviewsOfProduct,user,getPage]= RateContainerHook()
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Ratings</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{product.data && (product.data.ratingsAverage || 0)}</div>
                    <div className="rate-count d-inline p-1 pt-2">({product.data && (product.data.ratingsQuantity || 0)} reviews)</div>
                </Col>
            </Row>
            {
                user.role === 'user'?
                <RatePost />
                : null

            }
            {
                reviewsOfProduct && reviewsOfProduct.results >0 ?

                    (
                        <>
                        {reviewsOfProduct.data.filter(item => item.user._id === user._id) ?reviewsOfProduct.data.filter(item => item.user._id === user._id).map(item => <RateItem key={item._id} data={item} owner={true}/>) : null}
                        {reviewsOfProduct.data.filter(item => item.user._id !== user._id) ? reviewsOfProduct.data.filter(item => item.user._id !== user._id).map(item => <RateItem key={item._id} data={item} owner={false}/>) : null}
                        {/*{reviewsOfProduct.data.map(item => <RateItem key={item._id} data={item}/>) }*/}
                        </>
                    )

                     : <h2 className={'text-center'}>there are no reviews</h2>

            }



            {
                reviewsOfProduct && reviewsOfProduct.paginationResult && reviewsOfProduct.paginationResult.numberOfPages >1 ?
                    <Pagination pagesCount={reviewsOfProduct.paginationResult.numberOfPages} onPress={getPage}/>
                    : null
            }


        </Container>
    )
}

export default RateContainer