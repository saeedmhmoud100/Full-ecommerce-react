import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from "./ProductCard";
import ProductCardOffline from "../Offline/ProductCardOffline";

const CardProductContainer = ({products,title,btntitle,pathText,imgURL}) => {
    console.log(products)
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-sm-content-center'>
                {
                    products && products.length>0?
                    products.map(item => <ProductCard key={item._id} product={item} background="#F4DBA4" imgURL={imgURL}/>)
                    :<>
                    <ProductCardOffline />
                    <ProductCardOffline />
                    <ProductCardOffline />
                    <ProductCardOffline />
                    </>
                }

            </Row>
        </Container>
    )
}

export default CardProductContainer