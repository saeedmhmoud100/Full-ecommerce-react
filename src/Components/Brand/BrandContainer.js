import React from 'react'
import { Container, Row } from 'react-bootstrap';
import BrandCard from "./BrandCard";
import LoadingSpinner from "../Uitily/LoadingSpinner";


const BrandContainer = ({data,loading}) => {
    return (
        <Container className={'mt-3'}>
            <div className={'admin-content-text'} >All Brands</div>
            <Row className={`my-2 d-flex ${!loading ? 'justify-content-start' : 'justify-content-center'}`}>{
                !loading ?(
                        data.length
                            ? data.map((item,i) => <BrandCard key={i} img={item.image} />)
                            : <h2 className='align-self-center m-auto w-auto'>There is no Brand</h2>)
                    : <LoadingSpinner animation='border' />

            }
            </Row>
        </Container>
    )
}

export default BrandContainer