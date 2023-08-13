import React from 'react'
import { Container, Row } from 'react-bootstrap';
import BrandCard from "./BrandCard";
import LoadingSpinner from "../Uitily/LoadingSpinner";
import baseURL from "../../Api/baseURL";


const BrandContainer = ({data,loading,isAdmin}) => {
    return (
        <Container className={'mt-3'}>
            <div className={'admin-content-text'} >All Brands</div>
            <Row className={`my-2 d-flex justify-content-center ${!loading ? 'justify-content-sm-start' : 'justify-content-sm-center'}`}>{
                !loading ?(
                        data && data.length
                            ? data.map((item,i) => <BrandCard isAdmin={isAdmin} key={i} img={item.image} item={item}/>)
                            : <h2 className='align-self-center m-auto w-auto'>There is no Brand</h2>)
                    : <LoadingSpinner animation='border' />

            }
            </Row>
        </Container>
    )
}

export default BrandContainer