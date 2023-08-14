import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from "./ProductCard";
import ProductCardPlaceholder from "../Placeholders/ProductCardPlaceholder";

const CardProductContainer = ({products,title,btntitle,pathText,imgURL}) => {
    console.log(products)
    return (
        <Container>
            <SubTiltle title={title} btntitle={products && products.length > 0 && btntitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-sm-content-center'>
                {
                    products && products.length>0?
                    products.map(item => <ProductCard key={item._id} product={item} background="#F4DBA4" imgURL={imgURL}/>)
                    :<>
                    <ProductCardPlaceholder />
                    <ProductCardPlaceholder />
                    <ProductCardPlaceholder />
                    <ProductCardPlaceholder />
                    </>
                }

            </Row>
        </Container>
    )
}

export default CardProductContainer