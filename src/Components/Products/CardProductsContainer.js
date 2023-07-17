import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from "./ProductCard";
import LoadingSpinner from "../Uitily/LoadingSpinner";

const CardProductContainer = ({products,title,btntitle,pathText}) => {

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-sm-content-center'>
                {
                    products?
                    products.map(item => <ProductCard key={item._id} product={item} background="#F4DBA4" />)
                    :<div className='d-flex justify-content-center'><LoadingSpinner></LoadingSpinner></div>
                }

            </Row>
        </Container>
    )
}

export default CardProductContainer